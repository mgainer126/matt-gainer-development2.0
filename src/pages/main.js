import * as React from "react";
import "primereact/resources/primereact.min.css";
import {
  Hero,
  About,
  Education,
  //   Works,
  Skills,
  Work,
  Contact,
  Footer,
} from "../components";

function Main() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
