
//Here we are sending a token to email through nodemailer

import GetTokenValues from "@/regester-Token/generateToken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res) {
  //GetTokenValues() Calling this function will get our random token
  const generateVerificationToken = await GetTokenValues(5);

  const { searchParams } = new URL(req.url);
  let GetMail = searchParams.get("email");

  // transporter
  let Transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    from: "Task Manager MERN <info@teamrabbil.com>",
    to: GetMail,
    subject: "test Email subject",
    text: `Code is ${generateVerificationToken}`,
  };

  try {
    await Transporter.sendMail(mailOptions);
    return NextResponse.json({ meg: "Success" });
  } catch (error) {
    return NextResponse.json({ meg: "failed", error: error.message });
  }
}
