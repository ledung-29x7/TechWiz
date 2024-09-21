import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const ComponentHome = () => {
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const { useParam } = useParams()

  const ambulanceTypes = [
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/11/YL/AT/EO/393442/basic-life-support-ambulance.JPG",
      title: "Basic Life Support",
      text: "Basic life support ambulance services.",
      specs: [
        { label: "Speed", value: "60-80 km/h" },
        { label: "Oxygen Capacity", value: "1000 liters" },
        { label: "Patient Capacity", value: "1 stretcher" },
        { label: "Fuel Efficiency", value: "8-10 liters/100 km" },
        { label: "Vehicle Type", value: "Van" },
      ],
      path: "/basic-life-support",
    },
    {
      imgSrc: "https://sthiratech.in/wp-content/uploads/2018/07/1.jpg",
      title: "Advanced Life Support",
      text: "Advanced life support ambulance services.",
      specs: [
        { label: "Speed", value: "70-90 km/h" },    
        { label: "Oxygen Capacity", value: "2000 liters" },
        { label: "Patient Capacity", value: "1 stretcher + 1 wheelchair" },
        { label: "Fuel Efficiency", value: "10-12 liters/100 km" },
        { label: "Vehicle Type", value: "Van" },
      ],
      path: "/advanced-life-support",
    },
    {
      imgSrc: "https://ambulancevisibilityblog.wordpress.com/wp-content/uploads/2012/05/paed-amb.jpg",
      title: "Pediatric Ambulance",
      text: "Specialized care for children.",
      specs: [
        { label: "Speed", value: "60-80 km/h" },
        { label: "Oxygen Capacity", value: "1500 liters" },
        { label: "Patient Capacity", value: "1 child stretcher" },
        { label: "Fuel Efficiency", value: "9-11 liters/100 km" },
        { label: "Vehicle Type", value: "Van" },
      ],
      path: "/pediatric",
    },
  ];

  const anbulance = ambulanceTypes.find((e) => e.path = useParam)
  const handleAmbulanceClick = (ambulance) => {
    setSelectedAmbulance(ambulance);
  };

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Types of Ambulance</h2>
      <div className="flex justify-center space-x-12">        
          <div            
            className="bg-white shadow-lg p-6 rounded-lg text-left cursor-pointer"
            onClick={() => handleAmbulanceClick()}
          >
            <img
              src={anbulance.imgSrc}
              alt={anbulance.title}
              className="w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">{anbulance.title}</h3>
            <p className="text-gray-600">{anbulance.text}</p>
          </div>        
      </div>

      {selectedAmbulance && (
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-semibold">{selectedAmbulance.title} Specifications</h3>
          <ul className="mt-4 space-y-2">                          
                <span className="font-semibold">{anbulance.spec.label}:</span> {anbulance.spec.value}                          
          </ul>
        </div>
      )}
    </section>
  );
};

export default ComponentHome;
