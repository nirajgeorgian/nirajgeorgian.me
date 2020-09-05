import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>niraj georgian</p>
      <Link to="/">&larr; back to home</Link>
    </div>
  );
};

export default AboutPage;
