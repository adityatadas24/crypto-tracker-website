import React, { useEffect, useState } from "react";
import Header from "../components/Common/Headers/Header";
import SelectCoins from "../components/compare/SelectCoin/SelectCoins";
import SelectDays from "../components/Coin/SelectsDays/SelectDay";
import { GetCoinPrice } from "../functions/GetCoinPrice";
import { ConvertObject } from "../functions/ConvertObject";
import { GetCoinData } from "../functions/GetCoinData";
import Loading from "../components/Common/Loader/Loading";
import Lists from "../components/Dashboard/List/Lists";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { SettingCoins } from "../functions/SettingCoins";
import LineChart from "../components/Coin/LineChart/LineChart";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [loader, setLoader] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (e) => {
    setLoader(true);
    setDays(e.target.value);
    const price1 = await GetCoinPrice(crypto1, e.target.value, priceType);
    const price2 = await GetCoinPrice(crypto2, e.target.value, priceType);
    SettingCoins(setChartData, price1, price2);
    setLoader(false);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoader(true);
    const data1 = await GetCoinData(crypto1);
    const data2 = await GetCoinData(crypto2);
    if (data1) {
      ConvertObject(setCrypto1Data, data1);
    }
    if (data2) {
      ConvertObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const price1 = await GetCoinPrice(crypto1, days, priceType);
      const price2 = await GetCoinPrice(crypto2, days, priceType);
      console.log("fetch", price1, price2);
      SettingCoins(setChartData, price1, price2);
      setLoader(false);
    }
  }

  const handleCoinChange = async (e, myCoin2) => {
    setLoader(true);
    if (myCoin2) {
      setCrypto2(e.target.value);
      const data = await GetCoinData(e.target.value);
      ConvertObject(setCrypto2Data, data);
      const price1 = await GetCoinPrice(crypto1, days, priceType);
      const price2 = await GetCoinPrice(crypto2, days, priceType);
      if (price1.length > 0 && price2.length > 0) {
        console.log("fetch", price1, price2);
        setLoader(false);
      }
    } else {
      setCrypto1(e.target.value);
      const data = await GetCoinData(e.target.value);

      ConvertObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      <Header />
      {loader ? (
        <Loading />
      ) : (
        <>
        <div className="compare-coin">
        <SelectCoins
            crypto1={crypto1}
            crypto2={crypto2}
            handleCoinChange={handleCoinChange}
          />
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
        </div>

          <div className="coinpage-wrapper" style={{ padding: "0rem 1rem" }}>
            <Lists coin={crypto1Data} />

          </div >
          <div className="coinpage-wrapper" style={{ padding: "0rem 1rem" }}>
          <Lists coin={crypto2Data} />

          </div>
          <div className="coinpage-wrapper" style={{ padding: "0rem 1rem" }}>
            <LineChart
            chartData={chartData}
            priceType={priceType}
            multiAxis={true}
          />
          </div>
         

          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default ComparePage;
