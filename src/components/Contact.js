import React, { useState } from "react";
import { useForm } from '@formcarry/react';

export default function Contact() {
  const {state, submit} = useForm({
    id: '6y3x8oGUnI5'
  });
  //if (state.submitted) {
  //  return <div>Submission received!</div>;
  //}

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //function encode(data) {
  //  return Object.keys(data)
  //    .map(
  //      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //    )
  //    .join("&");
  //}

  function handleSubmit(e) {

    //e.preventDefault();

    if (!name || !email || !message) {
      alert("Missing fields");
      return;
    }
    submit()
    //fetch("/", {
    //  method: "POST",
    //  headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //  body: encode({ "form-name": "contact", name, email, message }),
    //})
    //  .then(() => alert("Message sent!"))
    //  .catch((error) => alert(error));
    setName("");
    setEmail("");
    setMessage("");
    //submit()
    alert('Submission received!')
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/d/embed?mid=1HGCV51R8lmS3NfpPRBj8WVOJo2g&msa=0&ie=UTF8&t=m&ll=32.259265%2C35.17822299999999&spn=2.322528%2C4.389038&z=8&output=embed"
          />
        </div>

        <form
          //netlify
          //action="https://formsubmit.co/zachary.dubow@gmail.com"
          //action="https://formsubmit.co/el/newabo"
          action="https://formcarry.com/s/6y3x8oGUnI5"
          //accept-charset="UTF-8"
          //action="mailto:zachary.dubow@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-full md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            I would be happy to learn about your company or idea.
            <img
              src="light-bulb.png"
              //height="50px"
              width="25px"
              style={{ display: "inline", marginLeft: "10px" }}
            />
            {/* <div>This icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <br />
            In the meantime, you can learn more about me online here at these
            links:
          </p>
          <div id="social">
            <a href="https://www.linkedin.com/in/zachary-dubow/">
              <i class="fa fa-linkedin fa-2x"> </i>
            </a>
            <a href="https://medium.com/launch-school/i-failed-programming-101-three-times-6fa0ea487f64">
              <i class="fa fa-medium fa-2x"></i>
            </a>
            <a href="https://github.com/zacharydub">
              <i class="fa fa-github fa-2x"></i>
            </a>
            {/*<a href="https://twitter.com/cogent_rambling">
              <i class="fa fa-twitter fa-2x"></i>
            </a>*/}
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              value={name}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              value={message}
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <div>
            P.S. In case this shiny new email tool isn't working and/or I
            haven't responded to you within 48 weekday hours, feel free to reach
            out via my online accounts linked above.
          </div>
        </form>
      </div>
    </section>
  );
}
