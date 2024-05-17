import React from "react";

function SearchBar () {
    return (
        <div className="flex flex-row justify-center gap-10 mt-[5vh]">
            <input className="rounded-lg pl-4 h-[5vh] w-[70%] border-2 border-blue-dark " type="text" placeholder="Search" />
            <div className="flex flex-row gap-5 items-center"> {/* Add 'items-center' class */}
                <p className="">Urutkan: </p>
                <select>
                    <option value="terbaru">Terbaru</option>
                    <option value="terlama">Terlama</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar;