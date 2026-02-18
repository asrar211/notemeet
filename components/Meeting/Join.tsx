"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

type Status = "joining" | "success" | "error";

export default function JoinClient({ id, link }: { id: string, link: string }) {
  const [status, setStatus] = useState("joining");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const joinMeeting = async () => {
      try {
        const { data } = await axios.post(
          `/api/meeting/${id}/join`
        );

        if (data.error) {
          setStatus("error");
          setError(data.error);
          return;
        }

        setStatus("success");
      } catch (err: any) {
        setStatus("error");
        setError(
          err.response?.data?.error || "Something went wrong"
        );
      }
    };

    joinMeeting();
  }, [id]);

  if (status === "joining") {
    return <div>Connecting...</div>;
  }

  if (status === "error") {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <>
      <div className="text-center py-2 text-sm text-gray-500">
        {link}
      </div>

      <div className="grid grid-cols-1 h-screen xl:grid-cols-2">
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative w-80 h-70 xl:w-100 bg-gray-300 xl:h-100 rounded-xl shadow-md">
            <User className="w-full h-full" color="gray" />
            <div className="w-20 h-20 bg-gray-200 absolute top-2 right-3 rounded-xl shadow-md">
              <User className="w-full h-full" color="gray" />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <textarea
            placeholder="Notes..."
            className="w-80 h-70 xl:w-100 xl:h-100 border border-neutral-500 outline-none resize-none rounded-xl p-2 text-base shadow-md"
          />
        </div>
      </div>
    </>
  );
}