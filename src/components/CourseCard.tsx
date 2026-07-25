type CourseProps = {
  title: string;
  description: string;
  duration: string;
};

export default function CourseCard({
  title,
  description,
  duration
}: CourseProps) {

  return (
    <div className="card">

      <h2>{title}</h2>

      <p>
        {description}
      </p>

      <span>
        Duration: {duration}
      </span>

    </div>
  );
}
import Link from "next/link";


type CourseProps = {
slug:string;
title:string;
description:string;
duration:string;
};


export default function CourseCard({
slug,
title,
description,
duration
}:CourseProps){

return (

<div className="card">

<h2>
{title}
</h2>

<p>
{description}
</p>

<span>
{duration}
</span>


<br/>

<Link href={`/courses/${slug}`}>
View Course
</Link>


</div>

);

}
