import { Project } from "@/pages/api/typings";
import Image from "next/image";
import Link from "next/link";
import { fetchProjects } from "utils/fetchProjects";
import pic from "./images/PXL_20220101_132909071.MP.jpg";

type Props = {};

export default async function Projects({}: Props) {
  const projects: Project[] = await fetchProjects();
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        Portfolio
      </h2>
      <div className="relative w-full flex overflow-x-scroll justify-between overflow-hidden snap-x snap-mandatory space-x-5 scrollbar scrollbar-track-menuColour scrollbar-thumb-hoverColour">
        {projects.map((project) => {
          return (
            <div className="flex flex-col rounded-xl items-center space-y-7 justify-around flex-shrink-0 my-12 w-[450px] md:w-[550px] xl:w-[1000px] snap-center bg-menuColour opacity-70 hover:opacity-100 hover:shadow-2xl p-4">
              <div>
                <Image
                  src={pic}
                  alt="hello"
                  className="h-32 w-32 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-textColour">{project.title}</h3>
              </div>
              <div>
                <p className="text-secondaryText text-sm ">{project.summary}</p>
              </div>
              <div>
                <Link
                  href={project.linkToBuild}
                  className="text-textColour shadow-lg"
                >
                  View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
