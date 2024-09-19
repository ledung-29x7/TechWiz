import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Background Image */}
      <div className="relative">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/99/13/90/1000_F_399139097_gwLzIrKZ7l6UVEbuNrv8Yjm0tyxWGF9n.jpg"
          alt="Ambulance on a road"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Types of Ambulance<br /> Booking Services
          </h1>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">How to Book an Ambulance?</h2>
        <div className="flex flex-col space-y-12 items-center">
          {[
            { step: 1, text: "Scroll down and click 'Book Now' button.", imgSrc: "/img/step_1.png" },
            { step: 2, text: "Enter your information. Then, click 'Send' button.", imgSrc: "/img/step_2.png" },
            { step: 3, text: "Wait 5 seconds to return to the home page.", imgSrc: "/img/step_3.png" },
          ].map((item, index) => (
            <div className="text-center" key={index}>
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">{item.step}</span>
                </div>
                <img
                  src={item.imgSrc}
                  alt={`Step ${item.step}`}
                  className="w-58 h-48 object-cover ml-4"
                />
              </div>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* About Us Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600">
          Welcome to our ambulance booking website, where we are committed to providing the fastest and most efficient emergency medical services for all urgent needs.
          We understand that every second counts in emergency situations. That's why we've designed a user-friendly and swift ambulance booking system. We offer 24/7 ambulance services, ensuring that our medical team is always ready to respond to your needs with dedication and professionalism.
        </p>
      </section>

      {/* Driving Services Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Driving Services</h2>
        <div className="flex justify-center space-x-12">
          {[
            {
              imgSrc: "https://img.freepik.com/premium-photo/ambulance-interior-with-emergency-equipment-stretcher-transfer-chair-emergency-concept_235542-228.jpg",
              title: "Equipment",
              text: "Fully equipped with medical equipment.",
            },
            {
              imgSrc: "https://college.mayo.edu/media/mccms/content-assets/academics/explore-health-care-careers/Paramedic_ExploreCareers1024x512.jpg",
              title: "Emergency Care",
              text: "Provides emergency care.",
            },
            {
              imgSrc: "https://www.ontimetransport.com/cmsAdmin/uploads/specialty_care_placeholder.jpg",
              title: "Patient Transport",
              text: "Transports patients to hospital.",
            },
          ].map((service, index) => (
            <div className="text-center" key={index}>
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-gray-800 text-lg">Do you need an ambulance?</p>
          <a href="/book_page">
            <button className="bg-red-600 text-white font-bold py-3 px-6 rounded mt-4 hover:bg-red-700">
              Book Now
            </button>
          </a>
        </div>
      </section>

      {/* Type of Ambulance */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Types of Ambulance</h2>
        <div className="flex justify-center space-x-12">
          {[
            {
              imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/11/YL/AT/EO/393442/basic-life-support-ambulance.JPG",
              title: "Basic Life Support",
              text: "Basic life support ambulance services.",
            },
            {
              imgSrc: "https://sthiratech.in/wp-content/uploads/2018/07/1.jpg",
              title: "Advanced Life Support",
              text: "Advanced life support ambulance services.",
            },
            {
              imgSrc: "https://ambulancevisibilityblog.wordpress.com/wp-content/uploads/2012/05/paed-amb.jpg",
              title: "Pediatric Ambulance",
              text: "Specialized care for children.",
            },
          ].map((type, index) => (
            <div className="text-center" key={index}>
              <img
                src={type.imgSrc}
                alt={type.title}
                className="w-48 h-48 object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">{type.title}</h3>
              <p className="text-gray-600">{type.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions or need more information, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-12">
          {[
            { title: "Phone", value: "+123 456 7890" },
            { title: "Email", value: "info@ambulancebooking.com" },
            { title: "Location", value: "Số 8, Tôn Thất Tuyết, Mỹ Đình, Từ Liêm, Hà Nội" },
          ].map((contact, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-gray-800">{contact.title}</h3>
              <p className="text-gray-600">{contact.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
