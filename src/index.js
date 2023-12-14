import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';
import Lysfooter from './component/yeonsoo/Lysfooter';
import Lysswiper from './component/yeonsoo/Lysswiper';

// gyuwan
import Item from './component/gyuwan/Item';
import Instagram from './component/gyuwan/Instagram';

// dongmin
import Brand from './component/dongmin/Brand';

import datainfo from './data/data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Lysswiper />
    <Lyslinebanner />
    <Brand data={datainfo}></Brand>
    <Item />
    <Instagram />
    <Lysfooter />
  </BrowserRouter>
);


