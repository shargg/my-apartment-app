import React, { createContext, useState } from 'react';
import { Booking } from './interfaces/Booking';

interface ReservationContextData {
  reservations: Booking[];
  addReservation: (booking: Booking) => void;
  deleteReservation: (id: number) => void; // Update the type here
}

const ReservationContext = createContext<ReservationContextData>({} as ReservationContextData);

export const ReservationProvider: React.FC = ({ children }) => {
  const [reservations, setReservations] = useState<Booking[]>([]);

  const addReservation = (booking: Booking) => {
    setReservations([...reservations, booking]);
  };

  const deleteReservation = (id: number) => {
    setReservations(reservations.filter((reservation) => reservation.id !== id));
  };

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        addReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationContext;
