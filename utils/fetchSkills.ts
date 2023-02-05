import { Skill } from "@/pages/api/typings";

export const fetchSkills = async () => {
  const result = await fetch(`http://localhost:3000/api/getSkills`);

  const data = await result.json();
  const skills: Skill[] = data.skills;

  return skills;
};
