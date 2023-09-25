"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [formValue, SetFormValue] = useState({ email: "", password: "" });
  const router = useRouter();

  const inputChange = (name, value) => {
    SetFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (formValue.email.length === 0) {
      alert("Email Required");
    } else if (formValue.password.length === 0) {
      alert("Password Required");
    } else {
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/login", config);
      const json = await response.json();
      if (json["status"] === true) {
        router.replace("/verify");
        return formValue;
      } else {
        alert(json["message"]);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={Submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">User Email</label>
          <input
            value={formValue.email}
            onChange={(e) => inputChange("email", e.target.value)}
            type="email"
            placeholder="e@mail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">User Password</label>
          <input
            value={formValue.password}
            onChange={(e) => inputChange("password", e.target.value)}
            type="password"
            placeholder="123"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
