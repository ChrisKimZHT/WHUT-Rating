import React, { useEffect, useState } from 'react';
import { service } from '../service/Service.js';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./ShopDetail.scss";

const ShopDetail = ({ shopId }) => {
  const [shopData, setShopData] = useState({});

  useEffect(() => {
    const refreshShopData = async () => {
      await service.shop.detail(shopId)
        .then(res => {
          setShopData(res.data.detail);
        })
        .catch(err => {
          console.log("/shop/detail: " + err);
        });
    };
    refreshShopData();
  }, [shopId]);

  if (!shopData) {
    return (
      <div className="shop-detail loading">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="shop-detail">
      <div>
        <Typography variant="h5" gutterBottom>
          {shopData.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {"地址：" + shopData.address}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {"营业时间：" + shopData.time}
        </Typography>
      </div>
      <Divider className="divider" />
      <div className="info">
        <Typography
          variant="h6"
          gutterBottom
        >
          简介
        </Typography>
        <Typography
          variant="body1"
          className="description"
        >
          {shopData.description}
        </Typography>
      </div>
      <Divider className="divider" />
      <div className="ratings">
        <Typography variant="h6" gutterBottom>评级</Typography>
        {shopData.ratings?.map((rating, index) => {
          return (
            <div className="rating" key={index}>
              <div className="rating-name">{rating.name}</div>
              <Rating precision={0.5} value={rating.rating} />
            </div>
          );
        })}
      </div>
      <Divider className="divider" />
      <div className="tags">
        <Typography variant="h6" gutterBottom>标签</Typography>
        {shopData.tags?.map((tag, index) => {
          return (
            <Chip
              className="tag"
              key={index}
              label={tag}
            />
          );
        })}
      </div>
      <Divider className="divider" />
      <ImageList cols={2}>
        <ImageListItem>
          <img
            src={shopData.image}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default ShopDetail;