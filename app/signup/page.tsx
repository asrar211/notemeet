import SignUp from "@/components/Auth/Signup";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignupUser() {
    const session = await getServerSession();

    if(session){
        redirect("/dashboard")
    }
    return <SignUp/>
};
