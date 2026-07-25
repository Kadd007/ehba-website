import { courses } from "@/data/courses";
import Link from "next/link";


export default async function CoursePage({
params
}:{
params:Promise<{slug:string}>
}){


const {slug}=await params;


const course =
courses.find(
(item)=>item.slug===slug
);



if(!course){

return (
<h1>
Course not found
</h1>
)

}



return (

<section className="page">


<h1>
{course.title}
</h1>


<p>
{course.details}
</p>


<h3>
Duration:
{course.duration}
</h3>


<Link href="/contact">
Enquire About Course
</Link>


</section>

);

}
