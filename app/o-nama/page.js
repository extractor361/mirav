'use client'
import React from 'react'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Choose from '@/components/sections/home3/Choose'
import Fact from '@/components/sections/home2/Fact'
import Team from '@/components/sections/home1/Team'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Head from "next/head";

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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
}
export default function About_Page() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (<>
     <Head>
        <title>Auto škola Mirav Podgorica, Crna Gora | Iskusni instruktori</title>

        <meta
          name="description"
          content="Saznajte više o auto školi Mirav u Podgorici – naša misija, vizija, licencirani instruktori i preko 3000 obučenih kandidata. Vaša sigurna vožnja počinje ovdje."
        />

        <meta
          name="keywords"
          content="auto škola Mirav, o nama, auto škola Podgorica, instruktori vožnje"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="O nama – Auto škola Mirav" />
        <meta
          property="og:description"
          content="Naša misija i vizija, licencirani instruktori i višegodišnje iskustvo auto škole Mirav iz Podgorice."
        />
        <meta property="og:url" content="https://mirav.me/o-nama" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../assets/images/resources/Mirav-2036_compressed.webp" />
      </Head>
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="O nama">
                <About/>
                <section className="statement-style1">
                    <div className="container">
                        <div className="statement-style1__inner">
                            <div className="statement-style1__tab">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>izjave</h4>
                                    </div>
                                    <h2>Naša posvećenost  <br/>izvrsnosti</h2>
                                </div>

                                <div className="statement-style1__tab-btn">
                                    <ul className="tabs-button-box clearfix">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                            <div className="icon">
                                                <span className="icon-goal"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span>
                                                </span>
                                            </div>
                                            <h6>Misija</h6>
                                        </li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                            <div className="icon">
                                                <span className="icon-values"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span>
                                                </span>
                                            </div>
                                            <h6>Vizija</h6>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tabs-content-box">
                                    
                                    <div className={activeIndex === 1 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                        <div className="statement-style1__content-tab-item">
                                            <div className="single-statement-style1">
                                                <div className="row">
                                                    <div className="col-xl-8 col-lg-7 col-md-7">
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>Misija</h3>
                                                            </div>
                                                            <div className="text">
                                                                <p>
Vozila, putevi i podneblje ne možemo mijenjati u većoj mjeri, ali ono što možemo je promijeniti naše ponašanje u saobraćaju. Naša misija je da vas uvjerimo da, bez obzira na vaše fizičke, psihičke, intelektualne i druge karakteristike, prihvatite norme bezbjednog ponašanja dok učestvujete u saobraćaju. Na taj način štitimo ne samo sebe, već i druge učesnike u saobraćaju.
                                                                </p>
                                                            </div>
                                                            <div className="fact-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-success"><span className="path1"></span><span
                                                                            className="path2"></span><span
                                                                            className="path3"></span><span className="path4"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="title-box">
                                                                    <h3>100%</h3>
                                                                    <h4>Prolaznost na vozačkom ispitu.</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-4 col-lg-5 col-md-5">
                                                        <div className="img-box">
                                                            <img src="assets/images/resources/mission.jpg" alt="Image"/>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={activeIndex === 2 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                        <div className="statement-style1__content-tab-item">
                                            <div className="single-statement-style1">
                                                <div className="row">
                                                    <div className="col-xl-8 col-lg-7 col-md-7">
                                                        <div className="content-box">
                                                            <div className="title">
                                                                <h3>Vizija</h3>
                                                            </div>
                                                            <div className="text">
                                                                <p>
                                                                   Naša vizija je da budemo lider u obrazovanju odgovornih i sigurnih vozača, spremnih da samouvjereno i savjesno učestvuju u savremenom saobraćaju. Težimo da kroz kvalitetnu, sveobuhvatnu i modernizovanu obuku, zasnovanu na najnovijim standardima i tehnologijama, oblikujemo vozače koji će doprinositi bezbjednosti na putevima i kulturi saobraćaja.
                                                                </p>
                                                            </div>
                                                            <div className="fact-box">
                                                                <div className="icon-box">
                                                                    <span className="icon-success"><span className="path1"></span><span
                                                                            className="path2"></span><span
                                                                            className="path3"></span><span className="path4"></span>
                                                                    </span>
                                                                </div>
                                                                <div className="title-box">
                                                                    <h3>100%</h3>
                                                                    <h4>Prolaznost na vozačkom ispitu.
</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-4 col-lg-5 col-md-5">
                                                        <div className="img-box">
                                                            <img src="assets/images/resources/Mirav-2055_compressedd.webp" alt="Image"/>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Choose/>
                <Fact/>
                <Team/>
                <section className="certification-style1">
                    <div className="container">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h4>ZAŠTO IZABRATI NAS</h4>
                            </div>
                            <h2>Razlozi zbog kojih nam kandidati vjeruju</h2>
                        </div>
                        <div className='inner-container'>
                            <div className="row">
                                <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="swiper-container certification-style1-carousel">
                                    <SwiperSlide>
                                        <div className="single-certification-style1">
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-7">
                                                    <div className="img-box">
                                                        <img src="assets/images/resources/Mirav-2102_compressed.webp" alt="Image"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-5">
                                                    <div className="certificate-box">
                                                        <div className="shape float-bob-y">
                                                            <img src="assets/images/shapes/certification-v1-1.png" alt="shape"/>
                                                        </div>
                                                        <div className="certificate-box__img">
                                                            <img src="assets/images/resources/sertifikati.png" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-certification-style1">
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-7">
                                                    <div className="img-box">
                                                        <img src="assets/images/resources/Mirav-2094_compressed.webp" alt="Image"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-5">
                                                    <div className="certificate-box">
                                                        <div className="shape float-bob-y">
                                                            <img src="assets/images/shapes/certification-v1-1.png" alt="shape"/>
                                                        </div>
                                                        <div className="certificate-box__img">
                                                            <img src="assets/images/resources/sertifikati.png" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-certification-style1">
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-7">
                                                    <div className="img-box">
                                                        <img src="assets/images/resources/Mirav-2036_compressed.webp" alt="Image"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-5">
                                                    <div className="certificate-box">
                                                        <div className="shape float-bob-y">
                                                            <img src="assets/images/shapes/certification-v1-1.png" alt="shape"/>
                                                        </div>
                                                        <div className="certificate-box__img">
                                                            <img src="assets/images/resources/sertifikati.png" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-certification-style1">
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-7">
                                                    <div className="img-box">
                                                        <img src="assets/images/resources/Mirav-2043_compressed.webp" alt="Image"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-5">
                                                    <div className="certificate-box">
                                                        <div className="shape float-bob-y">
                                                            <img src="assets/images/shapes/certification-v1-1.png" alt="shape"/>
                                                        </div>
                                                        <div className="certificate-box__img">
                                                            <img src="assets/images/resources/sertifikati.png" alt="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-nav-style-one">
                                    <button className="swiper-button-prev">
                                        <i className="left icon-prev1"></i>
                                    </button>
                                    <button className="swiper-button-next">
                                        <i className="icon-next"></i>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>    </>

    )
}