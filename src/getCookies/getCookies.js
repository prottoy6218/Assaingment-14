import React from "react";
import { cookies } from "next/headers";
import Sent from '@/app/page'


//getCookies ()  :::Here I am gating cookies from a browser.And this cookie I sent to the home page via pops.
const getCookies = async () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("token");

  return <Sent theme ={theme }/>;
};

export default getCookies;
