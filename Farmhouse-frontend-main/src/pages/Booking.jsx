import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchBookings } from '../API/GetApi';
import { submitBooking } from '../API/PostApi';

const BookingForm = () => {
  const initialState = {
    checkInDate: null,
    checkOutDate: null,
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    totalGuestsAdults: '',
    totalGuestsChildren: '',
    purposeOfStay: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedRange, setSelectedRange] = useState([]);
  const fileInputRef = React.useRef(null);

  // Fetch booked dates from backend 
  const fetchBookedDates = async () => {
    try {
      const data = await fetchBookings();
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight
      const allDates = [];
      data.forEach((booking) => {
        const checkIn = new Date(booking.checkInDate);
        const checkOut = new Date(booking.checkOutDate);
        // Only consider bookings that are today or in the future
        if (checkOut >= today) {
          for (let d = new Date(checkIn); d <= checkOut; d.setDate(d.getDate() + 1)) {
            allDates.push(new Date(d));
          }
        }
      });
      setBookedDates(allDates);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const getDateRange = (start, end) => {
    const range = [];
    let current = new Date(start);
    while (current <= end) {
      range.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return range;
  };

  const isBooked = (date) =>
    bookedDates.some((d) => d.toDateString() === date.toDateString());

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'IDimage') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { checkInDate, checkOutDate, guestPhone, guestName, totalGuestsAdults } = formData;

    if (!checkInDate) return alert("Check-in date is required.");
    if (!checkOutDate) return alert("Check-out date is required.");

    // Use local date objects for comparison
    const checkIn = checkInDate;
    const checkOut = checkOutDate;

    if (checkOut < checkIn) return alert("Check-out date cannot be before check-in date.");
    if (!guestName) return alert("Full name is required.");
    if (!/^[a-zA-Z\s]+$/.test(guestName)) return alert("Full name should only contain letters.");
    if (!isValidPhone(guestPhone)) return alert("Phone number must be 10 digits.");
    if (!totalGuestsAdults || totalGuestsAdults <= 0) return alert("Total adults is required.");
    if (formData.guestEmail && !/^\S+@\S+\.\S+$/.test(formData.guestEmail)) return alert("Please enter a valid email address.");

    const range = getDateRange(checkIn, checkOut);
    if (range.some(date => isBooked(date))) {
      return alert("One or more selected dates are already booked. Please choose different dates.");
    }

    // Prepare payload, convert dates to YYYY-MM-DD
    const formPayload = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'checkInDate' || key === 'checkOutDate') {
        formPayload.append(key, formData[key] ? formData[key].toISOString().split('T')[0] : '');
      } else {
        formPayload.append(key, formData[key]);
      }
    });

    try {
      await submitBooking(formPayload); // this will come from PostApi.js
      alert("✅ Booking submitted successfully!");
      setFormData(initialState);
      setSelectedRange([]);
      // Reset file input manually
      if (fileInputRef.current) fileInputRef.current.value = '';
      // Refresh booked dates after successful booking
      await fetchBookedDates();
    } catch (error) {
      console.error("Error submitting booking:", error.response?.data || error.message);
      alert("❌ Error submitting booking. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-cream flex items-center justify-center p-4 sm:p-6" style={{ marginTop: '3rem' }}>
      <style>{`
        .react-datepicker__day--booked {
          background-color: #dc2626 !important;
          color: white !important;
          border-radius: 50% !important;
        }
        .react-datepicker__day--selected-range {
          background-color: #16a34a !important;
          color: white !important;
          border-radius: 50% !important;
        }
      `}</style>

      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6 mt-6">
        <h2 className="text-4xl font-bold text-center text-accent mb-6">
           Book Your Nature-Friendly Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Booking Dates */}
          <div>
            <SectionTitle title="Booking Dates" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormDatePicker
                label="Check-In Date"
                selectedDate={formData.checkInDate}
                onDateChange={(date) => {
                  if (isBooked(date)) {
                    alert("❌ This date is already booked for check-in.");
                  } else {
                    setFormData({ ...formData, checkInDate: date });
                    if (formData.checkOutDate) {
                      const range = getDateRange(date, formData.checkOutDate);
                      setSelectedRange(range);
                    } else {
                      setFormData({ ...formData, checkInDate: date });
                      const range = getDateRange(date, formData.checkOutDate);
                      setSelectedRange(range);
                    }
                  }
                }}
                bookedDates={bookedDates}
                selectedRange={selectedRange}
              />
              <FormDatePicker
                label="Check-Out Date"
                selectedDate={formData.checkOutDate}
                onDateChange={(date) => {
                  setFormData({ ...formData, checkOutDate: date });
                  if (formData.checkInDate) {
                    const range = getDateRange(formData.checkInDate, date);
                    setSelectedRange(range);
                  }
                }}
                bookedDates={bookedDates}
                selectedRange={selectedRange}
              />
            </div>
          </div>

          {/* Guest Info */}
          <div>
            <SectionTitle title="Guest Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Full Name *" name="guestName" value={formData.guestName} onChange={handleChange} required />
              <FormInput label="Email Address" name="guestEmail" type="email" value={formData.guestEmail} onChange={handleChange} />
              <FormInput label="Phone Number *" name="guestPhone" type="tel" value={formData.guestPhone} onChange={handleChange} required />
              <FormInput label="Total Adults *" name="totalGuestsAdults" type="number" min="1" value={formData.totalGuestsAdults} onChange={handleChange} required />
              <FormInput label="Total Children" name="totalGuestsChildren" type="number" min="0" value={formData.totalGuestsChildren} onChange={handleChange} />
            </div>
          </div>

          {/* Purpose */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-primary-dark">Purpose of Stay</label>
            <textarea
              name="purposeOfStay"
              rows="4"
              value={formData.purposeOfStay}
              onChange={handleChange}
              placeholder="Let us know why you're staying with us..."
              className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3 text-lg"
            style={{
              background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)',
              transition: 'all var(--transition-normal)'
            }}
          >
             Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

// Reusable components
const SectionTitle = ({ title, icon }) => (
  <div className="flex items-center gap-2 text-xl font-bold text-primary-dark border-b-2 border-primary-light pb-2 mb-4">
    <h3>{title}</h3>
  </div>
);

const FormInput = ({ label, name, type = 'text', value, onChange, min, required = false, placeholder }) => (
  <div className="w-full">
    <label className="block mb-2 text-sm text-primary-dark font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      required={required}
      className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      placeholder={placeholder || `Enter ${label.replace("*", "").toLowerCase()}`}
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required = false }) => (
  <div className="w-full">
    <label className="block mb-2 text-sm text-primary-dark font-semibold">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      <option value="">Select {label.replace("*", "")}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const FormDatePicker = ({ label, selectedDate, onDateChange, bookedDates, selectedRange }) => (
  <div className="w-full">
    <label className="block mb-2 text-sm text-primary-dark font-semibold">{label}</label>
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      highlightDates={[
        { 'react-datepicker__day--booked': bookedDates },
        { 'react-datepicker__day--selected-range': selectedRange }
      ]}
      dayClassName={(date) => {
        if (bookedDates.some(d => d.toDateString() === date.toDateString())) return 'react-datepicker__day--booked';
        if (selectedRange.some(d => d.toDateString() === date.toDateString())) return 'react-datepicker__day--selected-range';
        return undefined;
      }}
      minDate={new Date()}
      className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      placeholderText={`Select ${label.replace("*", "")}`}
    />
  </div>
);

export default BookingForm;
