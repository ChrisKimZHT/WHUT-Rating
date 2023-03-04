import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import ListPage from '../views/ListPage';
import RatePage from '../views/RatePage';
import ShopPage from '../views/ShopPage';
import UserPage from '../views/UserPage';

const MyRouter = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={"list"} />}></Route>
      <Route path="/list" element={<ListPage />} />
      <Route path="/rate" element={<RatePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/shop/:shopId" element={<ShopPage />} />
      <Route path="*" element={<Navigate to={"list"} />} />
    </Routes>
  );
}

export default MyRouter;