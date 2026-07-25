import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";


export default function ServicesPage(){

return (

<section className="page">

<h1>
Our Beauty Services
</h1>


<p>
Professional salon treatments designed
for your style and confidence.
</p>


<div className="grid">

{
services.map(service => (

<ServiceCard
key={service.name}
{...service}
/>

))
}

</div>


</section>

);

}
