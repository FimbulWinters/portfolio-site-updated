import React from "react";
import { SocialIcon } from "react-social-icons";
import { MapPinIcon, PhoneIcon, AtSymbolIcon } from "@heroicons/react/24/solid";

import ContactForm from "./contactForm";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        Contact
      </h2>
      <div className="flex flex-col space-y-10">
        <h3 className="text-2xl font-bold text-center"></h3>
      </div>

      <div className="col-start-3 col-span-2 mr-4 mt-4">
        <div className="flex flex-row space-x-2 justify-left hover:shadow-2xl items-center p-4 hover:scale-110 transition duration-300">
          <PhoneIcon className="text-textColour animate-pulse h-8 w-8" />
          <p className="text-textColour text-xs">07411906208</p>
        </div>
        <div className="flex flex-row space-x-2 justify-left hover:shadow-2xl items-center p-4 hover:scale-110 transition duration-300">
          <MapPinIcon className="text-textColour animate-pulse h-8 w-8" />
          <p className="text-textColour text-xs">York, UK</p>
        </div>
        <div className="flex flex-row space-x-2 justify-left hover:shadow-2xl items-center p-4 hover:scale-110 transition duration-300">
          <AtSymbolIcon className="text-textColour animate-pulse h-10 w-10" />
          <p className="text-textColour text-xs">Winters.92@outlook.com</p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 mx-4 items-start">
        <div className="col-start-1 col-span-2 items-center justify-center">
          <p className="text-textColour text-lg underline">Email me: </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
