import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    departureAddress: '',
    destinationAddress: '',
    phoneNumber: '',
    userName: '',
    selectedAmbulanceType: '',
  });

  const ambulanceTypes = [
    'Basic Life Support',
    'Advanced Life Support',
    'Pediatric Ambulance',
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log thông tin đã điền để kiểm tra
    navigate('/waiting');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Book an Ambulance</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="departureAddress" className="block text-left text-gray-700">Departure Address</label>
            <input
              type="text"
              placeholder='Example: 123 Main St, Hanoi'
              id="departureAddress"
              name="departureAddress"
              value={formData.departureAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="destinationAddress" className="block text-left text-gray-700">Destination Address</label>
            <input
              type="text"
              placeholder='Example: 456 Elm St, Hanoi'
              id="destinationAddress"
              name="destinationAddress"
              value={formData.destinationAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-left text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder='+84 123 456 789'
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="userName" className="block text-left text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder='Marry Curry'
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="selectedAmbulanceType" className="block text-left text-gray-700">Ambulance Type</label>
            <select
              id="selectedAmbulanceType"
              name="selectedAmbulanceType"
              value={formData.selectedAmbulanceType}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select ambulance type</option>
              {ambulanceTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="float-right bg-red-600 text-white font-bold py-3 px-6 rounded hover:bg-red-700"
          >
            Send
          </button>
          <a href="/" className="float-left mb-0 text-blue-500 hover:underline">Back to home</a>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
