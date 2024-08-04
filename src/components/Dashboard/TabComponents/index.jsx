import React, { useState } from "react";
// import Box from '@mui/material/Box';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { color } from "framer-motion";
// import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grids/Grid";
import "./style.css"
import Lists from "../List/Lists";
export default function TabComponents({ coin }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    fontWeight: "600",
    fontSize: "1.2rem",
    width: "50vw",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {coin.map((coin, i) => (
            
               <Grid coin={coin} key={i}/>
           
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="table-list">
            {coin.map((coin, i) => (
             <Lists coin={coin} key={i}/>
            ))}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
