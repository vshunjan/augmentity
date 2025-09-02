"use client";
import React, { useRef, useState } from "react";
import StickyScroll from "./scrollstack";
import { Fade } from "react-awesome-reveal";
// import sampleVideo from "../../images/video/defend-2.mp4";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex items-center justify-center w-full h-full text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="object-cover w-full h-full"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];




const AwardSection = () => {
  

  return (
    <section className="award" style={{ backgroundColor: "black" }}>
      <div className="container award-sec">
         <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
        <p className="sub-title-sec heighlight-text">
          Our approach is built around four strategic pillars <span className="award-servive-span">Analyse, Govern,
          Insure,</span> and <span className="award-servive-span"> Defend </span> — designed to give you full-spectrum protection,
          tailored to the realities of today’s threat landscape.
        </p>
        </Fade>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 index-scroll-card col-md-8">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
