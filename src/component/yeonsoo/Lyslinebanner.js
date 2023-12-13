import React from 'react'


function Lyslinebanner(props) {
    return (
        <section id='line-banner'>
            <div className='container position-relative d-flex align-items-center justify-content-between'>
                <h2>{props.datasrc.h2}</h2>
                <div className='member d-flex align-items-center'>
                    <button className='position-relative'>
                        <i className='bi bi-plus position-absolute'>
                            <span className='ir-hidden'>클릭해서 자세히보기</span>
                        </i>
                    </button>
                    <ul className="row justify-content-center">
                        {
                            props.datasrc.i.map((el, idx) => {
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
