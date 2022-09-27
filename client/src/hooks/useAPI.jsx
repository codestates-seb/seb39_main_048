import useSWR from "swr";
import axios from "axios";

const BASE_URL = `http://localhost:3001`;


// --------------------목록 데이터--------------------
export const useGetPlace = (url) => {
  const fetcher = async (innerURL) => {
    const res = await axios.get(`${BASE_URL}${innerURL}`);
    console.log("url", url);
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


// --------------------마이페이지 데이터--------------------

export const useGetMypageData = (url) => {
  const fetcher = async (innerURL) => {
    const res = await axios.get(`${BASE_URL}${innerURL}`);
    console.log("url", url);
    console.log("useGetMypageData");
    return res.data;
  };
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------------------검색 데이터--------------------

export const useGetSearch = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/search`);
    console.log("useGetSearch");
    return res.data;
  };
  const { data, error } = useSWR(`/search`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------------------메인 추천 데이터--------------------

export const useGetRecommend = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/recommend`);
    console.log("useGetRecommand");
    return res.data;
  };
  const { data, error } = useSWR(`/recommend`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};


