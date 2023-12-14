import React from 'react';
import ReactDOM from 'react-dom/client';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';
import Lysfooter from './component/yeonsoo/Lysfooter';
import Lysswiper from './component/yeonsoo/Lysswiper';

//data
import datainfo from './data/data.json'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Lysswiper datasrc={datainfo.slide_banner} />
    <Lyslinebanner datasrc={datainfo.linebanner} />
    <Lysfooter datasrc={datainfo.footer} />
  </>
);


