"use client";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroBackground from "./heroBackground";
import me from "./images/alex+Alex_GettingReady_0021.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Alex Winters.",
      "I'm an ex-probation officer...",
      "making the switch to a career in software development.",
      "Northcoders coding bootcamp graduate",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <motion.div
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
    >
      <HeroBackground />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={me}
        alt="picture of me"
        quality={100}
      />
      <div>
        <h2 className="text-sm uppercase pb-2 tracking-[15px] text-secondaryText opacity-20">
          Junior Software Developer
        </h2>
        <h1>
          <span className="text-textColour">{text}</span>
          <Cursor cursorColor="#e5e2ae" />
        </h1>
      </div>
      <div className="flex justify-between mx-auto z-40 text-sm uppercase pb-2 text-secondaryText opacity-20">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="flex flex-row items-center"
        >
          <Link href="#about" className="mx-2">
            About
          </Link>
          <Link href="#projects" className="mx-2">
            Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="flex flex-row justify-between items-center"
        >
          <Link href="#skills" className="mx-2">
            Skills
          </Link>

          <Link href="#experience" className="mx-2">
            Experience
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
