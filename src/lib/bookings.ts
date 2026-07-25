import { Booking } from "@/types/booking";


export const bookings: Booking[] = [];


export function addBooking(
  booking: Booking
) {

  bookings.push(booking);

  return booking;

}


export function getBookings(){

  return bookings;

}
