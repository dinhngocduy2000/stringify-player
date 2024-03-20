import React from "react";
import { HomeAlbumsProps } from "./home-albums-prop-type";
import AlbumItemsComponent from "./album-item/album-items-component";

const HomeAlbumComponent = ({ title }: HomeAlbumsProps) => {
  const albumList = [
    {
      title: "Daily Mix",
      artists: ["Akon", "JustaTee", "Keshi"],
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*",
    },
    {
      title: "Daily Mix",
      artists: ["Akon", "JustaTee", "Keshi"],
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*",
    },
    {
      title: "Daily Mix",
      artists: ["Akon", "JustaTee", "Keshi"],
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*",
    },
    {
      title: "Daily Mix",
      artists: ["Akon", "JustaTee", "Keshi"],
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*",
    },
    {
      title: "Daily Mix",
      artists: ["Akon", "JustaTee", "Keshi"],
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*",
    },
  ];
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <p className="text-xl font-bold ">{title}</p>
        <p className="text-sm text-[#b3b3b3] hover:underline font-semibold">
          Show all
        </p>
      </div>
      <div className="flex flex-wrap my-8 w-full">
        {albumList.map((album) => (
          <AlbumItemsComponent
            artists={album.artists.join(", ")}
            imgSrc={album.imgSrc}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeAlbumComponent;
