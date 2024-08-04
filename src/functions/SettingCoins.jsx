import { ConvertDate } from "./ConvertDate";

export const SettingCoins = (setChartData,price1,price2)=>{
    if(price2){
        setChartData({
            labels: price2.map((chart) => ConvertDate(chart[0])),
            datasets: [
              {
                label:"crypto1",
                data: price2.map((chart) => chart[1]),
                borderColor: "#61c96f",
                borderWidth: 2,
                fill: false,
                tension: 0.25,
                // backgroundColor: "rgba(58, 128 , 233 ,0.1)",
                pointRadius: 2,
                yAxisID:"crypto1",
              },
              {
                label:"crypto2",
                data: price1.map((chart) => chart[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: false,
                tension: 0.25,
                // backgroundColor: "rgba(58, 128 , 233 ,0.1)",
                pointRadius: 2,
                yAxisID:"crypto2",
              },
            ],
          });
    }else{
        setChartData({
            labels: price1.map((chart) => ConvertDate(chart[0])),
            datasets: [
              {
                data: price1.map((chart) => chart[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(58, 128 , 233 ,0.1)",
                pointRadius: 2,
                // yAxisID:"crypto1",
              },
            ],
          });
    }
    

   
}