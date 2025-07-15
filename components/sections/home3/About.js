'use client'
import React from 'react'
import Link from "next/link"
import CircleText from "../../../components/elements/CircleText"

export default function About() {
    return (
        <> 

            <section className="about-style3">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-6">
                            <div className="about-style3__img">
                                <div className="inner">
                                    <img src="assets/images/resources/micko.jpeg" alt="Image"/>
                                </div>
                                <div className="logo-box">
                                    <img src="assets/images/resources/nagrada.png" alt="logo"/>
                                </div>
                                <div className="img-car wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2000ms">
                                    <img className="float-bob-y" src="assets/images/resources/golf 8 cherry.png" alt="Car"/>
                                </div>
                                <div className="about-style3__curved-circle-outer">
                                    <div className="about-style3__curved-circle">
                                        <CircleText text="Obučavamo sa povjerenjem. Vozimo ka uspjehu.  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" radius={170} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-style3__content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>O nama</h4>
                                    </div>
                                    <h2>Iskustvo, kvalitet i povjerenje u edukaciji vozača</h2>
                                </div>
                                <div className="text1">
                                    <p>
                                        Vozačka dozvola je važan korak ka samostalnosti. Naša auto-škola već godinama gradi reputaciju kroz profesionalan pristup, kvalitetnu nastavu i visok nivo prolaznosti. Posvećeni smo svakom kandidatu i vjerujemo da se sigurnost na putu uči – odgovorno i temeljno.
                                    </p>
                                </div>

                                <div className="history-box">
                                    <div className="icon">
                                        <span className="icon-history"><span className="path1"></span><span
                                                className="path2"></span><span className="path3"></span><span
                                                className="path4"></span><span className="path5"></span><span
                                                className="path6"></span><span className="path7"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h3>Naša Priča</h3>
                                        <p>Auto škola Mirav – Više od vožnje.</p>
                                    </div>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-wing"></span>
                                            </div>
                                            <div className="text">
                                                <p>Osnovani 2005. godine</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-wing"></span>
                                            </div>
                                            <div className="text">
                                                <p>Proširili usluge 2008.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-wing"></span>
                                            </div>
                                            <div className="text">
                                                <p> Ključna prekretnica u 2012.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-box">
                                                <span className="icon-wing"></span>
                                            </div>
                                            <div className="text">
                                                <p>Od 2015. omogućavamo i online obuku</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/about">
                                            <span className="txt">
                                                Saznaj više
                                            </span>
                                        </Link>
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
