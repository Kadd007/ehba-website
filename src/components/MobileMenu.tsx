"use client";

import { useState } from "react";
import Link from "next/link";


export default function MobileMenu(){

const [open,setOpen] = useState(false);


return (

<div className="mobile-menu">


<button
onClick={()=>setOpen(!open)}
className="menu-button"
>

☰

</button>



{
open && (

<div className="mobile-links">

<Link href="/">
Home
</Link>

<Link href="/services">
Salon
</Link>

<Link href="/courses">
Academy
</Link>

<Link href="/gallery">
Gallery
</Link>

<Link href="/contact">
Contact
</Link>

<Link href="/booking">
Book Now
</Link>


</div>

)

}


</div>

);

}
