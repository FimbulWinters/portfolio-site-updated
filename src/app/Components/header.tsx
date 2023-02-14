"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import { fetchPageInfo } from "utils/fetchPageInfo";
import { fetchSocials } from "utils/fetchSocials";
import React, { useState, useEffect } from "react";
import { Social } from "@/pages/api/typings";
// import Link from "next/link";

type Props = {};

function Header({}: Props) {
  const [socials, setSocials] = useState<Array<Social>>([]);
  useEffect(() => {
    fetchSocials().then((socials) => {
      setSocials(socials);
    });
  }, []);

  return (
    <header className=" bg-slate-700 sticky top-0  p-5 flex justify-between max-w-7xl mx-auto z-30">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <div>
          {/* socials */}
          {socials.map((social) => {
            return (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
              />
            );
          })}
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
