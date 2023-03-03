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
  const path2value = (path) => {
    if (path.startsWith("/list")) {
      return 0;
    } else if (path.startsWith("/rate")) {
      return 1;
    } else if (path.startsWith("/user")) {
      return 2;
    } else {
      return 0;
    }
  }
  const [value, setValue] = useState(path2value(currentPath));

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