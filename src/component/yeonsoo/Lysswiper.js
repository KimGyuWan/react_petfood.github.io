import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import '../../scss/Slidebanner.scss'







export default (props) => {
    return (
        <section id='slide_banner'>
            <Swiper
                modules={[EffectFade, Autoplay]} effect="fade"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
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

            </Swiper>
        </section>
    );

};


