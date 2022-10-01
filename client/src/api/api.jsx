import instance from "./core/index";
import useSWR from "swr";

export const useGetPlace = (url) => {
  const fetcher = async (innerURL) => {
    const res = await instance({ url: `${innerURL}`, method: "get" });
    console.log("useGetPlace");
    return res.data;
  };
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePostPlace = (config) => {
  const postPlace = async () => {
    try {
      const { data } = await instance({
        method: "post",
        url: "/place",
        config,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("usePostPlace");
    return res.data;
  };

  return postPlace;
};
