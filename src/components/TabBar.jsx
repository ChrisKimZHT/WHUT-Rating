import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TabBar.scss';

const TabBar = () => {
  const currentPath = useLocation().pathname;

  return (
    <div className="tabbar">
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <Link className={`nav-link ${currentPath.startsWith("/list") ? "active" : ""}`} to="/list">首页</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath.startsWith("/rate") ? "active" : ""}`} to="/rate">打分</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${currentPath.startsWith("/user") ? "active" : ""}`} to="/user">我的</Link>
        </li>
      </ul>
    </div>
  );
}

export default TabBar;