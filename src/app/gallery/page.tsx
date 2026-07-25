import ImageCard from "@/components/ImageCard";
import SectionTitle from "@/components/SectionTitle";
import { gallery } from "@/data/gallery";


export default function GalleryPage(){

return (

<section className="page">


<SectionTitle

title="EHBA Gallery"

subtitle="A showcase of our salon work, students, and beauty transformations."

/>


<div className="grid">

{
gallery.map(item=>(

<ImageCard

key={item.title}

{...item}

/>

))

}

</div>


</section>

);

}
