const images = [
  "Salon Experience",
  "Hair Styling",
  "Beauty Training",
  "Student Work"
];


export default function GalleryPage() {

  return (

    <section className="page">

      <h1>
        EHBA Gallery
      </h1>


      <div className="grid">

        {images.map((image)=>(
          <div 
            className="card"
            key={image}
          >

            <h2>
              {image}
            </h2>

            <p>
              Image showcase coming soon.
            </p>

          </div>
        ))}

      </div>

    </section>

  );
}
