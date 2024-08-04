import React from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

const Grid = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h > 0 ? "green-grid" : "red-grid"}`}>
      <div className='flex-info'>
        <img src={coin.image} className='img-grid' />
        <div className='grid-coins'>
            <p className='grid-symbol'>{coin.symbol}</p>
            <p className='grid-name'>{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
      <div className='chip-flex'>
        <p className='chip-price'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <TrendingUpRoundedIcon className='price-arrow arrow'/>
      </div>) : (
        <div className='chip-flex'>
        <p className='chip-price red-flex'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <TrendingDownRoundedIcon className='price-arrow price-red-arrow arrow'/>
      </div>
      )}

      <div className='grid-currency'>
        <h3 style={{color : coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}}>$ {coin.current_price.toLocaleString()}</h3>
        <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
    </Link>
  )
}

export default Grid
