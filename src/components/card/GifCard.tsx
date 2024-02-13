import { useState } from "react";
import { IGiphy } from "../../interfaces/Gif.interface";
import GifDetails from "./GifDetails";
import GifImage from "./GifImage";

interface IGifCardProps {
  item: IGiphy;
  randomColor: string;
}
const GifCard = ({ item, randomColor }: IGifCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <GifImage
        item={item}
        toggleDetails={toggleDetails}
        randomColor={randomColor}
      />
      <GifDetails item={item} expanded={expanded} />
    </>
  );
};

export default GifCard;
