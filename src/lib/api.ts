import axios from "axios";

export const getApi = async (resources: any, query?: any) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API}${resources}?q=${query}&sfw`
  );
  return result;
};
