import React from 'react';
import ReactDOM from 'react-dom/client';
import datainfo from './data/data.json'
import Form from './component/dongmin/Form';
import Bbrand from './component/dongmin/Bbrand';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Bbrand data={datainfo}></Bbrand>
    <Form></Form>

  </>

);


