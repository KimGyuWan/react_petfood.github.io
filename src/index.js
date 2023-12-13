import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './common.css';

import Item from './component/gyuwan/Item';
import Instagram from './component/gyuwan/Instagram';

import data from './data/data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Item dataMain={data.item_mainlist} dataList={data.item_listgroup} />
    <Instagram />
  </>
);


