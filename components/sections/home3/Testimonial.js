'use client'
import React from 'react'
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
            slidesPerView: 1.55,
        },
        1350: {
            slidesPerView: 1.55,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style3">
                <div className="container">
                    <div className="testimonial-style3__content">
                        <Swiper {...swiperOptions} className="swiper-container testimonial-style3-carousel">
                            <SwiperSlide>
                                <div className="single-testimonial-style3">
                                    <div className="single-testimonial-style3__icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="single-testimonial-style3__bg"
                                        style={{ backgroundImage: "url(assets/images/testimonial/testimonial-v3-1.jpg)" }}>
                                    </div>
                                    <div className="single-testimonial-style3__content">
                                        <div className="name-course">
                                            <h3>P.Gallagher.</h3>
                                            <p><span>Course: </span>Beginner Driving Lessons</p>
                                        </div>
                                        <div className="text">
                                            <p>Enrolling in Drive Master was the best decision I made for my driving education.
                                                The instructors were friendly & dedicated to helping me succeed.</p>
                                        </div>
                                        <ul className="rating-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-testimonial-style3">
                                    <div className="single-testimonial-style3__icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="single-testimonial-style3__bg"
                                        style={{ backgroundImage: "url(assets/images/testimonial/testimonial-v3-2.jpg)" }}>
                                    </div>
                                    <div className="single-testimonial-style3__content">
                                        <div className="name-course">
                                            <h3>N.Penelope</h3>
                                            <p><span>Course: </span>Defensive Driving Lessons</p>
                                        </div>
                                        <div className="text">
                                            <p>
                                                As an adult learner, I was apprehensive
                                                about learning to drive, but Drive Master
                                                put my mind at ease. The instructors were
                                                supportive & encouraging,
                                            </p>
                                        </div>
                                        <ul className="rating-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-testimonial-style3">
                                    <div className="single-testimonial-style3__icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="single-testimonial-style3__bg"
                                        style={{ backgroundImage: "url(assets/images/testimonial/testimonial-v3-1.jpg)" }}>
                                    </div>
                                    <div className="single-testimonial-style3__content">
                                        <div className="name-course">
                                            <h3>P.Gallagher.</h3>
                                            <p><span>Course: </span>Beginner Driving Lessons</p>
                                        </div>
                                        <div className="text">
                                            <p>Enrolling in Drive Master was the best decision I made for my driving education.
                                                The instructors were friendly & dedicated to helping me succeed.</p>
                                        </div>
                                        <ul className="rating-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-testimonial-style3">
                                    <div className="single-testimonial-style3__icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <div className="single-testimonial-style3__bg"
                                        style={{ backgroundImage: "url(assets/images/testimonial/testimonial-v3-2.jpg)" }}>
                                    </div>
                                    <div className="single-testimonial-style3__content">
                                        <div className="name-course">
                                            <h3>N.Penelope</h3>
                                            <p><span>Course: </span>Defensive Driving Lessons</p>
                                        </div>
                                        <div className="text">
                                            <p>
                                                As an adult learner, I was apprehensive
                                                about learning to drive, but Drive Master
                                                put my mind at ease. The instructors were
                                                supportive & encouraging,
                                            </p>
                                        </div>
                                        <ul className="rating-box clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}
