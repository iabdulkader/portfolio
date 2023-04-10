import React from "react";
import Button from "../Button";
import Social from "./Social";
import ContactForm from "../ContactForm";

type Props = {};

function Contact({}: Props) {
  return (
    <div id="contact" className="text-[#FEF48C] my-10 w-full">
      <div className="inset-0 w-full">
        <p className="text-lg mb-3">GET IN TOUCH!</p>
        <h1 className="text-[3rem] lg:text-[4rem] leading-none font-medium max-w-[80rem]">
          Do you have a question, an idea, or a project you need help with?
          <br />
          Contact me!
        </h1>
        <div className="mt-6 mb-6">
          <Social />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
