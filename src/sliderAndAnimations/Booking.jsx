import React, { useState, useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ name: '', date: '', service: '' });

  useEffect(() => {
    // Load bookings from localStorage on component mount
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = (e) => {
    e.preventDefault();

    if (newBooking.name.trim() && newBooking.date.trim() && newBooking.service.trim()) {
      const updatedBookings = [...bookings, newBooking];
      setBookings(updatedBookings);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      setNewBooking({ name: '', date: '', service: '' });
    }
  };

  const handleRemoveBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const handleClearBookings = () => {
    localStorage.removeItem('bookings');
    setBookings([]);
  };

  return (
    <div className="booking-container">
      <h2>Customer Booking Orders</h2>
      <form onSubmit={handleAddBooking}>
        <input
          type="text"
          name="name"
          value={newBooking.name}
          onChange={handleInputChange}
          placeholder="Customer Name"
        />
        <input
          type="date"
          name="date"
          value={newBooking.date}
          onChange={handleInputChange}
          placeholder="Booking Date"
        />
        <input
          type="text"
          name="service"
          value={newBooking.service}
          onChange={handleInputChange}
          placeholder="Service"
        />
        <button type="submit">Add Booking</button>
      </form>
      <div>
        <h3>All Bookings</h3>
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.name} - {booking.date} - {booking.service}
              <button onClick={() => handleRemoveBooking(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClearBookings}>Clear All Bookings</button>
    </div>
  );
};

export default Booking;