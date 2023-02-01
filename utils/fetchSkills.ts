import { Skill } from "@/pages/api/typings";

export const fetchSkills = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
  );

  const data = await result.json();
  const skills: Skill[] = data.skills;

  return skills;
};
