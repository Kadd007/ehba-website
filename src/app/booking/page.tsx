export default function BookingPage(){

  return (
    <section className="page">

      <h1>
        Book Your Appointment
      </h1>

      <form>

        <input
          placeholder="Your Name"
        />

        <input
          placeholder="Email"
        />

        <input
          placeholder="Phone Number"
        />

        <select>
          <option>
            Hair Styling
          </option>

          <option>
            Braiding
          </option>

          <option>
            Makeup
          </option>
        </select>

        <button>
          Request Booking
        </button>

      </form>

    </section>
  );
}
