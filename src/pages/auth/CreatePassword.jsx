import { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

function CreatePassword() {
  const navigate =
    useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirm, setConfirm] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSave = () => {
    setError("");

    if (
      !password ||
      !confirm
    ) {
      setError(
        "Please fill both fields"
      );
      return;
    }

    if (
      password.length <
      8
    ) {
      setError(
        "Password must be at least 8 characters"
      );
      return;
    }

    if (
      password !==
      confirm
    ) {
      setError(
        "Passwords do not match"
      );
      return;
    }

    navigate("/login");
  };

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center mb-8">
        Create Password
      </h2>

      {/* Rules */}
      <div className="mb-8">
        <h3 className="font-medium text-lg mb-3">
          Password must have
        </h3>

        <ul className="text-gray-600 text-sm space-y-1 list-disc pl-5">
          <li>
            at least 8
            characters
          </li>

          <li>
            one uppercase
            letter
          </li>

          <li>
            one special
            character (!,@,#,%)
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            New Password
          </label>

          <input
            type="password"
            placeholder="Enter new password"
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
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Confirm New Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            value={
              confirm
            }
            onChange={(e) =>
              setConfirm(
                e.target.value
              )
            }
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* Save */}
        <button
          onClick={
            handleSave
          }
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          Save
        </button>
      </div>
    </AuthLayout>
  );
}

export default CreatePassword;