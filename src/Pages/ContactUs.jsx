import { Helmet } from "react-helmet-async";


const ContactUs = () => {
  return (
    
    <div className="min-h-[calc(100vh-300px)] bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <Helmet>
            <title>Nestora | ContactUs</title>
          </Helmet>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
      
        <div className="animate-fadeInUp">
          <img
            src="https://i.ibb.co/V0Fq20TH/analog-landscape-city-with-buildings-1.jpg"
            alt="Office"
            className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
          />
        </div>

        
        <div className="bg-white rounded-3xl shadow-xl p-10 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have any questions or inquiries? Fill out the form below and we’ll get back to you shortly.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
