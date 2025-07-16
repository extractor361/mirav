'use client'
import React from 'react'
import Link from "next/link"

export default function Footer1() {
    return (
        <>

        <footer className="footer-style1">

            <div className="footer-style1__upper">
                <div className="footer-style1__upper-content">
                    <div className="inner-title">
                        test
                    </div>
                    <div className="car_img" style={{ backgroundImage: "url(assets/images/resources/vozilo.png)" }}></div>
                </div>
            </div>
            
            <div className="footer-style1__top">
                <div className="container">
                    <div className="footer-style1__top-inner">
                        <ul className="footer-style1__top-inner-left clearfix">
                            <li>
                                <div className="icon-box">
                                    <span className="icon-location"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span>
                                    </span>
                                </div>
                                <div className="title-box">
                                    <h4>Adresa</h4>
                                    <p>21/1 Vojina Katnića,  <br/>Podgorica 81000.</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon-box">
                                    <span className="icon-call-center"><span className="path1"></span><span
                                            className="path2"></span>
                                    </span>
                                </div>
                                <div className="title-box">
                                    <h4>Kontakt</h4>
                                    <p><Link href="mailto:getsupport@drivemaster.com">info@mirav.me</Link></p>
                                    <p><Link href="tel:6612000456">+382 068 444 101</Link></p>
                                </div>
                            </li>
                        </ul>
                        <div className="footer-style1__top-inner-right">
                            <div className="shape float-bob-x">
                            </div>
                            <div className="btn-box">
                                <p>Prijavi se. <Link href="/contact"><i className="icon-next"></i> Zakaži sada</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-6 col-md-5">
                            <div className="single-footer-widget">
                                <div className="our-company-info-box">
                                    <div className="footer-logo-style1">
                                        <Link href="/">
                                            <img style={{height:100}} src="assets/images/resources/mirav_horizontal_bijeli.svg" alt="Awesome Logo"
                                                title=""/>
                                        </Link>
                                    </div>
                                    <div className="footer-social-links-style1">
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/">
                                                    <span className="icon-facebook"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://x.com/i/flow/login">
                                                    <i className="icon-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                    <span className="icon-instagram-logo"></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.youtube.com/">
                                                    <span className="icon-youtube"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="subscribe-box-form">
                                        <div className="text">
                                            <p>Budite prvi koji saznaje – Prijavite se za novosti!</p>
                                        </div>
                                        <form action="#" method="post">
                                            <div className="form-group">
                                                <div className="icon">
                                                    <i className="icon-email"></i>
                                                </div>
                                                <input type="email" name="email" placeholder="Email Adresa"
                                                    required=""/>
                                            </div>
                                            <button className="submit btn-box">
                                                <i className="icon-next"></i>
                                                Prijavi se
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-7 single-widget">
                            <div className="single-footer-widget">
                                <div className="title">
                                    <h3>Korisne veze</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="footer-widget-links">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        O nama
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Obuka
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Testovi
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Instruktori
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Blog
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Galerija
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Prijava
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="footer-widget-links right">
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        Konsultacije
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Cjenovnik
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        Kontakt
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        FAQ
                                                        <i className="icon-next"></i>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-5 col-md-8 single-widget">
                            <div className="single-footer-widget">
                                <div className="title">
                                    <h3>Mobilna aplikacija</h3>
                                </div>
                                <div className="footer-widget-mobile-app">
                                    <div className="text">
                                        <p>Otključajte svoj vozački potencijal sa našom aplikacijom.</p>
                                    </div>
                                    <ul className="app-box clearfix">
                                        <li className="text-center">
                                            <div className="icon-box">
                                                <i className="icon-qr-code"></i>
                                            </div>
                                            <h6>
                                                <Link href="#">
                                                    App Store
                                                </Link>
                                            </h6>
                                        </li>
                                        <li className="text-center">
                                            <div className="icon-box">
                                                <i className="icon-qr-code"></i>
                                            </div>
                                            <h6><Link href="#">Play Store</Link></h6>
                                        </li>
                                    </ul>
                                    <div className="download-material">
                                        <div className="icon">
                                            <i className="icon-download"></i>
                                        </div>
                                        <div className="title">
                                            <h4>
                                                <Link
                                                    href="#">
                                                    Vodič za početnike u vožnji
                                                </Link>
                                            </h4>
                                            <p>(PDF, 8Mb)</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="copyright-text">
                            <p>
                                © {new Date().getFullYear()} <Link href="/digital-artefakt.me">Digital Artefakt,</Link> All Rights Reserved.
                            </p>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><Link href="#">Politika Privatnosti</Link></li>
                                <li><Link href="#">Politika Korišćenja</Link></li>
                                <li><Link href="#">Uslovi i Pravila</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
