import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar(){

return (

<nav className="navbar">


<Link href="/" className="logo">
EHBA
</Link>


<div className="links">

<Link href="/">
Home
</Link>

<Link href="/about">
About
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


<Link
href="/booking"
className="button"
>
Book Now
</Link>


</div>
<MobileMenu />

</nav>

);

}
