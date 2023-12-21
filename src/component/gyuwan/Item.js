import React, { useState } from 'react';
import './item.scss';
import Productimg from './productimg/Productimg';


function Item(props) {
  const [tabNum, settabNum] = useState("no0");

  return (
    <>
      <section id='section_item' className='w-100'>
        <div id="itemPeel" class="container d-flex justify-content-center align-items-center">
          <div class="text">
            <div class="textbox">
              <h2>알맞은 제품을 찾고 계세요?</h2>
            </div>

            <div class="inputbutton mt-3">
              <input type="text" placeholder="핫 키워드 제품을 찾아보세요!!" />
              <button className='button'><i class="bi bi-search-heart"></i></button>
            </div>
            {/* setInterval로 메뉴 전환시키기 */}
            <ul class="mainlist">
              {
                props.dataMain.map((el, idx) => {
                  return (
                    <li className={el.item_mainlist_cls} key={idx}><button className={el.item_mainlist_href} onClick={() => { settabNum(el.item_mainlist_href) }}>{el.item_mainlist_nm}</button></li>
                  )
                })
              }
            </ul>
          </div>

          <div class="itemgroup">
            <div class="listgroup row mx-0">
              {
                props.dataList.map((el, idx) => {
                  return (
                    <>
                      {tabNum === el.item_mainlist_href ?
                        <Productimg dataList={el} /> : null
                      }
                    </>
                  )
                })
              }
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Item
