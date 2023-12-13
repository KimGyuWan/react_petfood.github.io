import React from 'react';
import ReactDOM from 'react-dom/client';

// yeonsoo
import Lyslinebanner from './component/yeonsoo/Lyslinebanner';

//data
import datainfo from './data/data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Lyslinebanner datasrc={datainfo.linebanner} />
  </>
);


