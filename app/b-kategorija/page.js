'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Testimonial from '@/components/sections/home1/Testimonial'
import Team from '@/components/sections/home1/Team'

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
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}
export default function Course_Details() {

    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="B kategorija">
                <section className="intro-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="intro-style1-content">
                                    <div className="big-title">
                                        <h2>Spremni  <br/>za Vožnju?</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            Želimo bezbjedne ulice za Vas i ostale učesnike u saobraćaju, naša misija je naučiti Vas da bezbjedno upravljate vozilom, u skladu sa propisima, pravilima i uslovima na putu. 

                                        </p>
                                    </div>
                                    <div className="list-item">
                                        <h3>Zašto izabrati nas?</h3>
                                        <ul className="clearfix">
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check-mark"></i>
                                                </div>
                                                <p>Savremena i tehnički ispravna vozila</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check-mark"></i>
                                                </div>
                                                <p>‍Licencirani instruktori sa dugogodišnjim iskustvom</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-check-mark"></i>
                                                </div>
                                                <p>Teorijska nastava uz digitalne testove i prezentacije</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12">
                                <div className="intro-style1-img">
                                    <div className="inner">
                                        <img src="assets/images/resources/intro-v1-1.jpg" alt="image"/>
                                    </div>
                                    <div className="overlay-content">
                                        <div className="price-box">
                                            <h3><sup>€</sup>870.00</h3>
                                        </div>
                                        <div className="rating-box text-center">
                                            <ul className="clearfix">
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
                                            <div className="title1">
                                                <h4>Najbolje ocijenjeno</h4>
                                            </div>
                                            <div className="text">
                                                <p>Stotine uspješnih vozača</p>
                                            </div>
                                            <div className="title2">
                                                <h3>4.9/5</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <div className="intro-style1-classes">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="single-intro-style1-classes">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-notepad"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p><span>40 časova</span><br/> Teorijska nastava</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-steering-wheel"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p><span>30 sati</span><br/> Praktične vožnje</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="single-intro-style1-classes">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-test"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p><span>Polaganje</span><br/> Teorijski i praktični</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-approval"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p><span>Sertifikat</span><br/> Vozačka dozvola</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="what-you-learn-style1">
                    <div className="what-you-learn-style1__bg"
                        style={{ backgroundImage: "url(assets/images/backgrounds/what-you-learn-v1-bg.png)" }}></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6">
                                <div className="what-you-learn-style1__left">
                                    <div className="what-you-learn-style1__left-inner">
                                        <div className="sec-title">
                                            <div className="sub-title">
                                                <h4>Teorijska nastava</h4>
                                            </div>
                                            <h2>Teorijska Nastava – Vaš Prvi Korak ka Sigurnoj Vožnji</h2>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one"
                                                href="/kontakt">
                                                <span className="txt">
                                                    Postani vozač
                                                </span>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    <div className="img-box">
                                        <img className="float-bob-y" src="assets/images/resources/what-you-learn-v1-1.png"
                                            alt="Image"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="what-you-learn-style1__right">
                                    <div className="text">
                                        <p>U auto školi Mirav, teorijska obuka je pažljivo osmišljena kako bi vam pružila temeljno znanje i samopouzdanje prije nego što prvi put sjednete za volan. Naša edukacija ne podrazumijeva samo učenje pravila, već i razumijevanje odgovornosti koje vožnja nosi.</p>
                                    </div>
                                    <div className="list-item">
                                        <div className="row">

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Odgovornosti vozača i učesnika u saobraćaju</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Pravila i znakovi na putevima</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Saobraćajne situacije i kako ih prepoznati</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Prilagođavanje vožnje različitim uslovima (kiša, noć, gužva…)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Interaktivne prezentacije i vizuelna objašnjenja</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Pitanja i diskusije u realnom vremenu</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Upravljanje rizicima i donošenje sigurnih odluka</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Reagovanje u hitnim situacijama</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Osnovni principi upravljanja vozilom</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Video materijai sa realnim situacijama iz saobraćaja</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                alt="Icon"/>
                                                        </div>
                                                        <div className="text">
                                                            <p>Testovi i simulacije ispita</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="download-material-box">
                                        <div className="icon">
                                            <i className="icon-download"></i>
                                        </div>
                                        <div className="title">
                                            <h3>
                                                <Link
                                                    href="#">
                                                     Preuzmi vodič za početnike u vožnji (PDF)
                                                </Link>
                                            </h3>
                                            <p>(PDF, 8Mb)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="training-car-style1">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h4>Naš vozni park</h4>
                            </div>
                            <h2>Vozila za obuku</h2>
                        </div>
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-training-car-style1">
                                    <div className="img-box">
                                        <img src="assets/images/resources/golff.jpg" alt="Image"/>
                                        <div className="car-type">
                                            <h6>Golf 8</h6>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h3><Link href="#">Golf 8 je savremeno vozilo koje pruža vrhunski komfor i sigurnost. Precizno upravljanje i napredne tehnologije čine ga savršenim za sve vozače koji žele da steknu samopouzdanje na cesti, bilo da su u pitanju gradske ili van gradske vožnje.
</Link></h3>
                                        <div className="btn-box">
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-training-car-style1">
                                    <div className="img-box">
                                        <img src="assets/images/resources/citroenn.jpg" alt="Image"/>
                                        <div className="car-type">
                                            <h6>Citroen c3</h6>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h3><Link href="#">Citroën C3 je kompaktan, lagan za upravljanje, s odličnom preglednošću i stabilnošću na cesti. Savršen je za početnike, a njegova jednostavnost u vožnji omogućava brzo savladavanje osnovnih veština i sigurnosti za volanom.
</Link></h3>
                                        <div className="btn-box">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="single-training-car-style1">
                                    <div className="img-box">
                                        <img src="assets/images/resources/fabiaa.jpg" alt="Image"/>
                                        <div className="car-type">
                                            <h6>Škoda Fabia</h6>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h3><Link href="#">Škoda Fabia je kompaktnog dizajna, jednostavna za upravljanje i vrlo praktična za obuku. Sa odličnom preglednošću i ekonomičnošću, idealna je za vozače početnike koji žele da steknu osnovne veštine vožnje, kao i za vožnju u gradskim uslovima.
</Link></h3>
                                        <div className="btn-box">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </section>
                <section className="video-library-style1">
                    <div className="video-library-style1__bg"
                        style={{ backgroundImage: "url(assets/images/backgrounds/video-library-v1-1.jpg)" }}></div>
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4">
                                <div className="video-library-style1__title">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h4>Veb testovi</h4>
                                        </div>
                                        <h2>Online Test Platforma</h2>
                                    </div>
                                    <div className="text">
                                        <p>Naša auto škola nudi pristup savremenoj online platformi gdje kandidati mogu vježbati testove identične onima na zvaničnom ispitu. Bilo da ste kod kuće, u prevozu ili na pauzi – učenje je sada dostupno bilo kada i bilo gdje.</p>
                                    </div>
                                    <div className="fact-box fact-box--style2">
                                        <div className="counting">
                                            <h2 className="odometer"><CounterUp end={100} /></h2>
                                            <i className="icon-plus-sign"></i>
                                        </div>
                                        <div className="title-box">
                                            <h3><br/>Pitanja koja će te naučiti svemu što treba da znaš</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8">
                                <div className="video-library-style1__content">
                                    <div className="vertical-slider-style1">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="vertical-slider-style1__thumb-outer">
                                                    <div className="vertical-slider-style1__thumb">
                                                        
                                                        <div className="slider-slide">
                                                            <div className="vertical-slider-style1__thumb-single">
                                                                <img src="assets/images/resources/mercedes.jpg"
                                                                    alt=""/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="slider-slide">
                                                            <div className="vertical-slider-style1__thumb-single">
                                                                <img src="assets/images/resources/vozilaa.webp"
                                                                    alt=""/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="slider-slide">
                                                            <div className="vertical-slider-style1__thumb-single">
                                                                <img src="assets/images/resources/fabiaa.jpg"
                                                                    alt=""/>
                                                            </div>
                                                        </div>

                                                        <div className="slider-slide">
                                                            <div className="vertical-slider-style1__thumb-single">
                                                                <img src="assets/images/resources/tim.webp"
                                                                    alt=""/>
                                                            </div>
                                                        </div>

                                                        

                                                        
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-9 col-lg-8 col-md-8">
                                                <div className="vertical-slider-style1__content">
                                                    
                                                    <div className="slider-slide">
                                                        <div className="video-library-style1__single">
                                                            <div className="img-box">
                                                                <img style={{height:'385px'}} src="assets/images/resources/tim.jpg"
                                                                    alt=""/>
                                                                <div className="overlay-video-box">
                                                                    
                                                                </div>
                                                                <div className="overlay-shear-box">
                                                                    <Link href="#"><i className="icon-share"></i></Link>
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

                        </div>
                    </div>
                </section>
                <Team/>
                <section className="contact-style1">
                    <div className="contact-style1__bg" style={{ backgroundImage: "url(assets/images/shapes/pozadina.png)" }}>
                    </div>
                    <div className="container">
                        <div className="contact-style1__inner">
                            <div className="contact-style1__img1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
                                <img className="float-bob-x" src="assets/images/resources/contact-v1-1.png" alt="image"/>
                            </div>
                            <div className="contact-style1__img2 wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2000ms">
                                <img className="float-bob-x" src="assets/images/resources/contact-v1-2.png" alt="image"/>
                            </div>
                            <div className="contact-style1__content text-center">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Kontakt</h4>
                                    </div>
                                    <h2>Treba vam pomoć?</h2>
                                </div>
                                <div className="phone-box">
                                    <div className="icon">
                                        <i className="icon-dial-pad"></i>
                                    </div>
                                    <h3><Link href="tel:+382 068 444 1016">+382 068 444 1016</Link></h3>
                                </div>
                                <div className="text">
                                    <p>21/1 Vojina Katnića, Podgorica 81000</p>
                                    <p><span>Radno vrijeme: </span>Pon - Pet: 7.00 do 18.00</p>
                                </div>
                                <div className="btn-box">
                                    <Link className="btn-one" href="tel:66120003456">
                                        <span className="txt">
                                            Želim vozačku dozvolu
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className="contact-style1__form">
                                <form id="contact-style1__form" name="contact-style1_form" action="#" method="post">

                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="select-box clearfix">
                                                    <select className="wide">
                                                        <option data-display="Reason for Contact">Razlog kontaktiranja
                                                        </option>
                                                        <option value="1">Teorijska nastava</option>
                                                        <option value="2">Praktična obuka</option>
                                                        <option value="3">Prijava na obuku</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_Address" id="formAddress"
                                                        placeholder="Adresa"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_name" id="formName" placeholder="Ime"
                                                        required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="email" name="form_email" id="formEmail" placeholder="Email"
                                                        required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_phone" id="formPhone" placeholder="Kontakt Telefon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <textarea name="form_message" id="formMessage"
                                                        placeholder="Poruka" required=""></textarea>
                                                </div>
                                                <button className="btn-box" type="submit" data-loading-text="Molimo sačekajte...">
                                                    <span className="txt">
                                                        <i className="icon-next"></i>
                                                        Pošaljite
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial/>
            </Layout>
        </div>
    )
}