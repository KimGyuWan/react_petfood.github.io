import React from "react";

function Sectioncsr(props) {
  return (
    <>
      <section id="csr">
        <div className="container">
          <h2>{props.datalet.h2}</h2>
          <div className="box1">
            <ul className="article-list d-flex justify-content-between">
              {props.datalet.content.map((vlu, idx) => {
                return (
                  <li className="show" key={idx}>
                    <a href={vlu.href}>
                      <div className="imx-box">
                        <img src={vlu.src} alt="펫푸드" />
                      </div>
                    </a>
                    <h3>
                      <a href="vlu.href">{vlu.h3}</a>
                    </h3>
                    <div className="csr-tag d-flex">
                      {vlu.csrtag.map((vlu2, idx2) => {
                        return (
                          <a href="#none" key={idx2}>
                            {vlu2.nm}
                          </a>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sectioncsr;
