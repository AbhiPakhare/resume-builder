import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarCompnent = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/logo.png">
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
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">My Resumes</Navbar.Link>
        <Navbar.Link href="#">Settings</Navbar.Link>
        <Navbar.Link href="#">Feedback</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCompnent;
