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
import axios from "axios";
import React, { useEffect, useState } from "react";

// import Loading from "../components/Loading";
function Main() {
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);
  const [bioDescription, setBioDescription] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  const url =
    "https://cdn.contentful.com/spaces/qzprt5insnuh/environments/master/entries";
  const accessToken = "-k06zkyGat0RAuTfTthR-LP6bIwjVFhB0Zu44tjVCYY"; // Replace with your actual Contentful access token

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setBio(response.data.items[0].fields);
        setSkills(response.data.items[2].fields);
        setWork(response.data.items[1].fields);
        setBioDescription(response.data.items[0].fields.jobDescription);
        setContactInfo(response.data.items[0].fields.contactInfo);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      });
  }, []);

  return (
    <div>
      <Hero />
      <About
        bio={bio.description}
        bioDescription={bioDescription}
        contactInfo={contactInfo}
      />
      <Work work={work} />
      <Education />
      <Skills skills={skills} />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
