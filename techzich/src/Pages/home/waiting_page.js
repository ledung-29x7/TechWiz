import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

const WaitingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg text-center max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Processing ...</h1>
        <p className="text-gray-600">Please wait, you will be redirected to the home page shortly...</p>
      </div>
    </div>
  );
};

export default WaitingPage;
