import {
  useRef,
  useState,
} from "react";
import {
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

function OtpVerify() {
  const navigate =
    useNavigate();

  const inputs = useRef([]);

  const [otp, setOtp] =
    useState([
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

  const [error, setError] =
    useState("");

  const handleChange = (
    e,
    index
  ) => {
    const value =
      e.target.value;

    const updatedOtp = [
      ...otp,
    ];

    updatedOtp[index] =
      value;

    setOtp(updatedOtp);

    if (
      value.length === 1 &&
      index < 5
    ) {
      inputs.current[
        index + 1
      ].focus();
    }
  };

  const handleBackspace = (
    e,
    index
  ) => {
    if (
      e.key ===
        "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[
        index - 1
      ].focus();
    }
  };

  const handleVerify = () => {
    setError("");

    const joinedOtp =
      otp.join("");

    if (
      joinedOtp.length !==
      6
    ) {
      setError(
        "Enter complete OTP"
      );
      return;
    }

    navigate(
      "/create-password"
    );
  };

  const handleResend = () => {
    setOtp([
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

    setError("");
  };

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center mb-5">
        Verify Mobile Number
      </h2>

      <p className="text-center text-gray-500 text-sm mb-2">
        We have sent the OTP
        to your mobile number
      </p>

      <p className="text-center font-medium mb-8">
        +91 98XXXXXX32
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-3 mb-6">
        {[
          ...Array(6),
        ].map(
          (_, index) => (
            <input
              key={index}
              ref={(el) =>
                (inputs.current[
                  index
                ] = el)
              }
              maxLength="1"
              value={
                otp[index]
              }
              onChange={(
                e
              ) =>
                handleChange(
                  e,
                  index
                )
              }
              onKeyDown={(
                e
              ) =>
                handleBackspace(
                  e,
                  index
                )
              }
              className="w-12 h-12 border rounded-lg text-center text-lg font-semibold outline-none focus:border-blue-600"
            />
          )
        )}
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">
          {error}
        </p>
      )}

      {/* Verify */}
      <button
        onClick={
          handleVerify
        }
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
      >
        Verify
      </button>

      {/* Resend */}
      <p className="text-center text-sm mt-5 text-gray-500">
        Didn't receive
        code?{" "}
        <button
          onClick={
            handleResend
          }
          className="text-blue-600"
        >
          Resend OTP
        </button>
      </p>
    </AuthLayout>
  );
}

export default OtpVerify;