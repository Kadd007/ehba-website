import { getBookings } from "@/lib/bookings";


export default function AdminPage(){

const bookings =
getBookings();


return (

<section className="page">

<h1>
EHBA Admin Dashboard
</h1>


<h2>
Appointments
</h2>


{
bookings.length === 0 ?

<p>
No bookings yet.
</p>

:

bookings.map(
(booking)=>(
<div
className="card"
key={booking.id}
>

<h3>
{booking.name}
</h3>

<p>
{booking.service}
</p>

<p>
{booking.date}
</p>

<span>
{booking.status}
</span>

</div>
)

)

}


</section>

);

}
