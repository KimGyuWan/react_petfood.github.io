import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';
import Lysfooter from './component/yeonsoo/Lysfooter';
import Lysswiper from './component/yeonsoo/Lysswiper';

import './common.css';

import Item from './component/gyuwan/Item';
import Instagram from './component/gyuwan/Instagram';

import data from './data/data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Lysswiper datasrc={datainfo.slide_banner} />
    <Lyslinebanner datasrc={datainfo.linebanner} />
    <Lysfooter datasrc={datainfo.footer} />
    <Item dataMain={data.item_mainlist} dataList={data.item_listgroup} />
    <Instagram />
    <App />
  </BrowserRouter>
);


