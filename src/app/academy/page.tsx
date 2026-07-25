import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function AcademyPage() {

  return (
    <section className="page">

      <h1>
        EHBA Academy
      </h1>

      <p>
        Learn professional beauty skills and start your career.
      </p>

      <div className="grid">

        {courses.map((course) => (
          <CourseCard
            key={course.title}
            {...course}
          />
        ))}

      </div>

    </section>
  );
}
