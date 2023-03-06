import React from 'react';
import { useParams } from 'react-router';

const MakeRatePage = () => {
  const shopId = useParams().shopId;

  return (
    "MakeRatePage: #" + shopId
  );
}

export default MakeRatePage;