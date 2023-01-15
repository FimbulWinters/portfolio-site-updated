import Image from "next/image";
import pic from "./images/PXL_20220101_132909071.MP.jpg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 justify-around flex-shrink-0 my-12 w-[450px] md:w-[550px] xl:w-[1000px] snap-center bg-menuColour opacity-70 hover:opacity-100 hover:shadow-2xl p-4">
      <Image
        src={pic}
        alt=""
        className="w-32 h-32 rounded-full object-cover object-center shadow-2xl"
      />
      <div className="px-0 md:px-18">
        <h4 className="text-2xl font-light text-textColour opacity-70">
          Job title
        </h4>
        <h5 className="font-bold mt-1 text-secondaryText opacity-70">
          Employer
        </h5>
        <div className="flex space-x-2 my-2">
          <Image
            src={pic}
            alt="tech"
            className="h-10 w-10 rounded-3xl shadow-2xl"
          />
          <Image
            src={pic}
            alt="tech"
            className="h-10 w-10 rounded-3x shadow-2xll"
          />
          <Image
            src={pic}
            alt="tech"
            className="h-10 w-10 rounded-3xl shadow-2xl"
          />
        </div>

        <p className="py-5 text-secondaryText opacity-30">
          started ... - ended...
        </p>
        <ul className="list-disc space-y-4 ml-5">
          <li className="text-textColour text-sm opacity-70">point</li>
          <li className="text-textColour text-sm opacity-70">point</li>
          <li className="text-textColour text-sm opacity-70">point</li>
          <li className="text-textColour text-sm opacity-70">point</li>
        </ul>
      </div>
    </article>
  );
}
