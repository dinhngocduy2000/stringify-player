import { PAGE_ENUM } from "@/libraries/enum/pages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const LibraryItemComponent = (props: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={PAGE_ENUM.ARTIST}
      className={
        "flex  my-2 p-2 items-center hover:bg-[#3b3838]" +
        (pathname === PAGE_ENUM.ARTIST ? " bg-[#3b3838]" : "")
      }
    >
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-507888554.jpg?resize=1200:*"
        className="h-[50px] w-[50px] rounded-[50%] mr-4 "
      />
      <div>
        <p className="text-[16px]">Akon</p>
        <p className="text-[13px] text-[#878787]">Artist</p>
      </div>
    </Link>
  );
};

export default LibraryItemComponent;
