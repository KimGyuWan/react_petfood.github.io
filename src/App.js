import Instagram from "./component/gyuwan/Instagram";
import Item from "./component/gyuwan/Item";

import data from './data/data.json';

function App() {
  return (
    <>
      <Item dataMain={data.item_mainlist} dataList={data.item_listgroup} />
      <Instagram datainsta1={data.instagram_instagroup1} datainsta2={data.instagram_instagroup2} />
    </>
  );
}

export default App;
