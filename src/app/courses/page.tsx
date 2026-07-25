import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";


export default function CoursesPage(){

return (

<section className="page">

<h1>
Beauty Academy Courses
</h1>


<p>
Learn professional skills from experienced
beauty educators.
</p>


<div className="grid">

{
courses.map(course => (

<CourseCard
key={course.title}
{...course}
/>

))
}

</div>


</section>

);

}
