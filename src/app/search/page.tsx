"use client";
import { useAppSelector } from "@/libraries/redux/hook";
import { Metadata } from "next";
import React from "react";

type Props = {};

const SearchPage = (props: Props) => {
  const counter = useAppSelector((state) => state.counter);
  return <div>{counter}</div>;
};

export default SearchPage;
