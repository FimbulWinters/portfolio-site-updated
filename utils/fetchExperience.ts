import { Experience } from "@/pages/api/typings";

export const fetchExperience = async () => {
  const result = await fetch(`http://localhost:3000/api/getExperience`);
  const data = await result.json();
  const experience: Experience[] = data.experience;

  return experience;
};
