import { hot, setConfig } from 'react-hot-loader';
import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import {  Button } from 'antd';
import { remote } from 'electron';

import './styles/index.css';
import 'antd/dist/antd.css';

// import styles from './index.module.scss';
import store from './store/index';

const { BrowserView, BrowserWindow } = remote;

const App: FC = () => {
  useEffect(() => {
    console.log('BrowserWindow,BrowserView', BrowserWindow.getAllWindows(), new BrowserView());
  }, []);

  return <Provider store={store} >
    <div>
      <Button>
        test
      </Button>
    </div>
  </Provider> ;
};

setConfig({
  reloadHooks: false
});

export default hot(module)(App);