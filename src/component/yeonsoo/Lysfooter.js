import React from 'react'
import './footer.scss'

import data from '../../data/data.json';

function Lysfooter() {

  const datasrc = data.footer;

  return (
    <footer id="ft">
      <div className="container d-flex justify-content-between align-items-center">
        <h2>
          <a href="#none">
            <img src="./img/yeonsoo/petfoodlogo.png" alt="footer로고"></img>
          </a>
        </h2>
        <div className="info d-flex justify-content-between">
          {
            datasrc.box.map((el, idx) => {
              return (
                <div key={idx}>
                  <h4>{el.h4}</h4>
                  <p>{el.p}</p>
                </div>
              )
            })
          }
        </div>
        <div className="flex-box position-relative">
          <div className="family position-absolute">
            <button>Familysite</button>
            <ul className="position-absolute">
              {
                datasrc.family.map((el, idx) => {
                  return (
                    <li key={idx}><a href={el.href}>{el.nm}</a></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="website">
            <ul className="row ">
              <li className="col-6"><a href="#none">우리의 이야기</a></li>
              <li className="col-6"><a href="#none">이용약관</a></li>
              <li className="col-6"><a href="#none">개인정보처리방침</a></li>
              <li className="col-6"><a href="#none">사업자정보확인</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-end align-items-center">
        <ul className="icon d-flex justify-content-end align-items-center">
          {
            datasrc.tabicon.map((el, idx) => {
              return (
                <li className='position-relative' key={idx}><a href={el.href}><span className="ir-hidden">{el.span}</span></a></li>
              )
            })
          }
        </ul>
      </div>
    </footer>
  )
}

export default Lysfooter
