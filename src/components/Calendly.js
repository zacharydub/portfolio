import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  });

  return (
    <div className="calendar">
      <h2 className="text-white sm:text-4xl text-3xl font-medium title-font text-center">
        Summon Me
      </h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/zachary-dubow/catch-up?primary_color=4b00b5"
        style={{ minWidth: "320px", height: "100vh" }}
      />
    </div>
  );
};

export default Calendly;
