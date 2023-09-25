//Here when we send email to nodemailer we will get verification code and match that code in this place.If it matches it will take me to the dashboard
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [verificationCode, setVerificationCode] = useState("1234");

  const handleInputChange = (e) => {
    const data = e.target.value;
    setInputValue(data);
  };

  const handleEmailClick = async () => {
    if (inputValue === verificationCode) {
      router.replace("/dashboard");
    } else {
      alert("Verification code is not valid");
    }
    setInputValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center text-2xl font-bold mb-4">Verification</h1>
        <form>
          <input
            className="border-2 border-red-600 w-full py-2 px-3 mb-4"
            type="text" // Change to text input
            placeholder="Verify number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleEmailClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
}
