import { useEffect, useRef, useState } from "react";
import { IGiphy } from "../../interfaces/Gif.interface";

interface IGifDetailsProps {
  item: IGiphy;
  expanded: boolean;
}
const GifDetails = ({ item, expanded }: IGifDetailsProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the content
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [expanded]);

  return (
    <div
      className={`overflow-hidden transition-all duration-300 rounded-md ${
        expanded ? "ease-out transform scale-100" : "ease-in transform scale-0"
      } bg-black text-white`}
      style={{ maxHeight: expanded ? `${contentHeight}px` : "0" }}
    >
      <div ref={contentRef}>
        <h3 className="title">
          <b>Title: </b>
          {item.title}
        </h3>
        <h3 className="title">
          <b>Rating: </b>
          {item.rating.toUpperCase()}
        </h3>
        <h3 className="title">
          <b>Username: </b>
          {item.user?.username ?? "unknown"}
        </h3>
      </div>
    </div>
  );
};

export default GifDetails;
