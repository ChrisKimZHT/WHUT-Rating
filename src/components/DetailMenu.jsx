import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchBox from './SearchBox.jsx';
import "./DetailMenu.scss";

const DetailMenu = () => {
  return (
    <div className="detail-menu">
      <IconButton
        className="back-button"
        onClick={() => { window.history.back(); }}
      >
        <ArrowBackIosNewIcon />
      </IconButton >
      <SearchBox />
    </div >
  );
}

export default DetailMenu;