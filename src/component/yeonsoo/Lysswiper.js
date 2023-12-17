import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slidebanner.scss';








export default (props) => {
    return (
        <section id='slide_banner'>
            <div className='container'>
                <Swiper
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

                </Swiper>
            </div>
        </section>
    );

};


