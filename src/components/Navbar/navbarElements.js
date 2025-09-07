// src/components/Navbar/navbarElements.js
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

// Navbar container
export const Nav = styled.nav`
  background: #56ccfc;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 12;
`;

// Logo
export const NavLogo = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

// Hamburger menu icon for mobile
export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

// Desktop nav menu
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Nav buttons container
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Nav button link (Sign In / Sign Up)
export const NavBtnLink = styled(RouterLink)`
  border-radius: 4px;
  background: #ffffff;
  padding: 10px 22px;
  color: #000;
  margin-left: 10px;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #808080;
  }
`;

// Sidebar container for mobile
export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background: rgba(86, 204, 252, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding-top: 60px;
  transition: 0.3s ease-in-out;
  z-index: 999;
`;

// Sidebar link (scrollable sections)
export const SidebarLink = styled(ScrollLink)`
  display: block;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #0c86c4;
  }
`;

// Close icon inside sidebar
export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;
