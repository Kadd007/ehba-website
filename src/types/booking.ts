export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  status: "pending" | "confirmed" | "completed";
};
