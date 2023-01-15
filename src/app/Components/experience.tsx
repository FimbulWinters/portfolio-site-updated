import ExperienceCard from "./experienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-left md:flex-row overflow-hidden max-w-full justify-evenly mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        Experience
      </h2>
      <div className=" w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory justify-between mx-12">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
