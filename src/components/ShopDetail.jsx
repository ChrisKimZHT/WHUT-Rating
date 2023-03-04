import React, { useEffect, useState } from 'react';
import { service } from '../service/Service.js';
import "./ShopDetail.scss";

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

    </div>
  );
}

export default ShopDetail;