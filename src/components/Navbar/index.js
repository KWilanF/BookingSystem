// src/components/Navbar/index.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import {
  Nav,
  NavLogo,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SidebarContainer,
  SidebarLink,
  CloseIcon,
} from "./navbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "events", label: "Events" },
    { to: "annual", label: "Annual Report" },
    { to: "team", label: "Teams" },
    { to: "blogs", label: "Blogs" },
  ];

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      // Navigate to home first if not already there
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, duration: 500, offset: -85 });
      }, 100);
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 500, offset: -85 });
    }
    setIsOpen(false); // Close sidebar if open
  };

  return (
    <>
      <Nav>
        <NavLogo onClick={() => handleNavClick("home")}>WhaleSharkBooking</NavLogo>
        <Bars onClick={toggleSidebar} />

        <NavMenu>
          {navLinks.map((link) => (
            <SidebarLink key={link.to} onClick={() => handleNavClick(link.to)}>
              {link.label}
            </SidebarLink>
          ))}
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

      <SidebarContainer isOpen={isOpen}>
        <CloseIcon onClick={toggleSidebar} />
        {navLinks.map((link) => (
          <SidebarLink key={link.to} onClick={() => handleNavClick(link.to)}>
            {link.label}
          </SidebarLink>
        ))}

        <SidebarLink as={NavBtnLink} to="/signup" onClick={toggleSidebar}>
          Sign Up
        </SidebarLink>
        <SidebarLink as={NavBtnLink} to="/signin" onClick={toggleSidebar}>
          Sign In
        </SidebarLink>
      </SidebarContainer>
    </>
  );
};

export default Navbar;
