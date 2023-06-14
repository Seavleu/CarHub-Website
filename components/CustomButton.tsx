// Turn this into a client side , to fix the error
"user client";

import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      // two states
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}
      `}
      //  call back function . client side
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
