"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
    const router = useRouter();

  const createMeeting = async () => {
    try {
      const res = await axios.post("/api/meeting");
      const meetingCode = res.data.meetingCode;
      router.push(`/join/${meetingCode}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
    <button
      className="text-xl font-semibold bg-green-400 px-5 py-2 rounded-xl text-sky-600"
      onClick={createMeeting}
    >
      Create Meeting
    </button>
    </div>
  )
}