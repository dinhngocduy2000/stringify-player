"use client";
import { useAppSelector } from "@/libraries/redux/hook";
import React from "react";

type Props = {};

const SearchComponent = (props: Props) => {
  const counter = useAppSelector((state) => state.counter);
  return <div>{counter}</div>;
};

export default SearchComponent;
