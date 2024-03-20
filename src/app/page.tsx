"use client";

import { useState } from "react";
import TopArtistComponent from "./home-components/top-artists/top-artist-components";
import HomeAlbumComponent from "./home-components/home-album-list/home-albums-component";
import HeaderComponent from "@/libraries/components/footer-player/header/header-component";
import CategoryItem from "@/libraries/components/footer-player/slidebar/libraries-list/components/categories/category";

export default function Home() {
  const musicCategory: string[] = ["All", "Music", "Podcasts"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="flex-1 h-full overflow-y-auto">
      <HeaderComponent />
      <div className=" p-5 bg-gradient-to-b from-green-400   via-[#121212] via-20% to-[#121212] ">
        <div className=" flex w-full mb-5">
          {musicCategory.map((category) => (
            <div onClick={() => setSelectedCategory(category)}>
              <CategoryItem
                backgroundColor={selectedCategory === category ? "white" : ""}
                color={selectedCategory === category ? "black" : "white"}
                content={category}
                key={category}
              />
            </div>
          ))}
        </div>
        <TopArtistComponent />
        <HomeAlbumComponent title="Made For Dinh Ngoc Duy" />
        <HomeAlbumComponent title="Your top mixes" />
        <HomeAlbumComponent title="Recently played" />
        <HomeAlbumComponent title="Recommended" />
      </div>
    </div>
  );
}
