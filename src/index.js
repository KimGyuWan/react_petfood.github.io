import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';
import Lysfooter from './component/yeonsoo/Lysfooter';
import Lysswiper from './component/yeonsoo/Lysswiper';

//data
import datainfo from './data/data.json'


import Item from './component/gyuwan/Iitem';
import Instagram from './component/gyuwan/Instagram'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Lysswiper datasrc={datainfo.slide_banner} />
    <Lyslinebanner datasrc={datainfo.linebanner} />
    <Lysfooter datasrc={datainfo.footer} />
  </BrowserRouter>
);


