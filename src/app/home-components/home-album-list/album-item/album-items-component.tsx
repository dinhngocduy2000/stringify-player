import React from "react";
import { AlbumItemProps } from "./album-items-props";

const AlbumItemsComponent = ({ title, imgSrc, artists }: AlbumItemProps) => {
  return (
    <div className="mr-8">
      <img src={imgSrc} className="w-[150px] rounded-[8px]" />
      <p className="my-2">{title}</p>
      <p className="text-sm text-[#b3b3b3]">{artists}</p>
    </div>
  );
};

export default AlbumItemsComponent;
