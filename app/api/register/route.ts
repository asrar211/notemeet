import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {name, email, username, password} = body;
        if(!name || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return NextResponse.json(
                { error: "Already Registered, Please Login" },
                { status: 400 }
            );
        }
        const existingUsername = await User.findOne({username});
        if(existingUsername) {
            return NextResponse.json(
                { error: "Username is already used, try different one" },
                { status: 400 }
            );
        }

        const user = User.create({
            name, 
            email,
            username,
            password
        })

        return NextResponse.json(
            { message: "User registered" },
            { status: 201 },
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {error: "Server Error"},
            {status: 501}
        )
    }
}