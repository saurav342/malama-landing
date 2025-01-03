import { useState } from 'react';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking logic here
  };

  return (
    <div className="booking-form">
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Pickup Location"
            value={booking.pickup}
            onChange={(e) => setBooking({...booking, pickup: e.target.value})}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Drop-off Location"
            value={booking.dropoff}
            onChange={(e) => setBooking({...booking, dropoff: e.target.value})}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              value={booking.date}
              onChange={(e) => setBooking({...booking, date: e.target.value})}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              value={booking.time}
              onChange={(e) => setBooking({...booking, time: e.target.value})}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm; 