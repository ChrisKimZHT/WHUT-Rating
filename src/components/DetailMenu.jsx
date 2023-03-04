import React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchBox from './SearchBox.jsx';
import "./DetailMenu.scss";

const DetailMenu = () => {
  return (
    <Paper
      className="detail-menu"
      elevation={2}
      square={true}
    >
      <IconButton
        className="back-button"
        onClick={() => { window.history.back(); }}
      >
        <ArrowBackIosNewIcon />
      </IconButton >
      <SearchBox />
    </Paper>
  );
}

export default DetailMenu;