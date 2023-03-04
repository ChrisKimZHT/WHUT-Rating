import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { service } from '../service/Service.js';
import "./ShopDetail.scss";
import DetailMenu from './DetailMenu.jsx';

const ShopDetail = ({ shopId }) => {
  const [shopData, setShopData] = useState({});

  useEffect(() => {
    const refreshShopData = async () => {
      await service.shop.detail(shopId)
        .then(res => {
          setShopData(res.data);
        })
        .catch(err => {
          console.log("/shop/detail: " + err);
        });
    };
    refreshShopData();
  }, [shopId]);

  return (
    <div className="shop-detail">
      <Paper
        className="paper-area"
        elevation={2}
        square={true}
      >
        <DetailMenu />
      </Paper>
    </div>
  );
}

export default ShopDetail;