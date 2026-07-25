type ServiceProps = {
  name: string;
  description: string;
  price: string;
};

export default function ServiceCard({
  name,
  description,
  price
}: ServiceProps) {

  return (
    <div className="card">

      <h2>{name}</h2>

      <p>
        {description}
      </p>

      <strong>
        {price}
      </strong>

    </div>
  );
}
import Link from "next/link";


type ServiceProps = {
slug:string;
name:string;
description:string;
price:string;
};


export default function ServiceCard({
slug,
name,
description,
price
}:ServiceProps){

return (

<div className="card">

<h2>
{name}
</h2>

<p>
{description}
</p>

<strong>
{price}
</strong>


<br/>

<Link href={`/services/${slug}`}>
View Details
</Link>

</div>

);

}
