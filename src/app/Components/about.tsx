import { PageInfo } from "@/pages/api/typings";
import Image from "next/image";
// import { fetchPageInfo } from "utils/fetchPageInfo";
// import { readdir } from "fs/promises";
import pic from "./images/about_me_photos/WhatsApp Image 2023-01-15 at 12.41.39.jpg";
import { client } from "@/sanity";

type Props = {};

async function getAbout() {
  const pageInfo = await client.fetch(`*[_type == "pageInfo"][0]
`);

  return pageInfo;
  //  pageInfo;
}

export default async function About({}: Props) {
  const info: PageInfo = await getAbout();

  return (
    <div
      id="about"
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-center mx-auto items-center"
    >
      <h2 className="absolute uppercase top-20 tracking-[15px] text-textColour">
        About me
      </h2>
      <Image
        src={pic}
        alt="pics"
        className="relative rounded-full h-32 w-32 mx-auto object-cover flex-shrink-0 mb-12"
      />
      <div className="md: mx-12">
        <h3 className=" tracking-[5px]  text-secondaryText opacity-40 text-sm">
          Here is a brief summary of me...
        </h3>
        <p className="text-sm mt-4 mx-4 text-left text-secondaryText opacity-20 ">
          {info.backgroundInformation}
        </p>
      </div>
    </div>
  );
}

// function getimages(): Array<any> {
//   readdir("/images/about_me_photos").then((res) => {
//     for (const file of res) {
//       urls.push(file);
//     }
//   });
//   return urls;
// }

// portfolio_site_2.0/src/app/Components/images/about_me_photos
