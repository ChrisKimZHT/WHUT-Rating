import React from 'react';
import FunctionList from '../components/FunctionList';
import UserBrief from '../components/UserBrief';
import Paper from '@mui/material/Paper';

const UserPage = () => {
  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{ margin: "12px" }}
      >
        <UserBrief />
      </Paper>
      <Paper
        elevation={3}
        sx={{ margin: "12px" }}
      >
        <FunctionList type={1} />
      </Paper>
      <Paper
        elevation={3}
        sx={{ margin: "12px" }}
      >
        <FunctionList type={2} />
      </Paper>
    </React.Fragment>
  );
}

export default UserPage;