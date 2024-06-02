"use client";
import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_qry6xx9",
          "template_sdbyb5e",
          formRef.current,
          "hn6r4-MhmKX4ULNPB"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            formRef.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="lg:w-2/3 py-8 flex flex-col items-center gap-5">
      <h1 className="font-secondary text-white font-extrabold text-3xl lg:text-4xl text-center">
        Contact me
      </h1>
      <p className=" text-gray-400 text-center text-monofont lg:max-w-[45vw]">
        Please contact through social media platforms or please use the message
        sending feature below.You can send me a message for hiring purposes or
        for any open projects.
      </p>
      <div className="w-4/5 lg:w-2/5">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="text-monofont flex flex-col transition-all"
        >
          <label className="text-gray-400 ">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="p-3 bg-formbackground mb-5 rounded-md text-black"
            required
          />
          <label className="text-gray-400 ">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="p-3 bg-formbackground mb-5 rounded-md text-black"
            required
          />
          <label className="text-gray-400 ">Message</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            className="p-3 h-48 bg-formbackground mb-5 rounded-md text-black"
            required
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-6 border hover:border-pink-700 border-white hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
        {done && "Thank you for your message"}
      </div>
    </div>
  );
};

export default Contact;
