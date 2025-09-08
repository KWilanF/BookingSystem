import React from "react";
import styled, { keyframes } from "styled-components";
import About from "./about";
import Events from "./events";
import Teams from "./team";
import Annual from "./annual";
import Blogs from "./blogs";

// Floating animation for home content
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Generic section wrapper with optional background
const SectionWrapper = styled.section`
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  color: #fff;
  background: ${({ bg }) => (bg ? `url(${bg})` : "#000")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;


// Home section content
const HomeContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
  text-align: center;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffd700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #ffffff;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(90deg, #56ccfc, #2f80ed);
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Home = () => {
  const sections = [
{
  id: "home",
  component: (
    <HomeContent>
      <Title>WhaleShark Watching</Title>
      <Subtitle>Experience the majestic giants of Oslob, Cebu like never before!</Subtitle>
      <CTAButton href="#about">Explore More</CTAButton>
    </HomeContent>
  ),
  bg: "/images/homebg.jpeg", // ✅ from public folder
},

    {
      id: "about",
      component: <About />,
      bg: "/images/homebg.jpeg", // About section background image
    },
    {
      id: "events",
      component: <Events />,
      bg: "/images/homebg.jpeg", // Events section background image
    },
    {
      id: "annual",
      component: <Annual />,
      bg: "/images/homebg.jpeg", // Annual section background image
    },
    {
      id: "team",
      component: <Teams />,
      bg: "/images/homebg.jpeg", // Teams section background image
    },
    {
      id: "blogs",
      component: <Blogs />,
      bg: "/images/homebg.jpeg", // Blogs section background image
    },
  ];

  return (
    <div>
      {sections.map((section) => (
        <SectionWrapper id={section.id} key={section.id} bg={section.bg}>
          {section.component}
        </SectionWrapper>
      ))}
    </div>
  );
};

export default Home;
