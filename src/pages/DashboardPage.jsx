import React, { useEffect, useState } from "react";
import Header from "../components/Common/Headers/Header";
import TabComponents from "../components/Dashboard/TabComponents";
// import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import PaginationPage from "../components/Dashboard/Pagination/PaginationPage";
import Loading from "../components/Common/Loader/Loading";
import BackTo from "../components/Common/BackToTop/BackTo";
import { Get100Coins } from "../functions/get100Coins";

const DashboardPage = () => {
  const [coin, setCoin] = useState([]);
  const [paginateCoin, setpaginateCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    setPage(value);
    var paginateIndex = (value - 1) * 12;
    setpaginateCoin(coin.slice(paginateIndex, paginateIndex + 12));
  };

  useEffect(() => {
    // setLoading(true);
  getData();
  }, []);


  const getData = async() => {
    const myCoins = await Get100Coins();
    if (myCoins) {
      setCoin(myCoins);
      setpaginateCoin(myCoins.slice(0, 12));
      setLoading(false);
    }

  }

  function onSearch(e) {
    setSearch(e.target.value);
  }

  const filteredInput = coin.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  // setCoin(filteredInput)

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Search search={search} onSearch={onSearch} />
          <TabComponents coin={search ? filteredInput : paginateCoin} />
          {!search && (
            <PaginationPage page={page} handleChange={handleChange} />
          )}
        </div>
      )}
      <BackTo />
    </>
  );
};

export default DashboardPage;
