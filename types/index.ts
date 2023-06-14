import { MouseEventHandler } from "react";
import { SearchManufacturer, CustomFilter } from '@/components';

export interface CustomButtonProps{
    title: string;
    btnType?: "button" | "submit";
    // option: "?"
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer: string;
    // take string and return nothing
    setManufacturer: (manufacturer: string) =>void;
}

export interface CustomFilterProps{
    title : string;
}