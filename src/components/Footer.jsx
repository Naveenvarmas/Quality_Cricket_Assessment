import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/logo1.png";
import map from "../assets/images/map.png";

function Footer() {
  return (
    <footer className="bg-[#4354C5] text-white pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Quality Cricket"
                className="h-14 w-auto object-contain"
              />

              <h2 className="text-2xl font-bold">
                QUALITY CRICKET
              </h2>
            </div>

            <p className="text-gray-100 leading-8 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum
            </p>

            <div className="flex items-center gap-3 mt-5 text-xl">
              <FaPhoneAlt />
              <span>236526352632</span>
            </div>

            <img
              src={map}
              alt="map"
              className="mt-6 rounded-md w-72 max-w-full"
            />
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              RELATED LINKS
            </h3>

            <ul className="space-y-4 text-lg">
              <li>Home</li>
              <li>Sale</li>
              <li>Accessories</li>
              <li>All Products</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              POLICY
            </h3>

            <ul className="space-y-4 text-lg">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 text-center">
          <p className="text-2xl mb-6">
            Get the latest updates via email.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
            <input
              type="email"
              placeholder="Enter you email"
              className="flex-1 px-5 py-4 rounded-xl text-black outline-none"
            />

            <button className="bg-black hover:bg-gray-900 px-8 py-4 rounded-xl text-lg transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;