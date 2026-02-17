import { authOptions } from "@/lib/auth";
import DBConnect from "@/lib/db";
import Meeting from "@/models/Meeting";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
 context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await DBConnect();
    const {id} = await context.params;
    console.log(id)

    const meeting = await Meeting.findOne({
      meetingCode: id
    });

    if (!meeting) {
      return NextResponse.json(
        { error: "Meeting not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { meeting },
      { status: 200 }
    );

  } catch (error) {
    console.error("Meeting fetch error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}