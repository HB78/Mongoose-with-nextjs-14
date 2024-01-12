import { NextResponse } from "next/server";
import connect from "@/utils/db"
import users from "@/models/usermodel"

export const POST = async (req) => {
    // I was trying to get the data from the request body but it's not working
    // form encoded with thnuder client does not work
    await connect()
    const { firstname } = await req.json()
    console.log(req)
    console.log('firstname:', firstname)

    if(!firstname){
        return new NextResponse("no data")
    }

    try {
        const userCreating = await new users({
            firstname: firstname
        })
        const userSaved = userCreating.save()
        return new NextResponse("utilisateur crée avec succes", {
            status : 201,
            message: userSaved
        })
    } catch (error) {
        console.log('error:', error)
        return new NextResponse("erreur du serveur dans la fonction create user", { status: 500 });
    }
};