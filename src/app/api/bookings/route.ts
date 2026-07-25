import { NextResponse } from "next/server";
import { addBooking } from "@/lib/bookings";


export async function POST(
  request: Request
){

  const data = await request.json();


  const booking = addBooking({

    id: crypto.randomUUID(),

    name: data.name,

    email: data.email,

    phone: data.phone,

    service: data.service,

    date: data.date,

    status: "pending"

  });


  return NextResponse.json(
    booking
  );

}
