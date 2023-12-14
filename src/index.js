import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Brand from './component/dongmin/Brand';
import datainfo from './data/data.json'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Brand data={datainfo}></Brand>

  </>

);


