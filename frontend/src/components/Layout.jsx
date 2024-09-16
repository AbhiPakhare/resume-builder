import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarCompnent from "./NavbarComponent";
import { UserContext } from "../context/user.store";

const Layout = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <main>
        <div className="container mx-auto px-4">
          <UserContext.Provider
            value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
          >
            <NavbarCompnent />
            <Outlet />
          </UserContext.Provider>
        </div>
      </main>
    </div>
  );
};

export default Layout;
