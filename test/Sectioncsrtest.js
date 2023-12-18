import React from 'react'


function Sectioncsr(props) {
  return (
    <section id="csr">
      <div className="container">
        <h2 className="">{props.datasrc.h2}</h2>
        <div className="box1">
          <ul className="article-list d-flex justify-content-between">
            {
              props.datasrc.content.map((el, idx) => {
                return <li className="show" key={idx}>
                  <a href={el.href}>
                    <div className="img-box">
                      <img src={el.src} alt="펫푸드"></img>
                    </div>
                  </a>
                  <h3><a href={el.href}>{el.h3}</a>
                  </h3>
                  <div className="csr-tag d-flex">
                    {
                      el.csrtag.map((eel, iidx) => {
                        return <a href={el.href}>{eel}</a>
                      })
                    }
                  </div>
                </li>
              })
            }

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sectioncsr
