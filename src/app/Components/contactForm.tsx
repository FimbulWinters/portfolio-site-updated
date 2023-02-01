"use client";
import { useState } from "react";

type Props = {};

export default function ContactForm({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: Object = {
      name,
      email,
      message,
    };

    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text,plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    <form
      className="flex flex-col space-y-4 w-fit mx-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className=" flex space-x-4">
        <input
          className="bg-menuColour rounded-lg h-12 mt-4 hover:shadow-2xl focus:shodow-2xl focus:border-2 focus:border-x-secondaryText p-2"
          type="text"
          placeholder="Your Name"
          name="user_name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="bg-menuColour rounded-lg h-12 mt-4 hover:shadow-2xl focus:shodow-2xl focus:border-2 focus:border-x-secondaryText p-2"
          type="email"
          placeholder="Your email"
          name="user_email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <textarea
        className="bg-menuColour rounded-lg h-12 mt-4 hover:shadow-2xl focus:shodow-2xl focus:border-2 focus:border-x-secondaryText p-2"
        placeholder="Your message here..."
        name="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button className="bg-textColour rounded-xl h-8" type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
}
