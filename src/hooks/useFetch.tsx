import { useCallback, useEffect, useState } from "react";
import { IGiphy } from "../interfaces/Gif.interface";
import axiosInstance from "../utils/api";

interface IUseFetchGifsProps {
  apiType: string;
  searchKeyword?: string;
  currentPage?: number;
}

const useFetchGifs = ({
  apiType,
  searchKeyword,
  currentPage = 1,
}: IUseFetchGifsProps) => {
  const [giphyRes, setGiphyRes] = useState<IGiphy[] | null>(null);
  const GIFS_PER_PAGE = 40;

  const fetchTrendingGifs = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get(`gifs/trending`, {
        params: {
          limit: GIFS_PER_PAGE,
          offset: (currentPage - 1) * GIFS_PER_PAGE,
        },
      });

      if (giphyRes && giphyRes.length > 0) {
        setGiphyRes([...giphyRes, ...data.data]);
      } else {
        setGiphyRes(data.data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [currentPage]);

  const fetchSearchGifs = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get(`gifs/search`, {
        params: {
          q: searchKeyword,
          limit: GIFS_PER_PAGE,
          offset: (currentPage - 1) * GIFS_PER_PAGE,
        },
      });

      if (giphyRes && giphyRes.length > 0) {
        setGiphyRes([...giphyRes, ...data.data]);
      } else {
        setGiphyRes(data.data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }, [searchKeyword, currentPage]);

  useEffect(() => {
    if (apiType === "trending") fetchTrendingGifs();
    if (apiType === "search" && searchKeyword) fetchSearchGifs();
  }, [fetchSearchGifs, fetchTrendingGifs, searchKeyword, apiType]);

  return [giphyRes, setGiphyRes];
};

export default useFetchGifs;
