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
