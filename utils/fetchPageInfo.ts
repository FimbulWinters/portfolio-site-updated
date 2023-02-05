import { PageInfo } from "@/pages/api/typings";

export const fetchPageInfo = async () => {
  const result = await fetch(`http://localhost:3000/api/getPageInfo`);
  const data = await result.json();
  const info: PageInfo = data.pageInfo;

  return info;
};
