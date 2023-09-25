"use client";
import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

const Loading = (props) => {
  const [showLoader, setShowLoader] = useState(true);

  // Use useEffect to hide the loader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#a96060"
          foregroundColor="#8fd95e"
          {...props}
        ></ContentLoader>
      )}

      {!showLoader && <div></div>}
    </>
  );
};

export default Loading;
