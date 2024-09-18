import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/99/13/90/1000_F_399139097_gwLzIrKZ7l6UVEbuNrv8Yjm0tyxWGF9n.jpg"
          alt="Ambulance"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Types of Ambulance Booking Services
          </h1>
        </div>
      </div>

      {/* Driving Service Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Driving Services
        </h2>
        <div className="flex justify-center space-x-8 lg:space-x-16">
          {/* Equipment Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="https://img.freepik.com/premium-photo/ambulance-interior-with-emergency-equipment-stretcher-transfer-chair-emergency-concept_235542-228.jpg" alt="Equipment" className="w-52 h-52 object-cover mx-auto mb-4 rounded-full"/>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Equipment</h3>
            <p className="text-gray-600">Fully equipped with medical equipment.</p>
          </div>

          {/* Emergency Care Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/Paramedic_ExploreCareers1024x512.jpg" alt="Emergency Care" className="w-52 h-52 object-cover mx-auto mb-4 rounded-full"/>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Emergency Care</h3>
            <p className="text-gray-600">Provides emergency care.</p>
          </div>

          {/* Patient Transport Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img src="https://www.ontimetransport.com/cmsAdmin/uploads/specialty_care_placeholder.jpg"alt="Patient Transport" className="w-52 h-52 object-cover mx-auto mb-4 rounded-full"/>
            <h3 className="font-bold text-xl text-gray-800 mb-2">Patient Transport</h3>
            <p className="text-gray-600">Transports patients to hospital.</p>
          </div>
        </div>

        {/* Book Now Section */}
        <div className="mt-12">
          <p className="text-gray-900 text-lg mb-4">
            Do you need an ambulance?
          </p>
          <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-red-700 transition duration-300">
            Book Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          If you have any questions or need more information, feel free to reach
          out to us through the contact details below.
        </p>
        <div className="flex justify-center space-x-12">
          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">info@ambulancebooking.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">Location</h3>
            <p className="text-gray-600">Số 8, Tôn Thất Tuyết, Mỹ Đình, Từ Liêm, Hà Nội</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
