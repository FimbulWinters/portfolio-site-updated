import Image from "next/image";
import pic from "./images/PXL_20220101_132909071.MP.jpg";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center">
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        skills
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <Image
          src={pic}
          alt="tech"
          className="h-20 w-20 rounded-full object-cover hover:shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-100"
        />
        <Image
          src={pic}
          alt="tech"
          className="h-20 w-20 rounded-full object-cover hover:shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-100"
        />
        <Image
          src={pic}
          alt="tech"
          className="h-20 w-20 rounded-full object-cover hover:shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-100"
        />
        <Image
          src={pic}
          alt="tech"
          className="h-20 w-20 rounded-full object-cover hover:shadow-2xl hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-100"
        />
      </div>
    </div>
  );
}
