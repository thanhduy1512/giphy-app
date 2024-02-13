import { useState } from "react";

interface IHeaderProps {
  onSearch: (paramInput: string) => void;
}

const Header = ({ onSearch }: IHeaderProps) => {
  const [input, setInput] = useState("");
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // value === enter
    console.log(e.target.value);

    if (e.target.value === "Enter") {
      return onSearchClick();
    }
    return setInput(e.target.value);
  };

  const onSearchClick = () => {
    onSearch(input);
  };

  return (
    <div className="flex justify-center items-center gradient-bg-welcome sticky py-5 top-0 z-50 backdrop-blur-3xl backdrop-opacity-70 gap-4">
      <input
        value={input}
        onChange={onInputChange}
        className="border-spacing-1 w-[80%] border border-gray-700 focus:border-gray-500 focus:outline-none py-2 px-4 opacity-90 rounded-2xl bg-[#181918] text-white font-bold text-2xl"
        placeholder="Find your favourite GIFs"
        type="text"
      />
      <button
        onClick={() => onSearch(input)}
        className="py-2 px-4 opacity-90 rounded-2xl bg-[#181918] text-white font-bold text-2xl"
      >
        Search
      </button>
    </div>
  );
};
export default Header;
