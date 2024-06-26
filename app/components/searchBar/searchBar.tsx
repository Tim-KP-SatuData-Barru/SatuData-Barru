import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
  onSortChange: (value: string) => void;
}

function SearchBar({ onSearch, onSortChange }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("terbaru");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOrder(value);
    onSortChange(value);
  };

  return (
    <div className="flex flex-row justify-center gap-10 mt-[5vh] px-14">
      <input
        className="rounded-lg pl-4 h-[5vh] w-[70%] border-2 border-blue-dark"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="flex flex-row gap-5 items-center">
        <p className="">Urutkan: </p>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="terbaru">Terbaru</option>
          <option value="terlama">Terlama</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
