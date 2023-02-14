import Image from "next/image";
// import { fetchSkills } from "utils/fetchSkills";
import { urlFor, client } from "@/sanity";
import { Skill } from "@/pages/api/typings";
import { NextApiRequest, NextApiResponse } from "next";

type Props = {};
type Data = {
  skills: Skill[];
};

async function getSkills() {
  const skills = await client.fetch(`
  *[_type == "skill"]
  `);

  return skills;
}

export default async function Skills({}: Props) {
  const skills = await getSkills();
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        skills
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill: Skill) => {
          return (
            <Image
              key={skill._id}
              src={urlFor(skill.image).toString()}
              width={80}
              height={80}
              alt={skill.title}
              className="h-20 w-20 rounded-full object-cover hover:shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-100"
            />
          );
        })}
      </div>
    </div>
  );
}
