import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-center my-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
