import React, { useEffect, useState, useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.store";

const NavbarCompnent = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="/logo.png"
          className="mr-3 h-11 sm:h-9"
          alt="Resume Builder Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Resume Builder
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {!isLoggedIn && (
          <Link to="/register">
            <Button className="mr-2">Register</Button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
        {isLoggedIn && (
          <Button className="ml-2" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="#">Resumes</Navbar.Link>
        <Navbar.Link href="#">Settings</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCompnent;
