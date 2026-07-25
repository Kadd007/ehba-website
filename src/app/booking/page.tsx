"use client";

import { useState } from "react";


export default function BookingPage(){

const [message,setMessage] = useState("");


async function submitBooking(
e:React.FormEvent<HTMLFormElement>
){

e.preventDefault();


const form =
new FormData(e.currentTarget);


await fetch(
"/api/bookings",
{
method:"POST",
body:JSON.stringify({

name:
form.get("name"),

email:
form.get("email"),

phone:
form.get("phone"),

service:
form.get("service"),

date:
form.get("date")

})

});


setMessage(
"Booking request submitted!"
);

}


return (

<section className="page">


<h1>
Book Your Appointment
</h1>


<form onSubmit={submitBooking}>


<input
name="name"
placeholder="Your Name"
/>


<input
name="email"
placeholder="Email"
/>


<input
name="phone"
placeholder="Phone Number"
/>


<select name="service">

<option>
Hair Styling
</option>

<option>
Braiding
</option>

<option>
Makeup
</option>

</select>


<input
name="date"
type="date"
/>


<button>
Submit Booking
</button>


</form>


<p>
{message}
</p>


</section>

);

}
