import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GlobalStyle } from './style';
import { FontGlobalStyle } from './static/iconfont/iconfont'
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <FontGlobalStyle/>
      <Header/>
    </Provider>
  );
}

export default App;
