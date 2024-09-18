import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">


      {/* Background Image Section */}


      <div className="relative">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/99/13/90/1000_F_399139097_gwLzIrKZ7l6UVEbuNrv8Yjm0tyxWGF9n.jpg"
          alt="Ambulance"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Types of Ambulance Booking Services</h1>
        </div>
      </div>


      {/* Driving Service Section */}


      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Driving Services</h2>
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <img
              src="https://img.freepik.com/premium-photo/ambulance-interior-with-emergency-equipment-stretcher-transfer-chair-emergency-concept_235542-228.jpg"
              alt="Equipment"
              className="w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Equipment</h3>
            <p className="text-gray-600">Fully equipped with medical equipment.</p>
          </div>

          <div className="text-center">
            <img
              src="https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/Paramedic_ExploreCareers1024x512.jpg"
              alt="Emergency Care"
              className="w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Emergency Care</h3>
            <p className="text-gray-600">Provides emergency care.</p>
          </div>

          <div className="text-center">
            <img
              src="https://www.ontimetransport.com/cmsAdmin/uploads/specialty_care_placeholder.jpg"
              alt="Patient Transport"
              className="w-48 h-48 object-cover mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Patient Transport</h3>
            <p className="text-gray-600">Transports patients to hospital.</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-800 text-lg">Do you need an ambulance?</p>
          <button className="bg-red-600 text-white font-bold py-3 px-6 rounded mt-4 hover:bg-red-700">
            Book now
          </button>
        </div>
      </section>


      {/* Contact Section */}

      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions or need more information, feel free to reach out.
        </p>
        <div className="flex justify-center space-x-12">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Email</h3>
            <p className="text-gray-600">info@ambulancebooking.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Location</h3>
            <p className="text-gray-600">So 8, Ton That Tuyet, My Dinh, Tu Liem, Ha Noi</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
