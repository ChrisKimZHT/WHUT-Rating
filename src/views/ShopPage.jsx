import React from 'react';
import { useParams } from 'react-router';
import ShopDetail from '../components/ShopDetail';
import DetailMenu from '../components/DetailMenu';

const ShopPage = () => {
  const shopId = useParams().shopId;
  return (
    <React.Fragment>
      <DetailMenu />
      <ShopDetail
        shopId={shopId}
      />
    </React.Fragment>
  );
}

export default ShopPage;