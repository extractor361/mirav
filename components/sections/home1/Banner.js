'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect } from 'react'
import { useState } from 'react'
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    checkScreen(); // inicijalno

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

    return (
        <> 

            <section className="main-slider main-slider-style1">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{
        backgroundImage: isMobile
          ? "url(assets/images/resources/Mirav-2055_compressed.webp)"
          : "url((assets/images/resources/Naslovna.jpg))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}></div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="big-title">
                                                    <h2>
                                                        Auto <br/> Škola Mirav<br/> Više Od Vožnje.
                                                    </h2>
                                                </div>
                                                <div className="slider-reviews-box">
                                                    <div className="left">
                                                        <h3>4.9</h3>
                                                    </div>
                                                    <div className="right">
                                                        <form className="star-rating-style1">
                                                            <input type="radio" id="5-stars" name="rating" value="5"/>
                                                            <label for="5-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="4-stars" name="rating" value="4"/>
                                                            <label for="4-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="3-stars" name="rating" value="3"/>
                                                            <label for="3-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="2-stars" name="rating" value="2"/>
                                                            <label for="2-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="1-star" name="rating" value="1"/>
                                                            <label for="1-star" className="star">&#9733;</label>
                                                        </form>
                                                        <h5>2.8k Recenzija</h5>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/kontakt">
                                                        <span className="txt">Započni obuku</span>
                                                    </Link>
                                                </div>
                                                <div className="main-slider-style1__price-tag">
                                                    <div className="left">
                                                        <div className="arrow">
                                                            <img className="float-bob-x"
                                                                src="assets/images/shapes/main-slider-style1__arrow.png"
                                                                alt=""/>
                                                        </div>
                                                        <h5>Obuka već od:</h5>
                                                    </div>
                                                    <div className="price-box">
                                                        <h2>870€</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/resources/Mirav-2036_compressed.webp)", backgroundPosition:'0 0' }}></div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="big-title">
                                                    <h2>
                                                        Vozi Pametno,<br/> Vozi sigurno.
                                                    </h2>
                                                </div>
                                                <div className="slider-reviews-box">
                                                    <div className="left">
                                                        <h3>4.9</h3>
                                                    </div>
                                                    <div className="right">
                                                        <form className="star-rating-style1">
                                                            <input type="radio" id="5-stars-1" name="rating" value="5"/>
                                                            <label for="5-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="4-stars-1" name="rating" value="4"/>
                                                            <label for="4-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="3-stars-1" name="rating" value="3"/>
                                                            <label for="3-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="2-stars-1" name="rating" value="2"/>
                                                            <label for="2-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="1-star-1" name="rating" value="1"/>
                                                            <label for="1-star" className="star">&#9733;</label>
                                                        </form>
                                                        <h5>2.8k Recenzija</h5>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/o-nama">
                                                        <span className="txt">Saznaj više</span>
                                                    </Link>
                                                </div>
                                                <div className="main-slider-style1__price-tag">
                                                    <div className="left">
                                                        <div className="arrow">
                                                            <img className="float-bob-x"
                                                                src="assets/images/shapes/main-slider-style1__arrow.png"
                                                                alt=""/>
                                                        </div>
                                                        <h5>Obuka već od:</h5>
                                                    </div>
                                                    <div className="price-box">
                                                        <h2>870€</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/resources/Mirav-2043_compressed.webp)" }}></div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="big-title">
                                                    <h2>
                                                        Snaga Iskustva. <br/> Povjerenje Instruktora.


                                                    </h2>
                                                </div>
                                                <div className="slider-reviews-box">
                                                    <div className="left">
                                                        <h3>4.9</h3>
                                                    </div>
                                                    <div className="right">
                                                        <form className="star-rating-style1">
                                                            <input type="radio" id="5-stars-2" name="rating" value="5"/>
                                                            <label for="5-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="4-stars-2" name="rating" value="4"/>
                                                            <label for="4-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="3-stars-2" name="rating" value="3"/>
                                                            <label for="3-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="2-stars-2" name="rating" value="2"/>
                                                            <label for="2-stars" className="star">&#9733;</label>
                                                            <input type="radio" id="1-star-2" name="rating" value="1"/>
                                                            <label for="1-star" className="star">&#9733;</label>
                                                        </form>
                                                        <h5>2.8k Recenzija</h5>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/kontakt">
                                                        <span className="txt">Kontaktirajte nas</span>
                                                    </Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="main-slider__nav">
                        <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
                            <i className="icon-prev1 left"></i>
                        </div>
                        <div className="swiper-button-next" id="main-slider__swiper-button-next">
                            <i className="icon-next right"></i>
                        </div>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
