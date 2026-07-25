import { services } from "@/data/services";
import Link from "next/link";


export default async function ServicePage({
  params
}: {
  params: Promise<{slug:string}>
}) {


const {slug} = await params;


const service =
services.find(
(item)=>item.slug === slug
);



if(!service){

return (
<h1>
Service not found
</h1>
)

}



return (

<section className="page">


<h1>
{service.name}
</h1>


<p>
{service.details}
</p>


<h2>
Starting price:
{service.price}
</h2>


<Link href="/booking">
Book This Service
</Link>


</section>

);

}
