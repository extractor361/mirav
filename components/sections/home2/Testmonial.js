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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style2">
                <div className="testimonial-style2__shape">
                    <img className="rotatescale" src="assets/images/shapes/testmonial-v2-shape1.png" alt="shape"/>
                </div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Testimonials</h4>
                        </div>
                        <h2>Our Learner Experiences</h2>
                    </div>
                    <div className="row">

                        <div className="col-xl-9">
                            <div className="testimonial-style2__inner">
                                <Swiper {...swiperOptions} className="swiper-container testimonial-style2-carousel">
                                    <SwiperSlide>
                                        <div className="testimonial-style2__single">
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v2-1.jpg" alt="Awesome Image"/>
                                            </div>
                                            <div className="contant-box">
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/testmonial-v2-shape2.png" alt="shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/testmonial-v2-shape3.png" alt="shape"/>
                                                </div>
                                                <div className="text text-center">
                                                    <p>
                                                        Enrolling in Drive Master was the best decision I made for my driving
                                                        education. The instructors were friendly & dedicated to helping me
                                                        succeed.
                                                    </p>
                                                </div>
                                                <div className="bottom-box">
                                                    <div className="leaner-name">
                                                        <h3>P.Gallagher</h3>
                                                    </div>
                                                    <div className="rating-box">
                                                        <div className="icon">
                                                            <i className="icon-star"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Rated 4.5 out of 5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-style2__single">
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v2-2.jpg" alt="Awesome Image"/>
                                            </div>
                                            <div className="contant-box">
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/testmonial-v2-shape2.png" alt="shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/testmonial-v2-shape3.png" alt="shape"/>
                                                </div>
                                                <div className="text text-center">
                                                    <p>
                                                        Enrolling in Drive Master was the best decision I made for my driving
                                                        education. The instructors were friendly & dedicated to helping me
                                                        succeed.
                                                    </p>
                                                </div>
                                                <div className="bottom-box">
                                                    <div className="leaner-name">
                                                        <h3>P.Gallagher</h3>
                                                    </div>
                                                    <div className="rating-box">
                                                        <div className="icon">
                                                            <i className="icon-star"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Rated 4.5 out of 5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-style2__single">
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v2-1.jpg" alt="Awesome Image"/>
                                            </div>
                                            <div className="contant-box">
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/testmonial-v2-shape2.png" alt="shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/testmonial-v2-shape3.png" alt="shape"/>
                                                </div>
                                                <div className="text text-center">
                                                    <p>
                                                        Enrolling in Drive Master was the best decision I made for my driving
                                                        education. The instructors were friendly & dedicated to helping me
                                                        succeed.
                                                    </p>
                                                </div>
                                                <div className="bottom-box">
                                                    <div className="leaner-name">
                                                        <h3>P.Gallagher</h3>
                                                    </div>
                                                    <div className="rating-box">
                                                        <div className="icon">
                                                            <i className="icon-star"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Rated 4.5 out of 5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-style2__single">
                                            <div className="img-box">
                                                <img src="assets/images/testimonial/testimonial-v2-2.jpg" alt="Awesome Image"/>
                                            </div>
                                            <div className="contant-box">
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/testmonial-v2-shape2.png" alt="shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/testmonial-v2-shape3.png" alt="shape"/>
                                                </div>
                                                <div className="text text-center">
                                                    <p>
                                                        Enrolling in Drive Master was the best decision I made for my driving
                                                        education. The instructors were friendly & dedicated to helping me
                                                        succeed.
                                                    </p>
                                                </div>
                                                <div className="bottom-box">
                                                    <div className="leaner-name">
                                                        <h3>P.Gallagher</h3>
                                                    </div>
                                                    <div className="rating-box">
                                                        <div className="icon">
                                                            <i className="icon-star"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>Rated 4.5 out of 5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <div className="swiper-nav-style-one">
                                        <button className="swiper-button-prev" id="main-slider__swiper-button-next">
                                            <i className="left icon-prev1"></i>
                                        </button>
                                        <button className="swiper-button-next" id="main-slider__swiper-button-prev">
                                            <i className="icon-next"></i>
                                        </button>
                                    </div>
                                </Swiper>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="testimonial-style2__quote">
                                <div className="img-box">
                                    <img src="assets/images/testimonial/testimonial-v2-2.jpg" alt="Awesome Image"/>
                                    <div className="quote-box">
                                        <i className="icon-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <p>
                                Discover what others are saying.
                                <Link href="/testimonials"><i className="icon-next"></i>View All</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
