import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const BookingForm = () => {
  const initialState = {
    checkInDate: '',
    checkOutDate: '',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    guestAddress: '',
    totalGuestsAdults: '',
    totalGuestsChildren: '',
    IDtype: '',
    IDnumber: '',
    purposeOfStay: '',
    IDproofImage: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedRange, setSelectedRange] = useState([]);

  // Fetch booked dates from backend 

  // useEffect(() => {
  //   const fetchBookedDates = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/bookings/');
  //       const allDates = [];

  //       response.data.forEach((booking) => {
  //         const checkIn = new Date(booking.checkInDate);
  //         const checkOut = new Date(booking.checkOutDate);
  //         for (let d = new Date(checkIn); d <= new Date(checkOut); d.setDate(d.getDate() + 1)) {
  //           allDates.push(new Date(d));
  //         }
  //       });

  //       setBookedDates(allDates);
  //     } catch (error) {
  //       console.error("Error fetching bookings:", error);
  //     }
  //   };

  //   fetchBookedDates();
  // }, []);
  

  //when you want connect just comment below's code
  useEffect(() => {
  const hardcodedBookings = [
    { checkInDate: "2025-06-18", checkOutDate: "2025-06-20" },
    { checkInDate: "2025-06-23", checkOutDate: "2025-06-24" },
    { checkInDate: "2025-06-27", checkOutDate: "2025-06-29" }
  ];

  const allDates = [];
  hardcodedBookings.forEach((booking) => {
    const checkIn = new Date(booking.checkInDate);
    const checkOut = new Date(booking.checkOutDate);
    for (let d = new Date(checkIn); d <= new Date(checkOut); d.setDate(d.getDate() + 1)) {
      allDates.push(new Date(d));
    }
  });

  setBookedDates(allDates);
}, []);

//

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
    if (name === 'IDproofImage') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { checkInDate, checkOutDate, guestPhone, guestName, totalGuestsAdults, IDproofImage } = formData;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) return alert("Check-out date must be after check-in date.");
    if (!guestName) return alert("Full name is required.");
    if (!isValidPhone(guestPhone)) return alert("Phone number must be 10 digits.");
    if (!totalGuestsAdults) return alert("Total adults is required.");
    if (!IDproofImage) return alert("Please upload ID proof image.");

    const formPayload = new FormData();
    Object.keys(formData).forEach(key => {
      formPayload.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:8000/api/bookings/', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      alert("✅ Booking submitted successfully!");
      setFormData(initialState);
      setSelectedRange([]);
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

      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-6">
          🌿 Book Your Nature-Friendly Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Booking Dates */}
          <div>
            <SectionTitle icon="📅" title="Booking Dates" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormDatePicker
                label="Check-In Date"
                selectedDate={formData.checkInDate}
                onDateChange={(date) => {
                  if (isBooked(date)) {
                    alert("❌ This date is already booked for check-in.");
                  } else {
                    const isoDate = date.toISOString().split('T')[0];
                    setFormData({ ...formData, checkInDate: isoDate });

                    if (formData.checkOutDate) {
                      const range = getDateRange(new Date(isoDate), new Date(formData.checkOutDate));
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
                  const isoDate = date.toISOString().split('T')[0];
                  setFormData({ ...formData, checkOutDate: isoDate });

                  if (formData.checkInDate) {
                    const range = getDateRange(new Date(formData.checkInDate), new Date(isoDate));
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
            <SectionTitle icon="👤" title="Guest Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput label="Full Name *" name="guestName" value={formData.guestName} onChange={handleChange} required />
              <FormInput label="Email Address" name="guestEmail" type="email" value={formData.guestEmail} onChange={handleChange} />
              <FormInput label="Phone Number *" name="guestPhone" type="tel" value={formData.guestPhone} onChange={handleChange} required />
              <FormInput label="Address" name="guestAddress" value={formData.guestAddress} onChange={handleChange} />
              <FormInput label="Total Adults *" name="totalGuestsAdults" type="number" min="1" value={formData.totalGuestsAdults} onChange={handleChange} required />
              <FormInput label="Total Children" name="totalGuestsChildren" type="number" min="0" value={formData.totalGuestsChildren} onChange={handleChange} />
            </div>
          </div>

          {/* ID Section */}
          <div>
            <SectionTitle icon="🆔" title="Identification" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormSelect label="ID Type *" name="IDtype" value={formData.IDtype} onChange={handleChange} options={['Aadhar', 'PAN', 'Passport', 'Driving License']} required />
              <FormInput label="ID Number *" name="IDnumber" value={formData.IDnumber} onChange={handleChange} required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold text-primary-dark">Upload ID Proof Image *</label>
              <input
                type="file"
                name="IDproofImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
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
            🛎️ Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

// Reusable components
const SectionTitle = ({ title, icon }) => (
  <div className="flex items-center gap-2 text-xl font-bold text-primary-dark border-b-2 border-primary-light pb-2 mb-4">
    <span className="text-accent text-2xl">{icon}</span>
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
      selected={selectedDate ? new Date(selectedDate) : null}
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
      className="w-full p-3 text-sm border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      placeholderText={`Select ${label.replace("*", "")}`}
    />
  </div>
);

export default BookingForm;
