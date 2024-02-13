import { useState } from "react";
import LazyLoad from "react-lazy-load";
import { IGiphy } from "../../interfaces/Gif.interface";

interface IGifImageProps {
  item: IGiphy;
  toggleDetails: () => void;
  randomColor: string;
}
const GifImage = ({ item, toggleDetails, randomColor }: IGifImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadedImg = () => {
    setLoaded(true);
  };

  return (
    <div
      className={`rounded-md shadow-lg overflow-hidden`}
      style={{
        backgroundColor: loaded ? "" : randomColor,
      }}
    >
      <LazyLoad height={"auto"} width={"100%"} threshold={0.95} className="">
        <img
          src={item.images.downsized_medium.url}
          alt={item.title}
          width={item.images.downsized_medium.width}
          height={item.images.downsized_medium.height}
          className={`shadow-lg object-cover w-full h-auto transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoadedImg}
          onClick={toggleDetails}
        />
      </LazyLoad>
    </div>
  );
};

export default GifImage;
