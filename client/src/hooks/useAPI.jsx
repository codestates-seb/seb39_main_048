import useSWR from "swr";
import axios from "axios";

const BASE_URL = `http://localhost:3001`;

export const useGetPlace = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/place`);
    console.log("useGetPlace");
    return res.data;
  };
  const { data, error } = useSWR("/place", fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------------------마이페이지 데이터--------------------

export const useGetMyPlace = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/myplace`);
    console.log("useGetMyPlace");
    return res.data;
  };
  const { data, error } = useSWR(`/myplace`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};


export const useGetBookMark = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/bookmark`);
    console.log("useGetBookMark");
    return res.data;
  };
  const { data, error } = useSWR(`/bookmark`, fetcher);

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
