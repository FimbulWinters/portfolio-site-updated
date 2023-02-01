import { Project } from "@/pages/api/typings";

export const fetchProjects = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await result.json();
  const projects: Project[] = data.projects;

  return projects;
};
