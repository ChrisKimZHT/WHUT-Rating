import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SearchBox from './SearchBox.jsx';
import "./DetailMenu.scss";
import { service } from '../service/Service.js';

const DetailMenu = ({ shopId }) => {
  const [markStat, setMarkStat] = useState(false);

  useEffect(() => {
    service.shop.markStat(shopId)
      .then(res => {
        setMarkStat(res.data.markStat);
      })
      .catch(err => {
        console.log("/shop/markStat: " + err);
      });
  }, []);

  const handleMark = () => {
    if (markStat) {
      service.shop.unmark(shopId)
        .then(res => {
          setMarkStat(false);
        })
        .catch(err => {
          console.log("/shop/unmark: " + err);
        });
    } else {
      service.shop.mark(shopId)
        .then(res => {
          setMarkStat(true);
        })
        .catch(err => {
          console.log("/shop/mark: " + err);
        });
    }
  }

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
      <IconButton
        className="star-button"
        onClick={handleMark}
      >
        {markStat ? <StarIcon /> : <StarBorderIcon />}
      </IconButton >
    </Paper >
  );
}

export default DetailMenu;