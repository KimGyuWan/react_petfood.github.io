import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slidebanner.scss';


const SwiperComponent = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const swiperRef = useRef(null);


    const togglePlay = () => {
        const buttonToggle = document.querySelector('.toggle')
        const swiperInstance = swiperRef.current.swiper;
        if (isPlaying) {
            swiperInstance.autoplay.stop();
            buttonToggle.classList.remove('on')
        } else {
            swiperInstance.autoplay.start();
            buttonToggle.classList.add('on')
        }
        setIsPlaying(!isPlaying);

    };

    return (
        <section id='slide_banner'>
            <div className='container'>
                <Swiper
                    ref={swiperRef}
                    modules={[EffectFade, Autoplay, Navigation, Pagination]} effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                >
                    {
                        props.datasrc.map((el, idx) => {
                            return <SwiperSlide key={idx} className={`active${idx}`}>
                                <a href={el.slide_banner_href}>
                                    <img src={el.slide_banner_src} alt={el.slide_banner_alt}></img>
                                    <div className={el.slide_banner_cls}>
                                        <h3>{el.slide_banner_h3}</h3>
                                        <p>{el.slide_banner_p}</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        })
                    }
                    <div className='btns position-absolute'>
                        <button className='toggle position-relative' onClick={togglePlay}>

                        </button>
                    </div>

                </Swiper>

            </div>
        </section>
    );
};

export default SwiperComponent;

