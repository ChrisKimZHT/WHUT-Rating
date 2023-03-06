import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./RateMenu.scss";

const RateMenu = ({ search, setSearch }) => {
  return (
    <Paper
      className="rate-menu"
      elevation={2}
      square={true}
    >
      <InputBase
        className="search-box"
        placeholder="搜索商家"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper >
  );
}

export default RateMenu;