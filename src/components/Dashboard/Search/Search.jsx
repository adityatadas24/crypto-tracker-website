import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './style.css'
const Search = ({ search, onSearch }) => {
    return (
        <div className='search-input'>
            <SearchRoundedIcon />
            <input type="text" className='inputs' value={search} onChange={onSearch} />
        </div>
    )
}

export default Search
