import { Experience } from "@/pages/api/typings";

export const fetchExperience = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );
  const data = await result.json();
  const experience: Experience[] = data.experience;

  return experience;
};
