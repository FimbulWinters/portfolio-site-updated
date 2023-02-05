import { Social } from "@/pages/api/typings";

export const fetchSocials = async () => {
  const result = await fetch(`http://localhost:3000/api/getSocials`);
  const data = await result.json();
  const socials: Social[] = data.socials;

  return socials;
};
