import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

function Security() {
  const [form, setForm] =
    useState({
      name: "Pranay Shukla",
      mobile: "6325632563",
      email:
        "pranayshukla@gmail.com",
    });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back */}
          <NavLink
            to="/account"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
          >
            <ArrowLeft size={16} />
            back
          </NavLink>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow max-w-xl mx-auto p-8">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-5">
              <ShieldCheck size={30} />
            </div>

            <h1 className="text-3xl font-bold text-center mb-8">
              Login & Security
            </h1>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={
                    handleChange
                  }
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={
                    form.mobile
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    form.email
                  }
                  onChange={
                    handleChange
                  }
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Save */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium mt-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Security;