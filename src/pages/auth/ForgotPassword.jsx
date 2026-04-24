import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

function ForgotPassword() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [error, setError] =
    useState("");

  const handleContinue = () => {
    setError("");

    if (!email) {
      setError(
        "Please enter your email"
      );
      return;
    }

    navigate("/otp-verify");
  };

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center mb-6">
        Forgot Password
      </h2>

      <p className="text-center text-gray-500 text-sm mb-8 leading-6">
        Enter the email
        address associated
        with your account.
      </p>

      <div className="space-y-4">
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

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={
            handleContinue
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Continue
        </button>

        <Link
          to="/login"
          className="block text-center border py-3 rounded-xl hover:bg-gray-50"
        >
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;