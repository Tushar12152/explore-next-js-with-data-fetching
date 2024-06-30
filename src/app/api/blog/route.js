import { NextResponse } from "next/server"




// GetAPi
export const GET =()=>{
    return NextResponse.json({message:'Hello World'})
}