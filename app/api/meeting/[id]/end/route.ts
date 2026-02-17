import { authOptions } from "@/lib/auth";
import DBConnect from "@/lib/db";
import Meeting from "@/models/Meeting";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const session = await getServerSession(authOptions);
        if(!session?.user?.id){
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        await DBConnect();

        const {id} = await context.params;

        const meeting = await Meeting.findOne({meetingCode: id});
        if (!meeting) {
        return NextResponse.json(
            { error: "Meeting not found" }, 
            { status: 404 });
        }

        if (meeting.hostId.toString() !== session.user.id){
            return NextResponse.json(
                { error: "Only host can end meeting" },
                { status: 403 }
            );
        }

        meeting.status = "ended";

        await meeting.save();

        return NextResponse.json(
            {message: "Meeting Ended Successfully"}
        )
    } catch (error) {
        console.error("Meeting Ending error:", error);
        
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}