import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { ConvertNumbers } from "../../../functions/ConvertNumber";

const Lists = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr
      className={`list-coins  ${
        coin.price_change_percentage_24h > 0 ? "green-grid" : "red-grid"
      }`}
    >
      <td
        className="image-td"

        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Tooltip title="Coin Logo" placement="bottom-start">
          <img src={coin.image} className="img-grid" />
        </Tooltip>
        <Tooltip title="Coin Name" placement="bottom-start">
          <div className="grid-coins">
            <p className="grid-symbol">{coin.symbol}</p>
            <p className="grid-name">{coin.name}</p>
          </div>
        </Tooltip>
      </td>
      <Tooltip title="Price Chnage in 24Hrs" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex chip-list">
            <p className="chip-price chip-price-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <TrendingUpRoundedIcon className="price-arrow-list" />
          </td>
        ) : (
          <td className="chip-flex">
            <p className="chip-price red-flex chip-price-list">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <TrendingDownRoundedIcon className="price-arrow-list price-red-arrow" />
          </td>
        )}
      </Tooltip>

      <Tooltip title="Current Price" placement="bottom-start">
        <td className="list-currency">
          <h3
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            $ {coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>

      <Tooltip title="Total Volume" placement="bottom-start">
        <td className="list-para">{coin.total_volume.toLocaleString()}</td>
      </Tooltip>

      <Tooltip title="Market Cap" placement="bottom-start">
        <td className="list-para">${coin.market_cap.toLocaleString()}</td>
      </Tooltip>

      <Tooltip title="Market Cap" placement="bottom-start">
        <td className="mobile-para">${ConvertNumbers(coin.market_cap)}</td>
      </Tooltip>
   
    </tr>
    </Link>
  );
};

export default Lists;
