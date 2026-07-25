type TeamProps = {
  name: string;
  role: string;
};


export default function TeamCard({
  name,
  role
}: TeamProps) {

  return (

    <div className="card">

      <h3>
        {name}
      </h3>

      <p>
        {role}
      </p>

    </div>

  );
}
