// since it is a client server side we need this line
"use client";

import Image from "next/image";
import { SearchManufacturer } from "@/components";
import { useState } from "react";
import { manufacturers } from "../constants/index";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherclasses }: { otherclasses: string }) => (
  <button type="submit" className={`-ml-3 Z-10 $ {otherclasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
); 
 
const SearchBar = () => {
  const [searchmanufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    // refresh once submit the form
    e.preventDefault();

    if (searchmanufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    // update the search URL function
    // http://localhost:3000 => http://localhost:3000/?model=q5&manufacturer=buick

    updateSearchParams(
      searchModel.toLowerCase(),
      searchmanufacturer.toLowerCase()
    );
  };

  
  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchmanufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherclasses="max-sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherclasses="sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
