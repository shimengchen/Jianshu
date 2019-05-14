import React from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { FontGlobalStyle } from './static/iconfont/iconfont'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <FontGlobalStyle/>
      <Header/>
    </div>
  );
}

export default App;
