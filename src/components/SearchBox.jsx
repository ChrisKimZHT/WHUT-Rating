import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PinDropIcon from '@mui/icons-material/PinDrop';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div className="search-box">
      <IconButton
        className="position-btn"
      >
        <PinDropIcon />
      </IconButton >
      <Button
        className="search-btn"
        variant="outlined"
        startIcon={<SearchIcon />}
      >
        搜索
      </Button>
    </div>
  );
}

export default SearchBox;