import useSWR from "swr";
import axios from "axios";
import axiosInstance from "../api/core/axiosConfig";
import instance from "../api/core/Config";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

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

// --------POST--------
export const usePostPlace = (config) => {
  const postPlace = async () => {
    try {
      const { data } = await axiosInstance.post(
        `${BASE_URL}/api/v1/place`,
        config
      );
      return data;
    } catch (err) {
      console.log(err);
    }
    return;
  };

  return postPlace;
};

// --------PATCH--------
export const useUpdataPlace = (config, id) => {
  const updatePlace = async () => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/api/v1/place/${id}`,
        config
      );
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("useUpdataPlace");
    return res.data;
  };

  return updatePlace;
};

// --------------------디테일 데이터--------------------
export const useGetDetailPlace = (id) => {
  const fetcher = async (innerURL) => {
    const res = await axios.get(`${BASE_URL}${innerURL}`);
    console.log("useGetDetailPlace");
    return res.data;
  };
  const { data, error } = useSWR(`/api/v1/place/${id}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
// --------DELETE--------
export const useDeleteDetailPlace = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/api/v1/place/${id}`);
    console.log("useDeleteDetailPlace");
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// --------------------마이페이지 데이터--------------------

export const useGetMyInfo = () => {
  const fetcher = async () => {
    const access_Token = localStorage.getItem("access_Token") || "없음"
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_Token}`;
    const res = await axios.get(`${BASE_URL}/api/v1/mypage`);
    console.log("useGetMyInfo : ", res);
    return res.data;
  };
  const { data, error } = useSWR(`/api/v1/mypage`, fetcher);
  console.log("/api/v1/mypage", data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------PATCH--------
export const useUpdataMyInfo = (config) => {
  const updatePlace = async () => {
    try {
      const access_Token = localStorage.getItem("access_Token") || "없음"
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_Token}`;
      const { data } = await axios.patch(
        `${BASE_URL}/api/v1/mypage`,
        config
      );
      console.log("useUpdataMyInfo : ", data);
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("useUpdataMyInfo");
    return useUpdataMyInfo;
  };

  return updatePlace;
};

export const useGetMypageData = (url) => {
  const fetcher = async (innerURL) => {
    const access_Token = localStorage.getItem("access_Token") || "없음"
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_Token}`;
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

// --------DELETE--------
export const useDeleteMyPlace = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `${BASE_URL}/api/v1/place/${id}`
    );
    console.log("useDeleteMyPlace");
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// --------------------메인 추천 데이터--------------------
export const useGetRecommend = (url) => {
  const fetcher = async (innerURL) => {
    const res = await axios.get(`${BASE_URL}${innerURL}`);
    console.log("useGetRecommand");
    return res.data;
  };
  const { data, error } = useSWR(`${url}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------------------후기 데이터--------------------

export const useGetReply = (id) => {
  const fetcher = async () => {
    const res = await instance.get(`${BASE_URL}/api/v1/place/${id}/reply`);
    console.log("useGetReply");
    return res.data;
  };
  const { data, error } = useSWR(`/api/v1/place/${id}/reply`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------POST--------
export const usePostReply = (config, id) => {
  const postReply = async () => {
    try {
      const { data } = await axiosInstance.post(
        `${BASE_URL}/api/v1/place/${id}/reply`,
        config
      );
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("usePostReply");
    // return res.data;
  };

  return postReply;
};

// --------PATCH--------
export const useUpdataReply = (config, id, replyId) => {
  const updateReply = async () => {
    try {
      const { data } = await axiosInstance.patch(
        `${BASE_URL}/api/v1/place/${id}/reply/${replyId}`,
        config
      );
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("useUpdataReply");
    return res.data;
  };

  return updateReply;
};

// --------DELETE--------
export const useDeleteReply = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `${BASE_URL}/api/v1/reply/${id}`
    );
    console.log("useDeleteReply");
    return data;
  } catch (err) {
    return err;
  }
};

// --------------------지도 데이터--------------------
export const useGetMap = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/map`);
    console.log("useGetMap");
    return res.data;
  };
  const { data, error } = useSWR(`/map`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
