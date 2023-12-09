import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "./ClientReview.css";
import JaneCooper from './JaneCooper.png'
import DevonLane from './DevonLane.png'
import RobertFox from './RobertFox.png'

import { Navigation} from 'swiper/modules';

export default () => {
    const swiper = useSwiper();
    return (
        <div className="client-review-wrapper">
            <div className="client-review-header">What says our happy Clients</div>
            <Swiper 
            className="mySwiper"
            slidesPerView='auto'
            // spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="client-review-card">
                        <img src={JaneCooper} />
                        <div className="client-review-name">Jane Cooper</div>
                        <div className="client-review-designation">Ceo of Hunt</div>
                        <div className="lorem-ipsum">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-review-card">
                        <img src={DevonLane} />
                        <div className="client-review-name">Devon Lane</div>
                        <div className="client-review-designation">Ceo of Hunt</div>
                        <div className="lorem-ipsum">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-review-card">
                        <img src={RobertFox} />
                        <div className="client-review-name">Robert Fox</div>
                        <div className="client-review-designation">Ceo of Hunt</div>
                        <div className="lorem-ipsum">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}