import Image from "next/image";
import pic from "./images/PXL_20220101_132909071.MP.jpg";

type Props = {};

export default function Projects({}: Props) {
  const projects: Array<any> = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        Portfolio
      </h2>
      <div className="relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory">
        {projects.map((project) => {
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-16 md:p-24 h-screen">
              <div>
                <Image
                  src={pic}
                  alt="hello"
                  className="h-32 w-32 rounded-full"
                />
              </div>
              <div>
                <h3>{project}</h3>
              </div>
              <div>
                <p>this is a brief summary of this project</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
