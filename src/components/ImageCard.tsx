type ImageCardProps = {
  title:string;
  category:string;
  image:string;
};


export default function ImageCard({
  title,
  category,
  image
}:ImageCardProps){

return (

<div className="image-card">

<img
src={image}
alt={title}
/>


<div>

<h3>
{title}
</h3>

<p>
{category}
</p>

</div>


</div>

);

}
