import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        EHBA
      </div>

      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/salon">Salon</Link>
        <Link href="/academy">Academy</Link>
        <Link href="/booking">Book Now</Link>
      </div>
    </nav>
  );
}
