'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Courses() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <> 

            <section className="courses-style1">
                <div className="container">
                    <div className="courses-style1__tab">
                        <div className="row">

                            <div className="col-xl-4">
                                <div className="courses-style1__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h4>Obuka vožnje</h4>
                                        </div>
                                        <h2>Spremni za vožnju?</h2>
                                    </div>
                                    <div className="courses-style1__tab-btn">
                                        <ul className="tabs-button-box clearfix">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                <h4>B kategorija <br/>Kompletna obuka</h4>
                                            </li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                <h4>Teorijska obuka - uključena</h4>
                                            </li>
                                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                <h4>Praktična vožnja <br/>Individualna nastava</h4>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-box">
                                        <p>Sve na jednom mjestu – teorija, praksa i podrška do polaganja.!</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/o-nama"><i className="icon-next"></i>Saznaj više o nama</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8">
                                <div className="tabs-content-box">
                                    <div className={activeIndex === 1 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                        <div className="courses-style1-tab-content-box-item">
                                            <div className="courses-style1__img clearfix">
                                                <img src="assets/images/resources/Mirav-2096_compressed.webp" alt="Image"/>
                                                <div className="courses-style1__img-overlay-title">
                                                    <h3>B kategorija</h3>
                                                </div>
                                                <div className="price-box">
                                                    <h3><sup>€</sup>870<sub>/ Obuka</sub></h3>
                                                </div>
                                            </div>
                                            <div className="courses-style1-img-outer">
                                                <div className="courses-style1-img-outer__left">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>40 Časova</span><br/>Teorijska nastava</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>30 sati</span><br/>Praktična vožnja</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="courses-style1-img-outer__right">
                                                    <div className="btn-box">
                                                        <Link href="/kontakt"><i className="icon-next"></i></Link>
                                                        <h6>Postani vozač</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={activeIndex === 2 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                        <div className="courses-style1-tab-content-box-item">
                                            <div className="courses-style1__img clearfix">
                                                <img src="assets/images/resources/Teorija.webp" alt="Image"/>
                                                <div className="courses-style1__img-overlay-title">
                                                    <h3>Termine nastave maksimalno usklađujemo sa vašim slobodnim vremenom.</h3>
                                                </div>
                                                <div className="price-box">
                                                    <h3><sup>€</sup>870<sub>/ Obuka</sub></h3>
                                                </div>
                                            </div>
                                            <div className="courses-style1-img-outer">
                                                <div className="courses-style1-img-outer__left">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>40 Časova</span><br/>Teorijska nastava</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>30 sati</span><br/>Praktična vožnja</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="courses-style1-img-outer__right">
                                                    <div className="btn-box">
                                                        <Link href="/kontakt"><i className="icon-next"></i></Link>
                                                        <h6>Postani Vozač<br/></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={activeIndex === 3 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                        <div className="courses-style1-tab-content-box-item">
                                            <div className="courses-style1__img clearfix">
                                                <img src="assets/images/resources/prakticnavoznja.jpg" alt="Image"/>
                                                <div className="courses-style1__img-overlay-title">
                                                    <h3>Najbitniji segment obuke vozača svakako jeste praktična obuka<br></br> upravljanja vozilom u saobraćaju.</h3>
                                                </div>
                                                <div className="price-box">
                                                    <h3><sup>€</sup>870<sub>/  Obuka</sub></h3>
                                                </div>
                                            </div>
                                            <div className="courses-style1-img-outer">
                                                <div className="courses-style1-img-outer__left">
                                                    <ul className="clearfix">
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>40 časova</span><br/> Teorijske nastave</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>30 sati</span><br/>  Praktične vožnje</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="courses-style1-img-outer__right">
                                                    <div className="btn-box">
                                                        <Link href="/kontakt"><i className="icon-next"></i></Link>
                                                        <h6>Postani <br/>Vozač</h6>
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

        </>
    )
}
