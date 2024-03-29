import { useCallback, useEffect, useState } from "react";

interface IHeaderProps {
  onSearch: (paramInput: string) => void;
}

const Header = ({ onSearch }: IHeaderProps) => {
  const [input, setInput] = useState("");

  const onSearchClick = useCallback(() => {
    onSearch(input);
  }, [input, onSearch]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSearchClick();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onSearchClick]);

  return (
    <div className="flex justify-center items-center gradient-bg-welcome sticky py-5 top-0 z-50 backdrop-blur-3xl backdrop-opacity-70 gap-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-spacing-1 w-[80%] border border-gray-700 focus:border-gray-500 focus:outline-none py-2 px-4 opacity-90 rounded-2xl bg-[#181918] text-white font-bold text-2xl"
        placeholder="Find your favourite GIFs"
        type="text"
      />
      <button
        onClick={() => onSearch(input)}
        className="py-2 px-4 opacity-90 rounded-2xl bg-[#181918] text-white font-bold text-2xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#181918] active:scale-95 active:bg-[#232923]"
      >
        Search
      </button>
    </div>
  );
};
export default Header;
