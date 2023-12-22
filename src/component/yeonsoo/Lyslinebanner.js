import React from 'react'
import './slidebanner.scss'

import data from '../../data/data.json';

function Lyslinebanner() {

  const datasrc = data.linebanner;

  return (
    <section id='line_banner'>
      <div className='container position-relative d-flex align-items-center justify-content-between'>
        <h2>{datasrc.h2}</h2>
        <div className='member d-flex align-items-center'>
          <button className='position-relative'>
            <i className='bi bi-plus position-absolute'>
              <span className='ir-hidden'>클릭해서 자세히보기</span>
            </i>
          </button>
          <ul className="d-flex justify-content-center">
            {
              datasrc.i.map((el, idx) => {
                return <li key={idx}><i className={el.cls}><span className='ir-hidden'>{el.span}</span></i></li>
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Lyslinebanner
