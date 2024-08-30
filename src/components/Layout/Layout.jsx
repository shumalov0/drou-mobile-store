import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../Router/router";

const Layout = (chilren) => {
  return (
    <>
      <Header />
      <Router>{chilren}</Router>
      <Footer />
    </>
  );
};

export default Layout;
