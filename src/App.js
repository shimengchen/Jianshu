import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import { GlobalStyle } from './style';
import { FontGlobalStyle } from './static/iconfont/iconfont'
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle/>
        <FontGlobalStyle/>
        <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}/>
              <Route path='/detail' exact component={Detail}/>
            </div>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
