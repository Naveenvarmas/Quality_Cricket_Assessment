import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back */}
          <NavLink
            to="/account"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft size={16} />
            back
          </NavLink>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-10">
            Contact Us
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Info */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-semibold text-indigo-600 mb-8">
                ADDRESS
              </h2>

              <div className="space-y-6 text-gray-700">
                <div className="flex gap-4">
                  <MapPin className="text-indigo-600 mt-1" size={22} />

                  <div>
                    <p className="font-semibold">
                      Main Office:
                    </p>

                    <p>
                      Lorem ipsum is simply dummy text of the printing industry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Phone className="text-indigo-600" size={20} />

                  <div>
                    <p>+91 5656325632</p>
                    <p>+91 2565896582</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-indigo-600" size={20} />

                  <p>
                    qualitycricket@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-pink-50 rounded-2xl shadow p-8">
              <h2 className="text-3xl font-bold text-center mb-2">
                Get a quote
              </h2>

              <p className="text-center text-sm text-gray-500 mb-8">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3"
                />

                <input
                  placeholder="Email"
                  className="border rounded-lg px-4 py-3"
                />
              </div>

              <input
                placeholder="Contact Number"
                className="w-full border rounded-lg px-4 py-3 mt-4"
              />

              <textarea
                rows="5"
                placeholder="Enter your message"
                className="w-full border rounded-lg px-4 py-3 mt-4"
              ></textarea>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium mt-5">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;