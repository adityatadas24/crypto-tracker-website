import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Common/Loader/Loading";
import { ConvertObject } from "../functions/ConvertObject";
import Lists from "../components/Dashboard/List/Lists";
import Header from "../components/Common/Headers/Header";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { GetCoinData } from "../functions/GetCoinData";
import { GetCoinPrice } from "../functions/GetCoinPrice";
import LineChart from "../components/Coin/LineChart/LineChart";
import { ConvertDate } from "../functions/ConvertDate";
import SelectDays from "../components/Coin/SelectsDays/SelectDay";
import TogglePriceType from "../components/Coin/priceType/TogglePriceType";
import { SettingCoins } from "../functions/SettingCoins";

const CoinPage = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData , setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await GetCoinData(id);

    if (data) {
      ConvertObject(setCoinData, data);
      const price1 = await GetCoinPrice(id, days, priceType);

      if (price1.length > 0) {
        console.log("Whoooo");
        SettingCoins(setChartData,price1)
        setLoader(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setLoader(true)
    setDays(event.target.value);
    const price1 = await GetCoinPrice(id, event.target.value, priceType);

    if (price1.length > 0) {
      console.log("Whoooo");
      SettingCoins(setChartData,price1)
      setLoader(false);
    }
  };


  const handlePriceType = async(event, newPriceType) => {
    setLoader(true)
    setPriceType(newPriceType);
    const price = await GetCoinPrice(id, days, newPriceType);

    if (price.length > 0) {
      console.log("Whoooo");
      setChartData({
        labels: price.map((chart)=> ConvertDate(chart[0])),
        datasets: [
          {
            data:price.map((chart)=>chart[1]),
            borderColor: "#3a80e9",
            borderWidth:2,
            fill:true,
            tension:0.25,
            backgroundColor: "rgba(58, 128 , 233 ,0.1)",
            pointRadius:2,
          
    },],})
      setLoader(false);
    }
  };
  return (
    <div>
      <h1>
        <Header />
        {loader ? (
          <Loading />
        ) : (
          <div>
            <div className="coinpage-wrapper" style={{padding:'0rem 1rem'}}>
              <Lists coin={coinData} />
            </div>
            <div className="coinpage-wrapper">
              <SelectDays handleDaysChange={handleDaysChange} days={days}/>
              <TogglePriceType priceType={priceType} handlePriceType={handlePriceType}/>
            <LineChart chartData={chartData} priceType={priceType}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </div>
        )}
      </h1>
    </div>
  );
};

export default CoinPage;
