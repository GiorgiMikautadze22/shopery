import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Products } from "../Interface";

function valuetext(value: number) {
  return `${value}`;
}

interface Props {
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  lowestPrice: number;
  highestPrice: number;
  filteredProducts: Products[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

export default function RangeSlider({
  value,
  setValue,
  lowestPrice,
  highestPrice,
  filteredProducts,
  setFilteredProducts,
}: Props) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="primary"
        max={highestPrice}
        min={lowestPrice}
      />
    </Box>
  );
}
