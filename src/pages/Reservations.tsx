// Reservations.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReservationContext from '../ReservationContext';
import styles from './Reservations.module.css';

const Reservations: React.FC = () => {
  const { reservations, deleteReservation } = useContext(ReservationContext);

  return (
    <div>
      <h1>Reservations</h1>
      <Link to="/add" className={styles.addButton}>+</Link>
      {reservations.map((reservation) => (
        <div key={reservation.id} className={styles.reservation}>
          <h3>{reservation.guestName}</h3>
          <p>{reservation.guestEmail}</p>
          <p>
            Check in: {reservation.startDate.toLocaleDateString()} <br />
            Check out: {reservation.endDate.toLocaleDateString()}
          </p>
          <button 
            onClick={() => deleteReservation(reservation.id)}
            className={styles.deleteButton}
          >
            delete
          </button> 
        </div>
      ))}
    </div>
  );
};

export default Reservations;
