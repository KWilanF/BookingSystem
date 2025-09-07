// src/components/Footer/footerElements.js
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #56ccfc;
  padding: 40px 0;
  color: #fff;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLinksWrapper = styled.div`
  margin: 20px;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`;

export const FooterLinkTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterContact = styled.div`
  margin: 10px;
  font-size: 14px;

  p {
    margin-bottom: 8px;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 30px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;
