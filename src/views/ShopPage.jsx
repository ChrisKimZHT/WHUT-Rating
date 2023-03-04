import React from 'react';
import { useParams } from 'react-router';

const ShopPage = () => {
  const param = useParams().shopId;
  return (
    param
  );
}

export default ShopPage;