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
            slidesPerView: 4,
        },
    }
}

export default function Choose() {
    return (
        <> 

            <section className="choose-style3">
                <div className="container">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Why Choose Us</h4>
                        </div>
                        <h2>Reasons to Choose Us</h2>
                    </div>
                    <div className='inner-container'>
                        <div className="row">

                            <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="swiper-container choose-style3-carousel">
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Licensed</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Desires obtain pain itself because is pain because occur undertakes.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Experienced</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Take trivial example, which ever undertakes laborious to some advantages.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-taxi-driver"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Flexible Times</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Moment so blinded desire that cannot foresees the pain and trouble.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-schedule"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-schedule"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Budget Friendly</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Enjoy a pleasure that no annoyingconsequences or one who avoids.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-receipt"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-receipt"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Licensed</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Desires obtain pain itself because is pain because occur undertakes.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Experienced</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Take trivial example, which ever undertakes laborious to some advantages.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-taxi-driver"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Flexible Times</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Moment so blinded desire that cannot foresees the pain and trouble.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-schedule"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-schedule"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-choose-style3">
                                            <div className="single-choose-style3__inner">
                                                <div className="img-box">
                                                    <div className="img1">
                                                        <img src="assets/images/shapes/choose-v3-1.png" alt="image"/>
                                                    </div>
                                                    <div className="img2">
                                                        <img src="assets/images/shapes/choose-v3-2.png" alt="image"/>
                                                    </div>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/services-details">Budget Friendly</Link></h3>
                                                </div>
                                                <div className="text-box">
                                                    <p>Enjoy a pleasure that no annoyingconsequences or one who avoids.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                                <div className="icon-box">
                                                    <span className="icon-receipt"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                    <div className="overlay-icon">
                                                        <span className="icon-receipt"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-nav-style-one">
                                    <button className="swiper-button-prev" id="main-slider__swiper-button-next">
                                        <i className="left icon-prev1"></i>
                                    </button>
                                    <button className="swiper-button-next" id="main-slider__swiper-button-prev">
                                        <i className="icon-next"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
