import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Stack from '@mui/material/Stack';
import { service } from '../service/Service';
import "./UserBrief.scss";

const UserBrief = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    service.me.profile()
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log("/me/profile: " + err);
      });
  }, [])

  return (
    <Paper elevation={4} className="user-brief">
      <ListItemButton
        sx={{ padding: "8px 8px" }}
        onClick={1}
      >
        <ListItemAvatar>
          <Avatar
            src={userInfo.avatar}
            sx={{ width: 80, height: 80 }}
          >
          </Avatar>
        </ListItemAvatar>
        <Stack spacing={0} className="user-info">
          <Typography variant="h4" className="user-name">
            {userInfo.username}
          </Typography>
          <Typography variant="body1" className="region-name">
            {userInfo.regionName}
          </Typography>
        </Stack>
      </ListItemButton>
    </Paper>
  );
}

export default UserBrief;