import React from "react";
import { AlbumItemProps } from "./album-items-props";
import { log } from "console";

const AlbumItemsComponent = ({ title, imgSrc, artists }: AlbumItemProps) => {
  return (
    <div className="mr-8 mb-4 hover:cursor-pointer hover:bg-[#404b516e] p-3">
      <img src={imgSrc} className="w-[150px] rounded-[8px]" />
      <p className="my-2">{title}</p>
      <p className="text-sm text-[#b3b3b3]">{artists}</p>
    </div>
  );
};

export default AlbumItemsComponent;
