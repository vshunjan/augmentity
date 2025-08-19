import React, { useEffect, useState } from "react";

export default function EvervaultCard({ text = "Hover" }) {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(8000)); // more chars for full coverage
  }, []);

  function onMouseMove(e) {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div className="evervault-wrapper">
      <div
        className="evervault-card"
        data-text={randomString}  // ✅ attach chars here
        onMouseMove={onMouseMove}
      >
        {/* Background Pattern */}
        <div className="evervault-pattern">
          <p>{randomString}</p>
        </div>

        {/* Foreground Content */}
        <div className="evervault-content">
          <div className="circle">
            {/* <span>{text}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
