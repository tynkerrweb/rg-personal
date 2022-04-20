import React from "react";
import Footer from "./Footer";
import Nav from "./nav";

const PageContainer = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default PageContainer;
