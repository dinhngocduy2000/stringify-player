import BackIcon from "@/libraries/icon/svg/back-icon";
import NextIcon from "@/libraries/icon/svg/next-icon";
import { Button } from "@mui/material";
import React from "react";
import "./header-component.scss";
type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <div className="w-100% flex justify-between ">
      <div className="flex">
        <div className="h-9 w-9 flex justify-center items-center rounded-[50%] bg-black  mr-3 hover:cursor-pointer">
          <BackIcon />
        </div>
        <div className="h-9 w-9 flex justify-center items-center rounded-[50%] bg-black hover:cursor-pointer">
          <NextIcon />
        </div>
      </div>
      <div className="flex">
        <Button
          className="header-btn"
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          Explore Premium
        </Button>
        <Button
          className="header-btn"
          style={{
            backgroundColor: "black",
            color: "white",
            margin: "0 2rem",
          }}
        >
          Install App
        </Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
