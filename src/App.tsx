import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservationProvider } from './ReservationContext';
import Reservations from './pages/Reservations';
import AddReservation from './pages/AddReservation';

function App() {
  return (
    <ReservationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Reservations />} />
            <Route path="/add" element={<AddReservation />} />
          </Routes>
        </div>
      </Router>
    </ReservationProvider>
  );
}

export default App;
