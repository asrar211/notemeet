import { authOptions } from "@/lib/auth";
import DBConnect from "@/lib/db";
import Meeting from "@/models/Meeting";
import { getServerSession } from "next-auth";
import {NextResponse } from "next/server";
import crypto from "crypto";

function generateMeetingCode() {
    return crypto.randomBytes(6).toString("hex");
}

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await DBConnect();

    const meetingCode = generateMeetingCode();

    const meeting = await Meeting.create({
      hostId: session.user.id,
      meetingCode,
      status: "waiting",
      participantId: null,
    });

    return NextResponse.json(
      {
        message: "Meeting created successfully",
        meetingCode: meeting.meetingCode,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Meeting creation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


