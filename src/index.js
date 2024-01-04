import React from 'react';
import ReactDOM from 'react-dom/client';
import datainfo from './data/data.json'
import Form from './component/dongmin/Form';
import Brand from './component/dongmin/Brand';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Brand data={datainfo}></Brand>
    <Form></Form>

  </>

);


