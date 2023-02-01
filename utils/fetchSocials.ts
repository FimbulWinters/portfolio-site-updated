import { Social } from "@/pages/api/typings";

export const fetchSocials = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
  );
  const data = await result.json();
  const socials: Social[] = data.socials;

  return socials;
};
