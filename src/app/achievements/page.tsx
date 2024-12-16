import React from "react";
import Publications from "./publications/page";
import Patents from "./patents/page";
import Projects from "./projects/page";
import PhD from "./phd/page";

const Achievements = () => {
  return (
    <div>
      <Publications />
      <Patents />
      <Projects />
      <PhD />
    </div>
  );
};

export default Achievements;
