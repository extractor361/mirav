'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5,
        },
        1920: {
            slidesPerView: 6,
        },
    }
}

export default function Partner() {
    return (
        <> 

            <section className="partner-style1">
                <div className="container clearfix">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Corporate Clients</h4>
                        </div>
                        <h2>Driving Success Together</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container partner-style1-carousel">
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-1.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-2.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-3.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-4.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-5.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-6.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-1.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-2.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-3.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-4.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-5.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="partner-style1__single">
                                <Link href="#"><img src="assets/images/brand/brand-1-6.png" alt="logo"/></Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
