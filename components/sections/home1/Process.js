'use client'
import React from 'react'
import Link from "next/link"

export default function Process() {
    return (
        <> 

            <section className="process-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>PROCES</h4>
                        </div>
                        <h2>Put do vozačke dozvole</h2>
                    </div>
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-process-style1 text-center">
                                <div className="number-box">
                                    <div className="count">
                                        <h4>01</h4>
                                    </div>
                                    <div className="count-shape1">
                                        <img style={{filter: 'hue-rotate(107deg)' }} src="assets/images/shapes/process-v1-shape1.png" alt="shape"/>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="/courses-details">Prijava</Link></h3>
                                    <p>Jednostavan proces prijave – registrujte se za časove vožnje..</p>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-enrollment"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-process-style1 single-process-style1--style2 text-center">
                                <div className="icon-box">
                                    <span className="icon-meeting"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="/courses-details">Teorijska nastava</Link></h3>
                                    <p>Stručno vođenje i savladavanje saobraćajnih pravila.</p>
                                </div>
                                <div className="number-box">
                                    <div className="count count--1">
                                        <h4>02</h4>
                                    </div>
                                    <div className="count-shape1">
                                        <img style={{filter: 'hue-rotate(107deg)' }} src="assets/images/shapes/process-v1-shape2.png" alt="shape"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-process-style1 text-center">
                                <div className="number-box">
                                    <div className="count">
                                        <h4>03</h4>
                                    </div>
                                    <div className="count-shape1">
                                        <img style={{filter: 'hue-rotate(107deg)' }} src="assets/images/shapes/process-v1-shape1.png" alt="shape"/>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="/courses-details">Praktična obuka</Link></h3>
                                    <p>Detaljna obuka u vožnji prilagođena vašim potrebama.</p>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-driving"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="single-process-style1 single-process-style1--style2 text-center">
                                <div className="icon-box">
                                    <span className="icon-driving-license"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span><span
                                            className="path10"></span><span className="path11"></span><span className="path12"></span>
                                    </span>
                                </div>
                                <div className="content-box">
                                    <h3><Link href="/courses-details">Polaganje i dozvola</Link></h3>
                                    <p>Nakon završene obuke, polaže se ispit za dobijanje vozačke dozvole.</p>
                                </div>
                                <div className="number-box">
                                    <div className="count count--1">
                                        <h4>04</h4>
                                    </div>
                                    <div className="count-shape1">
                                        <img style={{filter: 'hue-rotate(107deg)' }} src="assets/images/shapes/process-v1-shape2.png" alt="shape"/>
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
                                Započnite svoje putovanje online upisom.
                                <Link href="/kontakt"><i className="icon-next"></i>Prijavi se sada</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
