import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "@material-tailwind/react";

const LandingPage = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="container mx-auto flex justify-center my-10">
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
