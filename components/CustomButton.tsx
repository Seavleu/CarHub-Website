// Turn this into a client side , to fix the error
"user client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";


const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStlyes,
  rightIcon,
  isDisabled
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
      <span className={`flex-1 ${textStlyes}`}>{title}</span>

      {rightIcon &&  (
      <div className="relative w-6 h-6">
        <Image src={rightIcon} 
        alt="right icon/"
        fill
        className="object-contain" />
        </div>)}
    </button>
  );
};

export default CustomButton;
