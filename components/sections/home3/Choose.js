'use client'
import React from 'react'
import Link from "next/link"

export default function Choose() {
    return (
        <> 

            <section className="choose-style2">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>ZAŠTO IZABRATI NAS</h4>
                        </div>
                        <h2>Razlozi zbog kojih nam kandidati vjeruju</h2>
                    </div>
                    <div className="choose-style2__content">
                        <div className="row">
                            <div className="col-xl-3">
                                <ul>
                                    <li>
                                        <div className="single-choose-style2-box">
                                            <div className="text-box">
                                                <div className="icon">
                                                    <span className="icon-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span>
                                                    </span>
                                                </div>
                                                <h3><Link href="/services-details">Licencirani instruktori</Link></h3>
                                                <p>Naši instruktori posjeduju sve neophodne dozvole i bogato iskustvo.</p>
                                            </div>
                                            <div className="round-box">
                                                <span></span>
                                            </div>
                                            <div className="arrow-box left">
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-choose-style2-box">
                                            <div className="text-box">
                                                <div className="icon">
                                                    <span className="icon-schedule"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                </div>
                                                <h3><Link href="/services-details">Fleksibilni termini</Link></h3>
                                                <p>Prilagođavamo se vašem rasporedu – bilo da ste student, zaposleni ili imate nepredvidive obaveze.</p>
                                            </div>
                                            <div className="round-box">
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xl-6">
                                <div className="choose-style2__img">
                                    <div className="inner rotatescale2">
                                        <img className="float-bob-y" src="assets/images/resources/volan golfica.png" alt=""/>
                                    </div>
                                    <div className="big-text">Auto škola<br/> Mirav</div>
                                </div>
                            </div>

                            <div className="col-xl-3">
                                <ul>
                                    <li>
                                        <div className="single-choose-style2-box single-choose-style2-box--1">
                                            <div className="text-box">
                                                <div className="icon">
                                                    <span className="icon-taxi-driver"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span>
                                                    </span>
                                                </div>
                                                <h3><Link href="/services-details">Iskustvo koje se osjeti</Link></h3>
                                                <p>Više od broja časova – kod nas dobijate znanje iz prve ruke. Pristup baziran na realnim situacijama pomaže da se pripremite za sve izazove.</p>
                                            </div>
                                            <div className="round-box round-box--1">
                                                <span></span>
                                            </div>
                                            <div className="arrow-box">
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-choose-style2-box single-choose-style2-box--1">
                                            <div className="text-box">
                                                <div className="icon">
                                                    <span className="icon-receipt"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span>
                                                    </span>
                                                </div>
                                                <h3><Link href="/services-details">Cijene koje prate kvalitet</Link></h3>
                                                <p>Pružamo vrhunsku obuku po pristupačnim cijenama. Jasna struktura bez skrivenih troškova.</p>
                                            </div>
                                            <div className="round-box round-box--1">
                                                <span></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
