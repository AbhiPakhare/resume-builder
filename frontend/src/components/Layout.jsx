import React from "react";
import { Outlet } from "react-router-dom";
import NavbarCompnent from "./NavbarComponent";

const Layout = () => {
  return (
    <div>
      <main>
        <div className="container mx-auto px-4">
          <NavbarCompnent />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
