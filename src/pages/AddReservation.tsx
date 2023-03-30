import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookingForm } from '../components/BookingForm';
import ReservationContext from '../ReservationContext';
import { Booking } from '../interfaces/Booking';

const AddReservation: React.FC = () => {
  const { addReservation, reservations } = useContext(ReservationContext);
  const navigate = useNavigate();

  const handleAddReservation = (booking: Booking) => {
    addReservation(booking);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Reservation</h1>
         <BookingForm reservations={reservations} onAddBooking={handleAddReservation} />
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default AddReservation;
