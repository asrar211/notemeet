
import Create from "@/components/Meeting/Create";
import axios from "axios";
import { getServerSession } from "next-auth"
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await getServerSession();

    if (!session){
        redirect("/login")
    }

    return (
        <div className="flex justify-center items-center h-dvh">
            <Create/>
        </div>
    )
};
