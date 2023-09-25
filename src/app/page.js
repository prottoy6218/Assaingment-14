"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";

const Page = (props) => {
  const handleCheckCookieAuth = () => {
    const cookie = props.theme;
    if (!cookie ) {
      alert("Authentication failed. Please log in again.");
    }
  };

  return (
    <div className="bg-black flex items-center justify-center gap-7">
      <Button variant="contained" disableElevation>
        <Link href={"/login"}>Sign In</Link>
      </Button>

      <Button
        variant="contained"
        disableElevation
        onClick={handleCheckCookieAuth}
      >
        <Link href={"/dashboard"}>Dashboard</Link>
      </Button>
    </div>
  );
};

export default Page;
