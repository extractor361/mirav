'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function Service_Details() {
    const [activeIndex, setActiveIndex] = useState(1)
            const handleOnClick = (index) => {
                setActiveIndex(index)
            }
    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Profesionalna obuka vozača">
                <section className="service-page">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-4 col-lg-5 order222">
                                <div className="sidebar-style1">
                                    <div className="single-sidebar-style1">
                                        <div className="title-box">
                                            <h3>Usluge</h3>
                                            <div className="shape">
                                                <img src="assets/images/shapes/services-details-shape1.png" alt="shape"/>
                                            </div>
                                        </div>
                                        <div className="services-details-pages-link">
                                            <ul className="clearfix">
                                                <li className="active">
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Kursevi vožnje</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Polaganje za vozačku dozvolu</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Test bezbednosti u saobraćaju</Link>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Profesionalna obuka vozača</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Online testovi za proveru znanja</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <Link href="#"><i className="icon-next"></i>Individualni časovi vožnje</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-style1">
                                        <div className="title-box">
                                            <h3>Preuzimanja</h3>
                                            <div className="shape">
                                                <img src="assets/images/shapes/services-details-shape1.png" alt="shape"/>
                                            </div>
                                        </div>
                                        <div className="download-box">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="single-download-box">
                                                        <div className="file-size">
                                                            <h6>8 Mb</h6>
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-file"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span></span>
                                                        </div>
                                                        <div className="title">
                                                            <h4><Link href="#">Vodi za početnike</Link></h4>
                                                        </div>
                                                        <div className="btn-box">
                                                            <Link href="#"><i className="icon-next"></i>Preuzmi</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="single-download-box">
                                                        <div className="file-size">
                                                            <h6>2.5 Mb</h6>
                                                        </div>
                                                        <div className="icon-box">
                                                            <span className="icon-file"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span></span>
                                                        </div>
                                                        <div className="title">
                                                            <h4><Link href="#">Teorijski testovi</Link></h4>
                                                        </div>
                                                        <div className="btn-box">
                                                            <Link href="#"><i className="icon-next"></i>Preuzmi</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="banner-style1">
                                        <div className="banner-style1__bg"
                                            style={{ backgroundImage: "url(assets/images/resources/banner-style1-1.jpg)" }}>
                                        </div>
                                        <div className="banner-style1___inner text-center">
                                            <div className="title-box">
                                                <h4>Otkrij Put do</h4>
                                                <h2>SIGURNE VOŽNJE
</h2>
                                            </div>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <h6>Sigurno</h6>
                                                </li>
                                                <li>
                                                    <h6>Pouzdano</h6>
                                                </li>
                                                <li>
                                                    <h6>Samouvjereno</h6>
                                                </li>
                                            </ul>
                                            <div className="content-box">
                                                <h4>
                                                    <i className="icon-dial-pad"></i>
                                                    <Link href="tel:+382 68444101">+382 68444101</Link>
                                                </h4>
                                                <h4>
                                                    <i className="icon-dial-pad"></i>
                                                    <Link href="tel:+382 68444101">+382 68877949</Link>
                                                </h4>
                                                <p>Imate pitanja? Naši instruktori su tu da pomognu!</p>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/kontakt">
                                                        <span className="txt">
                                                            Želim vozačku dozvolu
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-8 col-lg-7 order111">
                                <div className="service-page-content">
                                    <div className="title-box">
                                        <h3>Savladajte Put do Sigurne Vožnje uz Našu Obuku!
</h3>
                                    </div>
                                    <div className="img-box">
                                        <img src="assets/images/resources/Mirav-2025_compressed.webp" alt="Image"/>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                           Kada znaš da voziš pravilno i sigurno, svaki put je lakši. Naši stručnjaci su tu da ti pomognu da postaneš odgovoran i vešt vozač.
Više od decenije iskustva i preko 2000 obučenih vozača su naša najbolja preporuka.
                                        </p>
                                    </div>
                                    <div className="learning-journey">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="learning-journey-content">
                                                    <div className="title">
                                                        <h3>Vaš put do vozačke dozvole:</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>Naš program vodi vas korak po korak:
</p>
                                                    </div>
                                                    <div className="download">
                                                        <div className="icon">
                                                            <i className="icon-download"></i>
                                                        </div>
                                                        <div className="title">
                                                            <h3><Link href="#"> Vodič za početnike</Link></h3>Preuzmite naš besplatni PDF vodič i spremite se za prvu vožnju!


                                                            <p>(PDF, 8Mb)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="learning-journey-list">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                    alt="Icon"/>
                                                            </div>
                                                            <div className="text">
                                                                <p>Vozi odgovorno i sigurno.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                    alt="Icon"/>
                                                            </div>
                                                            <div className="text">
                                                                <p>Savladaj upravljanje vozilom.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                    alt="Icon"/>
                                                            </div>
                                                            <div className="text">
                                                                <p>Prepoznaj znakove i signalizaciju.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <img src="assets/images/icon/what-you-learn-v1-icon1.png"
                                                                    alt="Icon"/>
                                                            </div>
                                                            <div className="text">
                                                                <p>Prilagodi brzinu uslovima.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="what-we-offer">
                                        <div className="title">
                                            <h3>Naša Ponuda</h3>
                                        </div>
                                        <div className="text">
                                            <p>Kod nas učite da vozite sigurno, samouvjereno i uz puno praktičnog znanja. Pripremamo vas za sve izazove na putu, bez stresa i bez rizika.

</p>
                                        </div>
                                        <div className="what-we-offer__inner">
                                            <div className="row">

                                                <div className="col-xl-6">
                                                    <div className="single-what-we-offer">
                                                        <div className="top-box">
                                                            <div className="animated-arrow">
                                                                <div className="img1">
                                                                    <img src="assets/images/shapes/what-we-offer-shape1.png"
                                                                        alt="shape"/>
                                                                </div>
                                                                <div className="img2">
                                                                    <img src="assets/images/shapes/what-we-offer-shape2.png"
                                                                        alt="shape"/>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="count">
                                                                    <h4>01</h4>
                                                                </div>
                                                                <h3>Kompletna obuka</h3>
                                                            </div>
                                                        </div>
                                                        <div className="border-box"></div>
                                                        <div className="bottom-box">
                                                            <div className="text">
                                                                <p>
                                                                   Savladajte različite uslove vožnje kroz realistične situacije, bezbjedno i bez pritiska.

                                                                </p>
                                                            </div>
                                                            <div className="list-item">
                                                                <div className="title">
                                                                    <h4>Obuhvata</h4>
                                                                </div>
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Vožnja po svim vremenskim uslovima</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Noćna vožnja i izazovi slabije vidljivosti.</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="single-what-we-offer">
                                                        <div className="top-box">
                                                            <div className="animated-arrow">
                                                                <div className="img1">
                                                                    <img src="assets/images/shapes/what-we-offer-shape1.png"
                                                                        alt="shape"/>
                                                                </div>
                                                                <div className="img2">
                                                                    <img src="assets/images/shapes/what-we-offer-shape2.png"
                                                                        alt="shape"/>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="count">
                                                                    <h4>02</h4>
                                                                </div>
                                                                <h3>Teorijska Nastava
</h3>
                                                            </div>
                                                        </div>
                                                        <div className="border-box"></div>
                                                        <div className="bottom-box">
                                                            <div className="text">
                                                                <p>
                                                                    Važno je da poznajete pravila puta i kako funkcioniše vaše vozilo. Zato počinjemo od teorije.


                                                                </p>
                                                            </div>
                                                            <div className="list-item">
                                                                <div className="title">
                                                                    <h4>Obuhvata:</h4>
                                                                </div>
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Saobraćajni propisi i znakovi.</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Osnove mehanike i održavanja vozila.</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="single-what-we-offer">
                                                        <div className="top-box">
                                                            <div className="animated-arrow">
                                                                <div className="img1">
                                                                    <img src="assets/images/shapes/what-we-offer-shape1.png"
                                                                        alt="shape"/>
                                                                </div>
                                                                <div className="img2">
                                                                    <img src="assets/images/shapes/what-we-offer-shape2.png"
                                                                        alt="shape"/>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="count">
                                                                    <h4>03</h4>
                                                                </div>
                                                                <h3>Praktična Vožnja</h3>
                                                            </div>
                                                        </div>
                                                        <div className="border-box"></div>
                                                        <div className="bottom-box">
                                                            <div className="text">
                                                                <p>
                                                                    U realnim uslovima sa instruktorom pored vas, savladajte vožnju od osnovnih do naprednih veština.
                                                                </p>
                                                            </div>
                                                            <div className="list-item">
                                                                <div className="title">
                                                                    <h4>Obuhvata:</h4>
                                                                </div>
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Upravljanje i kontrola vozila.</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Snalaženje u saobraćaju i osnovne saobraćajne vještine.</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="single-what-we-offer">
                                                        <div className="top-box">
                                                            <div className="animated-arrow">
                                                                <div className="img1">
                                                                    <img src="assets/images/shapes/what-we-offer-shape1.png"
                                                                        alt="shape"/>
                                                                </div>
                                                                <div className="img2">
                                                                    <img src="assets/images/shapes/what-we-offer-shape2.png"
                                                                        alt="shape"/>
                                                                </div>
                                                            </div>
                                                            <div className="title-box">
                                                                <div className="count">
                                                                    <h4>04</h4>
                                                                </div>
                                                                <h3>Tehnike Vožnje</h3>
                                                            </div>
                                                        </div>
                                                        <div className="border-box"></div>
                                                        <div className="bottom-box">
                                                            <div className="text">
                                                                <p>
                                                                    Za one koji žele više – učimo vas kako da vozite kao pravi profesionalci.


                                                                </p>
                                                            </div>
                                                            <div className="list-item">
                                                                <div className="title">
                                                                    <h4>Obuhvata:</h4>
                                                                </div>
                                                                <ul className="clearfix">
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Kontrola upravljača i precizno skretanje.</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="icon">
                                                                            <i className="icon-check-1"></i>
                                                                        </div>
                                                                        <div className="text">
                                                                            <p>Pravilno ubrzavanje i kočenje za udobnu i sigurnu vožnju.</p>
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

                                    

                                    <div className="banner-box">
                                        <div className="title-box">
                                            <div className="icon">
                                                <span className="icon-enrollment"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h4>Savladajte puteve sa povjerenjem –
 <br/>upišite se na naš kurs vožnje.</h4>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one" href="#">
                                                <span className="txt">
                                                    Prijavi se sada
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}