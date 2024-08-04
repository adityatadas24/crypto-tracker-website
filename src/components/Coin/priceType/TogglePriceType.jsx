import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css";
export default function TogglePriceType({ priceType, handlePriceType }) {
  return (
    <div className="price-type">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceType}
        sx={{
          border: "unset",
          borderColor: "var(--blue)",
          "& .Mui-selected": {
            color: "var(--white) !important",
          },
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)",
          },
          "& .MuiToogleButton-standard": {
            color: "var(--white) !important",
            border: "1px solid var(--blue) !important",
          },
        }}
      >
        <ToggleButton value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
