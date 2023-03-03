import React from 'react';
import TabBar from './components/TabBar';
import MyRouter from './router/MyRouter';
import './App.scss';

const App = () => {
  return (
    <React.Fragment>
      <MyRouter />
      <TabBar />
    </React.Fragment>
  );
}

export default App;