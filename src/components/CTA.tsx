import Link from "next/link";


type Props = {

title:string;

text:string;

button:string;

link:string;

};


export default function CTA({
title,
text,
button,
link
}:Props){

return (

<section className="cta">


<h2>
{title}
</h2>


<p>
{text}
</p>


<Link
href={link}
className="button"
>

{button}

</Link>


</section>

);

}
