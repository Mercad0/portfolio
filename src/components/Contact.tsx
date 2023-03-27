import React, { useState } from "react";
import { ContactFormProps } from "./Types";
import { db } from "../firebase";

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

type InputId = "email" | "subject" | "message";

const ContactForm = ({ contacts }: ContactFormProps) => {
  const [formData, setFormData] = useState<{ [key in InputId]: string }>({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const id = e.target.id as InputId;
    setFormData({ ...formData, [id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
  
    try {
      await db.collection("contactForm").add(formData);
      setFormData({ email: "", subject: "", message: "" });
      alert("Your message has been sent!");
    } catch (error) {
      console.error("Error submitting the form: ", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setSending(false);
    }
  };
  
  const [sending, setSending] = useState(false);

  return (
    <form className="space-y-4 text-md flex flex-col" onSubmit={handleSubmit}>
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
              value={formData[contact.id as InputId]}
              onChange={handleChange}
              className="border border-gray-800 rounded-lg md:w-80 w-full p-2 bg-gray-700"
              required
            />
          ) : (
            <textarea
              id={contact.id}
              rows-span="6"
              value={formData[contact.id as InputId]}
              onChange={handleChange}
              className="border border-gray-800 rounded-lg w-full p-2 bg-gray-700"
            ></textarea>
          )}
        </div>
      ))}
      <button
  type="submit"
  disabled={sending}
  className={`py-2 px-4 text-md font-roboto text-center text-white rounded-lg bg-gray-700 w-fit hover:bg-green-600 transition-all duration-300 ${
    sending ? "animate-pulse" : ""
  }`}
>
  {sending ? (
    <svg
      className="w-5 h-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ) : (
    "Send message"
  )}
</button>

    </form>
  );
};
