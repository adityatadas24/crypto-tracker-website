import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./style.css"
export default function SelectDays({handleDaysChange, days}) {


  return (
    <div className='selects-days'>
   <p style={{fontSize:'15px'}}>Price change in</p>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
        sx={{color:'var(--white) !important',
            border : "1px solid var(--white)",
            "& .Mui-selected" :{
              backgroundColor:'var(--blue) !important',
              color:'#fff !important',
              
            },
            "& .MuiPaginationItem-ellipsis":{
              border:"0px solid var(--white) !important",
            },
            "& .MuiPaginationItem-text" : {
              color:"var(--white) !important",
              border: "1px solid var(--white) !important"
            }
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={365}>365 days</MenuItem>


        </Select>
  
    </div>
  );
}
