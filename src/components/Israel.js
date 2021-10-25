import React, { useEffect } from "react";

const Israel = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://widgets.skyscanner.net/widget-server/js/loader.js"
    );
    head.appendChild(script);
  });
  return (
    <React.Fragment>
      <h2 className="text-white sm:text-4xl text-3xl font-medium title-font text-center mb-7 px-1">
        Visit me in Israel
      </h2>
      <div style={{ width: "500px", margin: "auto" }}>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-white">
          <div
            data-skyscanner-widget="SearchWidget"
            data-destination-name="'Jerusalem'"
            className="mx-auto"
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Israel;
