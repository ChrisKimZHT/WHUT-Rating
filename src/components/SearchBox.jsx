import React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.scss';

const SearchBox = () => {
  return (
    <div className="search-box">
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