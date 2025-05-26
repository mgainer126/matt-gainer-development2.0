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

function Main() {
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState([]);
  const [bioDescription, setBioDescription] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const [profileImg, setProfileImg] = useState([]);
  const [resume, setResume] = useState([]);

  const url =
    "https://cdn.contentful.com/spaces/qzprt5insnuh/environments/master/entries";
  const accessToken = "-k06zkyGat0RAuTfTthR-LP6bIwjVFhB0Zu44tjVCYY";

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
        setProfileImg(response.data.includes.Asset[1].fields.file.url);
        setResume(response.data.includes.Asset[0].fields.file.url);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      });
  }, []);

  console.log(resume);
  return (
    <div>
      <Hero />
      <About
        bio={bio.description}
        bioDescription={bioDescription}
        contactInfo={contactInfo}
        profileImg={profileImg}
        resume={resume}
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
