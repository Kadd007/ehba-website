import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">

      <h1>
        Elly's Hair And Beauty Academy
      </h1>

      <p>
        Where beauty meets education.
        Professional salon services and beauty training in one place.
      </p>

      <div>
        <Link href="/booking">
          Book Salon Appointment
        </Link>

        <Link href="/academy">
          Explore Courses
        </Link>
      </div>

    </section>
  );
}
