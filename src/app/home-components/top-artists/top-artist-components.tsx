import React from "react";

type Props = {};

const TopArtistComponent = (props: Props) => {
  const topArtists: string[] = [
    "Daily Mix 3",
    "Liked Songs",
    "LilyPichu",
    "Akon",
  ];
  return (
    <div className="flex w-full">
      {topArtists.map((artist) => (
        <div className="flex flex-wrap flex-1 items-center mr-4 bg-[#3f494fde] hover:cursor-pointer hover:bg-[#3a3b3c] rounded-md">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*"
            className="h-[60px] w-[60px]  mr-4 rounded-s-md "
          />
          <p>{artist}</p>
        </div>
      ))}
    </div>
  );
};

export default TopArtistComponent;
