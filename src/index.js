import React from 'react';
import ReactDOM from 'react-dom/client';

// sanho.component,  sanho.data
import Sectioncsrindex from './component/sanho/Sectioncsr';
import datajson from './data/data.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Sectioncsrindex datalet={datajson.sectioncsr}></Sectioncsrindex>
  );


