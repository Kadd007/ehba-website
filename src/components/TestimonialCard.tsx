type TestimonialProps = {
  name: string;
  text: string;
};

export default function TestimonialCard({
  name,
  text
}: TestimonialProps) {

  return (
    <div className="card">

      <p>
        "{text}"
      </p>

      <strong>
        {name}
      </strong>

    </div>
  );
}
