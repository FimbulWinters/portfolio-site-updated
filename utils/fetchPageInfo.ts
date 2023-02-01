import { PageInfo } from "@/pages/api/typings";

export const fetchPageInfo = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await result.json();
  const info: PageInfo = data.pageInfo;

  return info;
};
