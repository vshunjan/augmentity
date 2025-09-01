// components/StickyScrollRevealDemo.jsx
"use client";
import React from "react";
import  StickyScroll  from "./scrollstack";
import "./scrollstack.css";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="content-card gradient-cyan-emerald">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="content-card-image">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="content-image"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="content-card gradient-orange-yellow">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="content-card gradient-cyan-emerald">
        Running out of content
      </div>
    ),
  },
];

 function StickyScrollRevealDemo() {
  return (
    <div className="sticky-scroll-demo">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;