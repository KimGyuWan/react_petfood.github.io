import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';
import datainfo from "./data/data.json"
import Header from './component/joonsung/Header';

import Lysfooter from './component/yeonsoo/Lysfooter';
import Lysswiper from './component/yeonsoo/Lysswiper';

// gyuwan
import Item from './component/gyuwan/Item';
import Instagram from './component/gyuwan/Instagram';

// dongmin
import Brand from './component/dongmin/Bbrand';
import Form from './component/dongmin/Form';



//data
import datainfo from './data/data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Lysswiper />
    <Lyslinebanner />
    <Brand></Brand>
    <Item />
    <Instagram />
    <Form></Form>
    <Lysfooter />
  </BrowserRouter>
);


