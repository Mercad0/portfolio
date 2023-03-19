import React from "react";
import { ContactFormProps } from "./Types";

export default function Contact() {
  const contacts = [
    {
      htmlFor: "email",
      labelName: "email",
      type: "email",
      id: "email",
      message: "Your Email",
    },
    {
      htmlFor: "subject",
      labelName: "subject",
      type: "text",
      id: "subject",
      message: "Subject",
    },
    {
      htmlFor: "message",
      labelName: "message",
      type: "textarea",
      id: "message",
      message: "Your message",
    },
  ];
  return (
    <div
      className="md:w-3/6 min-h-40 py-4 px-4 mx-auto flex flex-col w-fit h-fit bg-gradient-to-br from-gray-600 to-gray-300 duration-500 rounded-lg hover:rounded-3xl
    shadow-xl text-white font-medium"
      id="contact"
    >
      <h2 className="md:mb-4 mb-2 md:text-5xl text-3xl font-extrabold text-center">
        Lets Connect!
      </h2>
      <p className="mb-8 font-light text-center md:text-xl text-md">
        Thank you for taking the time to visit my portfolio. I&rsquo;d love to
        connect with you and learn more about your work as well!
      </p>
      <ContactForm contacts={contacts} />
    </div>
  );
}

const ContactForm = ({ contacts }: ContactFormProps) => {
  return (
    <form className="space-y-4 text-md flex flex-col">
      {contacts.map((contact) => (
        <div key={contact.id} className="flex flex-col">
          <label
            htmlFor={contact.htmlFor}
            className="mb-1 text-md font-medium text-gray-100"
          >
            {contact.message}
          </label>
          {contact.type !== "textarea" ? (
            <input
              type={contact.type}
              id={contact.id}
              className="border border-gray-800 rounded-lg md:w-80 w-full p-2 bg-gray-700"
              required
            />
          ) : (
            <textarea
              id={contact.id}
              rows-span="6"
              className="border border-gray-800 rounded-lg w-full p-2 bg-gray-700"
            ></textarea>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="py-2 px-4 text-md font-roboto text-center text-white rounded-lg bg-gray-700 w-fit hover:bg-green-600"
      >
        Send message
      </button>
    </form>
  );
};
