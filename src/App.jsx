import React from 'react';
import TabBar from './components/TabBar';
import MyRouter from './router/MyRouter';

const App = () => {
  return (
    <div className="app">
      <MyRouter />
      <TabBar />
    </div>
  );
}

export default App;