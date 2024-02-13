import { Dispatch, SetStateAction, useState } from "react";
import GifsContainer from "../components/GifsContainer";
import Header from "../components/Header";
import useFetchGifs from "../hooks/useFetch";
import { IGiphy } from "../interfaces/Gif.interface";
import { API_TYPE } from "../types/api.type";

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [apiType, setApiType] = useState<API_TYPE>("trending");

  const [giphyRes, setGiphyRes] = useFetchGifs({
    apiType,
    searchKeyword,
    currentPage,
  }) as [IGiphy[] | null, Dispatch<SetStateAction<IGiphy[] | null>>];

  const onSearch = (paramInput: string) => {
    if (!paramInput && apiType === "trending") return;
    if (paramInput === searchKeyword && apiType === "search") return;

    setCurrentPage(1);
    setGiphyRes(null);
    setSearchKeyword(paramInput);

    if (paramInput === "") setApiType("trending");
    else setApiType("search");
  };

  return (
    <>
      <Header onSearch={onSearch} />

      <GifsContainer giphyRes={giphyRes} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
