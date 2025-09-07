// src/components/Footer/index.js
import React from "react";
import { scroller } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterContact,
  FooterBottom,
  SocialIcons,
  SocialIconLink,
} from "./footerElements";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (section) => {
    scroller.scrollTo(section, { smooth: true, duration: 500, offset: -85 });
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          {/* Quick Links */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Quick Links</FooterLinkTitle>
              <FooterLink onClick={() => handleScroll("home")}>Home</FooterLink>
              <FooterLink onClick={() => handleScroll("about")}>About</FooterLink>
              <FooterLink onClick={() => handleScroll("events")}>Events</FooterLink>
              <FooterLink onClick={() => handleScroll("blogs")}>Blogs</FooterLink>
              <FooterLink onClick={() => handleScroll("team")}>Team</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          {/* Contact Info */}
          <FooterLinksWrapper>
            <FooterContact>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <p>📍 Tan-awan, Oslob, Cebu, Philippines</p>
              <p>📞 +63 912 345 6789</p>
              <p>📧 info@whalesharkbooking.com</p>
            </FooterContact>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        {/* Bottom Section */}
        <FooterBottom>
          <p>© {new Date().getFullYear()} WhaleSharkBooking. All Rights Reserved.</p>
          <SocialIcons>
            <SocialIconLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
