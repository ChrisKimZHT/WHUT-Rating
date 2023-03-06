import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import BugReportIcon from '@mui/icons-material/BugReport';
import "./FunctionList.scss";

const FunctionList = ({ type }) => {
  if (type === 1) {
    return (
      <List>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <StarBorderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="我的收藏" secondary="" />
        </ListItemButton>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="账号信息" secondary="" />
        </ListItemButton>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <LogoutIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="登出账号" secondary="" />
        </ListItemButton>
      </List>
    );
  } else if (type === 2) {
    return (
      <List>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <InfoIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="关于软件" secondary="" />
        </ListItemButton>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <BugReportIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="问题报告" secondary="" />
        </ListItemButton>
      </List>
    );
  } else {
    return <></>;
  }
}

export default FunctionList;