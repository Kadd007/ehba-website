import Link from "next/link";

import ServiceCard from "@/components/ServiceCard";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import TeamCard from "@/components/TeamCard";

import { services } from "@/data/services";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { team } from "@/data/team";


export default function Home(){

return (

<>

<section className="hero">

<div className="hero-content">

<p>
ELLY'S HAIR AND BEAUTY ACADEMY
</p>


<h1>
Where Beauty Meets Confidence
</h1>


<p>
Premium salon services and professional beauty education.
</p>


<div className="hero-buttons">


<Link
href="/booking"
className="button"
>
Book Your Experience
</Link>



<Link
href="/courses"
className="button"
>
Explore Academy
</Link>


</div>


</div>


</section>


<section className="section">

<h2>
Why Choose EHBA?
</h2>


<div className="grid">

<div className="card">

<h3>
Professional Services
</h3>

<p>
Quality beauty treatments delivered
with care and expertise.
</p>

</div>


<div className="card">

<h3>
Beauty Education
</h3>

<p>
Learn practical skills from experienced
beauty professionals.
</p>

</div>


<div className="card">

<h3>
Personal Experience
</h3>

<p>
A welcoming environment designed
around every client.
</p>

</div>

</div>

</section>



<section className="section">

<h2>
Featured Services
</h2>

<div className="grid">

{
services.slice(0,3).map(service=>(

<ServiceCard
key={service.name}
{...service}

/>

))
}

</div>

</section>



<section className="section">

<h2>
Academy Programs
</h2>


<div className="grid">

{
courses.map(course=>(

<CourseCard
key={course.title}
{...course}
/>

))
}

</div>

</section>



<section className="section">

<h2>
Meet Our Team
</h2>


<div className="grid">

{
team.map(member=>(

<TeamCard
key={member.name}
{...member}
/>

))
}

</div>


</section>



<section className="section">

<h2>
What Our Clients Say
</h2>


<div className="grid">

{
testimonials.map(item=>(

<TestimonialCard
key={item.name}
{...item}
/>

))
}

</div>

</section>

<section className="section showcase">

<h2>
Beauty Transformations
</h2>


<div className="transformation-grid">


<div className="card">

<h3>
Before
</h3>

<p>
Consultation and personalised beauty planning.
</p>

</div>



<div className="card">

<h3>
After
</h3>

<p>
A confident new look created by EHBA professionals.
</p>

</div>


</div>

</section>

<section className="cta">

<h2>
Ready to experience EHBA?
</h2>

<Link href="/booking">
Book Your Appointment
</Link>

</section>


</>

);

}
