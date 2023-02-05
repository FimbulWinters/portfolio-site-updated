import { Project } from "@/pages/api/typings";

export const fetchProjects = async () => {
  const result = await fetch(`http://localhost:3000/api/getProjects`);
  const data = await result.json();
  const projects: Project[] = data.projects;

  return projects;
};
