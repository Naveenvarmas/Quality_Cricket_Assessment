import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

function Login() {
  const navigate =
    useNavigate();

  const [tab, setTab] =
    useState("email");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = () => {
    setError("");

    if (tab === "email") {
      if (
        !email ||
        !password
      ) {
        setError(
          "Please fill all fields"
        );
        return;
      }

      navigate("/");
    } else {
      if (!phone) {
        setError(
          "Enter phone number"
        );
        return;
      }

      navigate("/otp-verify");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center mb-8">
        Login
      </h2>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 bg-gray-100 rounded-xl p-1 mb-6">
        <button
          onClick={() =>
            setTab("email")
          }
          className={`py-2 rounded-lg text-sm ${
            tab === "email"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Email
        </button>

        <button
          onClick={() =>
            setTab("phone")
          }
          className={`py-2 rounded-lg text-sm ${
            tab === "phone"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Phone Number
        </button>
      </div>

      <div className="space-y-4">
        {tab ===
        "email" ? (
          <>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="password"
              placeholder="Enter password"
              value={
                password
              }
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
          />
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* Forgot */}
        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Main Button */}
        <button
          onClick={
            handleSubmit
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          {tab === "phone"
            ? "Send OTP"
            : "Login"}
        </button>

        {/* Create */}
        <Link
          to="/register"
          className="block text-center border py-3 rounded-xl hover:bg-gray-50"
        >
          Create Account
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;