import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Package,
  ShieldCheck,
  MapPin,
  Headphones,
  ArrowLeft,
} from "lucide-react";

function Account() {
  const cards = [
    {
      title: "Your Orders",
      desc: "Track, return, or buy things again",
      icon: Package,
      to: "/orders",
      color: "bg-orange-100 text-orange-500",
    },
    {
      title: "Login & Security",
      desc: "Edit login, name, mobile number and email",
      icon: ShieldCheck,
      to: "/account/security",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Your Address",
      desc: "Edit addresses for orders",
      icon: MapPin,
      to: "/account/address",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Contact Us",
      desc: "Need help? Reach our support team",
      icon: Headphones,
      to: "/contact",
      color: "bg-teal-100 text-teal-600",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back */}
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft size={16} />
            back
          </NavLink>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-10">
            Your Account
          </h1>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={index}
                  to={item.to}
                  className="bg-white rounded-xl border hover:shadow-lg transition p-6 flex items-start gap-4"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-5">
                      {item.desc}
                    </p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Account;