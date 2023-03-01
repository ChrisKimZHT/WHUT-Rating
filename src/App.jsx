import React from 'react';
import TabBar from './components/TabBar';
import MyRouter from './router/MyRouter';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <MyRouter />
      </div>
      <TabBar />
    </div>
  );
}

export default App;