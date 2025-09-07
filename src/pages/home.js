import React from "react";
import About from "./about";
import Events from "./events";
import Teams from "./team";
import Annual from "./annual";
import Blogs from "./blogs";

const Home = () => {
  const sections = [
    { id: "home", component: <h1>WhaleShark Watching</h1> },
    { id: "about", component: <About /> },
    { id: "events", component: <Events /> },
    { id: "annual", component: <Annual /> },
    { id: "team", component: <Teams /> },
    { id: "blogs", component: <Blogs /> },
  ];

  return (
    <div>
      {sections.map((section) => (
        <section
          id={section.id}
          key={section.id}
          style={{ minHeight: "100vh", padding: "50px 20px" }}
        >
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default Home;
