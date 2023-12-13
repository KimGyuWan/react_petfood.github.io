import React from 'react';
import itemstyle from './item.module.scss';

function Item(props) {
  return (
    <>
      <section id='section-item' className='w-100'>
        <div id="itemPeel" class="container  d-flex justify-content-center align-items-center">
          <div class="text">
            <div class="textbox">
              <h2>알맞은 제품을 찾고 계세요?</h2>
            </div>

            <div class="inputbutton mt-3">
              <input type="text" placeholder="핫 키워드 제품을 찾아보세요!!" />
              <button><i class="bi bi-search-heart"></i></button>
            </div>

            <ul class="mainlist">
              {
                props.dataMain.map((el, idx) => {
                  return (
                    <li className={el.item_mainlist_cls} key={idx}><a href={el.item_mainlist_href}>{el.item_mainlist_nm}</a></li>
                  )
                })
              }
            </ul>
          </div>

          <div class="itemgroup">

            <div class="listgroup">

              <ul class="row mx-0" data-number="">
                {
                  props.dataList.map((el, idx) => {
                    return (
                      <li className={el.item_listgroup_cls} key={idx}><a href={el.item_listgroup_href}>
                        <img src={el.item_listgroup_src} alt={el.item_listgroup_alt} /></a></li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Item
