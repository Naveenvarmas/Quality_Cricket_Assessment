import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

function Register() {
  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {
    setError("");

    if (
      !form.name ||
      !form.mobile ||
      !form.email ||
      !form.password
    ) {
      setError(
        "Please fill all fields"
      );
      return;
    }

    navigate("/otp-verify");
  };

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center mb-8">
        Create Account
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={
            handleChange
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={
            form.mobile
          }
          onChange={
            handleChange
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={
            form.email
          }
          onChange={
            handleChange
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={
            form.password
          }
          onChange={
            handleChange
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={
            handleSubmit
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Continue
        </button>

        <Link
          to="/login"
          className="block text-center border py-3 rounded-xl hover:bg-gray-50"
        >
          Login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Register;