import { fetchExperience } from "utils/fetchExperience";
import ExperienceCard from "./experienceCard";
import { client } from "@/sanity";
import { Experience } from "@/pages/api/typings";

type Props = {};

async function getExperience() {
  const experience = await client.fetch(`*[_type == "experience"]
`);

  return experience;
}

export default async function WorkExperience({}: Props) {
  const experience = await getExperience();

  return (
    <div className="h-screen flex flex-col relative text-left md:flex-row overflow-hidden max-w-full justify-evenly mx-auto items-center ">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour mb-12 ">
        Experience
      </h2>
      <div className=" w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory justify-between mx-12 mt-12 scrollbar scrollbar-track-menuColour scrollbar-thumb-hoverColour">
        {experience.map((job: Experience) => {
          return <ExperienceCard info={job} key={job._id} />;
        })}
      </div>
    </div>
  );
}
