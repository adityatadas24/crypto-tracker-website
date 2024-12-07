import React, { useEffect, useState } from "react";
import { Get100Coins } from "../../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
import "./style.css";
const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoinData, setAllCoinData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await Get100Coins();
    setAllCoinData(myCoins);
  };

  return (
    <div className="coin-flex">
      <div   style={{
         display:'flex' , gap:'10px', textAlign:'left'
        }}>
      <h3>Crypto 1</h3>
      <Select
        sx={{
          color: "var(--white) !important",
          border: "1px solid var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--white) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "1px solid var(--white) !important",
          },
        }}
       style={{width:'100px'}}
        value={crypto1}
        label="crypto 1"
        onChange={(e) => handleCoinChange(e, false)}
      >
        {allCoinData
          .filter((item) => item.id != crypto2)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      </div>
      
      <div style={{
         display:'flex',gap:'10px'
        }}>
      <h3>Crypto 2</h3>
      <Select
        sx={{
          color: "var(--white) !important",
          border: "1px solid var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "1px solid var(--grey) !important",
          },
        }}
        style={{width:'100px'}}
        value={crypto2}
        label="crypto 2"
        onChange={(e) => handleCoinChange(e, true)}
      >
        {allCoinData
          .filter((item) => item.id != crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      </div>
     
    </div>
  );
};

export default SelectCoins;
