import "primereact/resources/primereact.min.css";
import {
  Hero,
  About,
  Education,
  Works,
  Skills,
  Work,
  Contact,
  Footer,
} from "../components";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Main() {
  const [work, setWork] = useState([]);
  const [bio, setBio] = useState([]);
  const [bioDescription, setBioDescription] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);
  const [profileImg, setProfileImg] = useState([]);
  const [resume, setResume] = useState([]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);

  const url =
    "https://cdn.contentful.com/spaces/qzprt5insnuh/environments/master/entries";

  const accessToken = process.env.REACT_APP_CONTENTFUL_TOKEN;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setResume(response.data.includes.Asset[1].fields.file.url);
        setEducation(response.data.items[1].fields.educationalHistory);
        setSkills(response.data.items[2].fields.skills);
        setProfileImg(response.data.items[0].fields.contactInfo.meimage);
        setBio(response.data.items[0].fields);
        setBioDescription(response.data.items[0].fields.jobDescription);
        setContactInfo(response.data.items[0].fields.contactInfo);
        setWork(response.data.items[5].fields.details);
        setProjects(response.data.items[1].fields.projects);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response?.data || error.message
        );
      });
  }, [accessToken]);

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
      <Education education={education} />
      <Skills skills={skills} />
      <Works projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
