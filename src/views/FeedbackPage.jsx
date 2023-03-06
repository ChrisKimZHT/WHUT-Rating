import React from 'react';
import { useParams } from 'react-router';

const FeedbackPage = () => {
  const shopId = useParams().shopId;

  return (
    "FeedbackPage: #" + shopId
  );
}

export default FeedbackPage;