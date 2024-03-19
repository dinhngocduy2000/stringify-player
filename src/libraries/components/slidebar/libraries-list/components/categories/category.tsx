import React from "react";

type Props = {
  content: string;
  backgroundColor?: string;
  color?: string;
};

const CategoryItem = (props: Props) => {
  const { content, backgroundColor, color } = props;
  return (
    <p
      style={{ backgroundColor: backgroundColor, color: color }}
      className=" mr-2 px-5 py-[8px] bg-[#292929] rounded-xl hover:bg-[#3b3838] hover:cursor-pointer hover:text-[white] text-[13px] text-white"
    >
      {content}
    </p>
  );
};

export default CategoryItem;
