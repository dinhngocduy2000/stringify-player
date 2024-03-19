import SearchComponent from "@/libraries/components/search-page/search-page";
import { useAppSelector } from "@/libraries/redux/hook";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "Search",
};
const SearchPage = (props: Props) => {
  return (
    <div>
      <SearchComponent />
    </div>
  );
};

export default SearchPage;
