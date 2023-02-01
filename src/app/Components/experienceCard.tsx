import { Experience } from "@/pages/api/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";
import pic from "./images/PXL_20220101_132909071.MP.jpg";

type Props = {
  info: Experience;
};

export default function ExperienceCard({ info }: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 justify-around flex-shrink-0 my-12 w-[450px] md:w-[550px] xl:w-[1000px] snap-center bg-menuColour opacity-70 hover:opacity-100 hover:shadow-2xl p-4">
      <Image
        src={urlFor(info.companyImage).toString()}
        alt=""
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover object-center shadow-2xl"
      />
      <div className="px-0 md:px-18">
        <h4 className="text-2xl font-light text-textColour opacity-70">
          {info.jobTitle}
        </h4>
        <h5 className="font-bold mt-1 text-secondaryText opacity-70">
          {info.company}
        </h5>
        <div className="flex space-x-2 my-1"></div>

        <p className="py-5 text-secondaryText opacity-30">
          {`started: ${info.dateStarted}. ended: ${info.dateEnded}`}
        </p>
        <ul className="list-disc space-y-2 ml-5">
          {info.points.map((point) => {
            return (
              <li className="text-textColour opacity-70 text-xs" key={info._id}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
