import JoinClient from "@/components/Meeting/Join";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function JoinMeet(context: {params: Promise<{id: string}>}) {
    const {id} = await context.params;
    const link = `http://localhost:8080/join/${id}`

    const session = await getServerSession();

    if(!session){
        redirect("/login");
    }
    return (
        <JoinClient link={link} id={id}/>
    )
};
