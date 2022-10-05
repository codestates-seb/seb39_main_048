import useSWR from "swr";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

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
      const { data } = await axios.post(`${BASE_URL}/place`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("usePostPlace");
    return res.data;
  };

  return postPlace;
};

// --------PATCH--------
export const useUpdataPlace = (config, id) => {
  const updatePlace = async () => {
    try {
      const { data } = await axios.patch(`${BASE_URL}/place/${id}`, config);
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
  const { data, error } = useSWR(`/place/${id}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
// --------DELETE--------
export const useDeleteDetailPlace = async (id) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/place/${id}`);
    console.log("useDeleteDetailPlace");
    return data;
  } catch (error) {
    return error.response.data;
  }
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
    const res = await axios.get(`${BASE_URL}/place/${id}/search`);
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

// --------------------후기 데이터--------------------

export const useGetReply = () => {
  const fetcher = async () => {
    const res = await axios.get(`${BASE_URL}/reply`);
    console.log("useGetReply");
    return res.data;
  };
  const { data, error } = useSWR(`/reply`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// --------POST--------
export const usePostReply = (config) => {
  const postReply = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/reply`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
    console.log("usePostReply");
    return res.data;
  };

  return postReply;
};

// --------PATCH--------
export const useUpdataReply = (config) => {
  const updateReply = async () => {
    try {
      const { data } = await axios.patch(`${BASE_URL}/reply`, config);
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
export const useDeleteReply = async () => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/reply`);
    console.log("useDeleteReply");
    return data;
  } catch (err) {
    return err.response.data;
  }
};
