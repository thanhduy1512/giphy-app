import React, { Dispatch, SetStateAction } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IGiphy } from "../interfaces/Gif.interface";
import GifCard from "./card/GifCard";
import { arrColorName, colorObj } from "../constants/color.constant";

interface IGifsContainerProps {
  giphyRes: IGiphy[] | null;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const GifsContainer = ({ giphyRes, setCurrentPage }: IGifsContainerProps) => {
  return (
    <InfiniteScroll
      className="py-[10px] px-[80px]"
      style={{ overflow: "visible" }}
      dataLength={giphyRes?.length ?? 0} //This is important field to render the next data
      next={() => {
        setCurrentPage((prev) => {
          return prev + 1;
        });
      }}
      hasMore={true}
      loader={
        <div className="flex justify-center py-2">
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/199956/loading-loader.svg"
            alt="Loading icon"
          />
        </div>
      }
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 900: 4, 1000: 4 }}>
        <Masonry gutter="10px" style={{ width: "100%" }}>
          {giphyRes ? (
            giphyRes.length > 0 &&
            giphyRes.map((item, index) => {
              const randomIndex = Math.floor(
                Math.random() * arrColorName.length
              );
              const randomColor = colorObj[arrColorName[randomIndex]];
              return (
                <React.Fragment key={index + item.url}>
                  <GifCard item={item} randomColor={randomColor} />
                </React.Fragment>
              );
            })
          ) : (
            <></>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </InfiniteScroll>
  );
};

export default GifsContainer;
