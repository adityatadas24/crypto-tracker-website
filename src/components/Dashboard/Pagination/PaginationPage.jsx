import React from 'react';
import "./style.css"
import Pagination from '@mui/material/Pagination';


export default function PaginationPage({page,handleChange}) {

  return (
    <div className='pagination'>
      {/* <Pagination count={9} page={page} onChange={(event,value)=>handleChange(event,value)} sx={{color:'var(--white) !important',
        "& .Mui-selected" :{
          backgroundColor:'var(--blue) !important',
          color:'#fff !important',
          borderColor:'var(--blue) !important',
        },
        "& .MuiPaginationItem-ellipsis":{
          border:"0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text" : {
          color:"var(--white) !important",
          border: "1px solid var(--grey) !important"
        }
      }}/> */}
       <Pagination count={9} defaultPage={5} boundaryCount={1} page={page} onChange={(event,value)=>handleChange(event,value)} color="primary" size='large' sx={{color:'var(--white) !important',
        "& .Mui-selected" :{
          backgroundColor:'var(--blue) !important',
          color:'#fff !important',
          borderColor:'var(--blue) !important',
        },
        "& .MuiPaginationItem-ellipsis":{
          border:"0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text" : {
          color:"var(--white) !important",
          border: "1px solid var(--grey) !important"
        }
      }}/>
    </div>
  );
}