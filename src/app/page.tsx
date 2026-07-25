import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";


export default function Home() {

  return (

    <>

      {/* Hero */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Beauty. Confidence. Education.
          </h1>

          <p>
            Welcome to Elly's Hair And Beauty Academy —
            where professional salon services meet
            beauty education.
          </p>


          <div className="hero-buttons">

            <Link href="/booking">
              Book Appointment
            </Link>

            <Link href="/courses">
              Join Academy
            </Link>

          </div>

        </div>

      </section>



      {/* Services */}

      <section className="section">

        <h2>
          Our Services
        </h2>

        <div className="grid">

          {services.slice(0,3).map(service => (

            <ServiceCard
              key={service.name}
              {...service}
            />

          ))}

        </div>

      </section>



      {/* Academy */}

      <section className="section">

        <h2>
          EHBA Academy
        </h2>

        <p>
          Learn professional beauty skills
          and build your future career.
        </p>


        <div className="grid">

          {courses.slice(0,3).map(course => (

            <CourseCard
              key={course.title}
              {...course}
            />

          ))}

        </div>

      </section>



      {/* CTA */}

      <section className="cta">

        <h2>
          Ready for your beauty transformation?
        </h2>


        <Link href="/booking">
          Schedule Your Visit
        </Link>

      </section>


    </>

  );

}
