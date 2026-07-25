const questions = [

{
question:"Do I need an appointment?",
answer:
"Yes, we recommend booking ahead to secure your preferred time."
},

{
question:"Do you offer beauty training?",
answer:
"Yes. EHBA Academy provides professional beauty courses."
},

{
question:"Can beginners join the academy?",
answer:
"Yes. Our courses are designed for beginners and advanced learners."
}

];


export default function FAQ(){

return (

<section className="section">


<h2>
Frequently Asked Questions
</h2>


<div className="grid">

{
questions.map(item=>(

<div
className="card"
key={item.question}
>

<h3>
{item.question}
</h3>


<p>
{item.answer}
</p>


</div>

))

}

</div>


</section>

);

}
