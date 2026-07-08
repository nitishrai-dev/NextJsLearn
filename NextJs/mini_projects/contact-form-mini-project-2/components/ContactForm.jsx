"use client";
import React from "react";
import Form from "next/form";
const ContactForm = ({ action }) => {
  return (
    <Form action={action} className="space-y-4 flex flex-col ">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name:{" "}
      </label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email:{" "}
      </label>
      <input
        type="text"
        name="email"
        placeholder="Your Email"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <div className="flex justify-center">
        <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-min flex items-center justify-center"
      >
        Submit
      </button>
      </div>
    </Form>
  );
};

export default ContactForm;
