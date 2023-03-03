import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import './TabBar.scss';
import MyLink from './MyLink';

const TabBar = () => {
  const currentPath = useLocation().pathname;
  const [value, setValue] = useState(1);

  return (
    <Paper elevation={4} className="tabbar">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="首页" icon={<HomeIcon />} href="/list" LinkComponent={MyLink} />
        <BottomNavigationAction label="打分" icon={<StarIcon />} href="/rate" LinkComponent={MyLink} />
        <BottomNavigationAction label="我的" icon={<PersonIcon />} href="/user" LinkComponent={MyLink} />
      </BottomNavigation >
    </Paper>
  );
}

export default TabBar;