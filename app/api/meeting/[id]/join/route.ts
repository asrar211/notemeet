import { authOptions } from "@/lib/auth";
import DBConnect from "@/lib/db";
import Meeting from "@/models/Meeting";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, context: {params: Promise<{id: string}>}) {
    try {
        const session = await getServerSession(authOptions);
        if(!session){
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        await DBConnect();

        const {id} = await context.params;
        
        const meeting = await Meeting.findOne({meetingCode: id});
        if(!meeting){
            return NextResponse.json(
            { error: "Meeting not found" }, 
            { status: 404 });
        }
        if(meeting.status == "ended"){
            return NextResponse.json(
            { error: "Meeting not found" }, 
            { status: 404 });
        }

        if (meeting.hostId.toString() === session.user.id) {
  meeting.status = "active";
  await meeting.save();

  return NextResponse.json(
    { message: "Host joined successfully" },
    { status: 200 }
  );
}

        const updatedMeeting = await Meeting.findOneAndUpdate(
      {
        meetingCode: id,
        participantId: null, // Only update if no participant
      },
      {
        participantId: session.user.id,
        status: "active",
      },
      { new: true }
    );

    // If update failed, means participant already exists
    if (!updatedMeeting) {
      // Check if same participant is rejoining
      if (
        meeting.participantId &&
        meeting.participantId.toString() === session.user.id
      ) {
        return NextResponse.json(
          { message: "Rejoined successfully" },
          { status: 200 }
        );
      }

        return NextResponse.json(
            { error: "Meeting already has a participant" },
            { status: 400 });
        }

        return NextResponse.json(
            { message: "Joined successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Meeting Ending error:", error);
                
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}