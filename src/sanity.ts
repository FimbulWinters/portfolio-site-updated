import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
console.log(process.env.Next_PUBLIC_SANITY_DATASET);

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "p079sml5",
  apiVersion: "2021-02-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);
export const urlFor = (source: any) => {
  return createImageUrlBuilder(config).image(source);
};
