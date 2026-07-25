import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function SalonPage() {

  return (
    <section className="page">

      <h1>
        Our Salon Services
      </h1>

      <p>
        Experience professional beauty services from EHBA.
      </p>

      <div className="grid">

        {services.map((service) => (
          <ServiceCard
            key={service.name}
            {...service}
          />
        ))}

      </div>

    </section>
  );
}
