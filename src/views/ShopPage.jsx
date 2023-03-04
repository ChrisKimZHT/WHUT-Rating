import React from 'react';
import { useParams } from 'react-router';
import ShopDetail from '../components/ShopDetail';

const ShopPage = () => {
  const shopId = useParams().shopId;
  return (
    <ShopDetail
      shopId={shopId}
    />
  );
}

export default ShopPage;