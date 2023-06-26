import { MouseEventHandler } from "react";
import { SearchManufacturer, CustomFilter } from '@/components';

export interface CustomButtonProps{
    title: string;
    btnType?: "button" | "submit";
    // option: "?"
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
    textStlyes? : string;
    rightIcon?: string;
    isDisabled?:boolean;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    // take string and return nothing
    setManufacturer: (manufacturer: string) =>void;
}

export interface CustomFilterProps{
    title : string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}