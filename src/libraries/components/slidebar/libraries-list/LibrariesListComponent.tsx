import PlaylistIcon from "@/libraries/icon/svg/playlist-icon";
import PlusIcon from "@/libraries/icon/svg/plus-icon";
import RightArrow from "@/libraries/icon/svg/right-arrow";
import React from "react";
import CategoryItem from "./components/categories/category";
import SearchIcon from "@/libraries/icon/svg/search-icon";
import MenuIcon from "@/libraries/icon/svg/menu-icon";
import LibraryItemComponent from "./components/library-item/library-item-component";

type Props = {};

const LibrariesListComponent = (props: Props) => {
  const categories: string[] = ["Playlists", "Artists", "Albums"];
  return (
    <div className="bg-slight-gray  px-6 py-0 w-full max-w-full overflow-y-auto  flex-1 rounded-md">
      <div className="sticky top-0 bg-slight-gray py-[10px] pb-0 ">
        <div className="flex justify-between items-center">
          <PlaylistIcon className="flex fill-[#8f8f8f] hover:fill-white hover:cursor-pointer text-[#8f8f8f] hover:text-white " />
          <div className="flex justify-between  ">
            <PlusIcon />
            <RightArrow />
          </div>
        </div>
        <div className="flex w-full my-4">
          {categories.map((category) => (
            <CategoryItem key={category} content={category} />
          ))}
        </div>
        <div className="flex w-full justify-between">
          <div className="flex justify-center items-center p-[7px] hover:bg-[#292929] rounded-[50%] ">
            <SearchIcon
              height="25px"
              width="25px"
              className="opacity-70 hover:cursor-pointer"
            />
          </div>
          <div className="flex hover:cursor-pointer items-center">
            <p className="text-[#878787] text-[14px] mr-1 hover:text-white mb-[4px]  ">
              Recents
            </p>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        {Array.from({ length: 20 }).map((item) => (
          <LibraryItemComponent />
        ))}
      </div>
    </div>
  );
};

export default LibrariesListComponent;
