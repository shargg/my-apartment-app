import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Booking } from '../interfaces/Booking';

interface BookingFormProps {
  reservations: Booking[];
  onAddBooking: (booking: Booking) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ reservations, onAddBooking }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const isDateReserved = (date: Date) => {
    return reservations.some(
      (reservation) =>
        date >= reservation.startDate && date <= reservation.endDate
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!startDate || !endDate || !guestName) {
      alert('Please fill in all fields');
      return;
    }

    if (endDate <= startDate) {
      alert('End date must be after start date');
      return;
    }

    const newBooking: Booking = {
      id: Date.now(),
      startDate,
      endDate,
      guestName,
      guestEmail,
    };

    onAddBooking(newBooking);

    // Clear the form fields
    setStartDate(null);
    setEndDate(null);
    setGuestName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Start Date"
          filterDate={(date: Date) => !isDateReserved(date)}
          minDate={new Date()}
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="End Date"
          filterDate={(date: Date) => !isDateReserved(date)}
          minDate={startDate || new Date()}
        />
      </div>
      <div className="form-group">
        <label htmlFor="guestName">Guest Name</label>
        <input
          type="text"
          className="form-control"
          id="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="guestEmail">Guest Email</label>
        <input
          type="email"
          className="form-control"
          id="guestEmail"
          value={guestEmail}
          onChange={(e) => setGuestEmail(e.target.value)}
        />
          </div>
      <br></br>
      <button type="submit" className="btn btn-primary">
        Add Booking
      </button>
    </form>
  );
};
