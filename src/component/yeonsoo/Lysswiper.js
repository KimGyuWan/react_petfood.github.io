import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Lysslidebanner from './Lysslidebanner'


export default () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]} effect="fade"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >


            <SwiperSlide className='swiper-slide postion-rel d-flex align-items-center justify-content-center'>
                <a href="">
                    <img src="" alt="" />
                    <div className=''>
                        <h3></h3>
                        <p></p>
                    </div>
                </a>
            </SwiperSlide>


            <SwiperSlide className='swiper-slide postion-rel d-flex align-items-center justify-content-center'>
                <a href="">
                    <img src="" alt="" />
                    <div className=''>
                        <h3></h3>
                        <p></p>
                    </div>
                </a>
            </SwiperSlide>


        </Swiper>
    );
};


