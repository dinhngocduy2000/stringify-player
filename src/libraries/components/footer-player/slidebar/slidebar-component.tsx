"use client";

import React from "react";
import NavigationComponent from "./navigation/navigation-component";
import LibrariesListComponent from "./libraries-list/LibrariesListComponent";
import { useAppSelector } from "@/libraries/redux/hook";
import "./slidebar-component.scss";

type Props = {};

const SlidebarComponent = (props: Props) => {
  const counter = useAppSelector((state) => state.counter);
  console.log(counter);

  return (
    <div className="min-w-[300px] relative flex flex-col max-w-[410px] flex-1 mr-2">
      <NavigationComponent />
      <LibrariesListComponent />
    </div>
  );
};

export default SlidebarComponent;
