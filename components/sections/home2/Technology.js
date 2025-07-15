'use client'
import React from 'react'
import Link from "next/link"

export default function Technology() {
    return (
        <> 

            <section className="technology-style1">
                <div className="technology-style1__top-title">
                    <ul className="clearfix marquee_mode">
                        <li>Simulator</li>
                        <li>Simulator</li>
                        <li>Simulator</li>
                    </ul>
                </div>
                <div className="technology-style1__bottom-title">
                    <ul className="clearfix marquee_mode-right">
                        <li>Driving</li>
                        <li>Driving</li>
                        <li>Driving</li>
                    </ul>
                </div>
                <div className="technology-style1__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/technology-v1-1.jpg)" }}>
                </div>
                <div className="container">
                    <div className="technology-style1__content">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h4>Technology</h4>
                            </div>
                            <h2>Simulated Driving Experiences</h2>
                        </div>
                        <div className="text">
                            <p>Obligations of business it will frequently occur that pleasures have to be repudiated and
                                annoyances acceptedselection.</p>
                        </div>
                        <div className="technology-style1__content-list">
                            <div className="row">

                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="technology-style1__single-list">
                                        <div className="icon">
                                            <span className="icon-check"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-3">Risk-Free Environment</Link></h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <div className="text-box">
                                            <p>Leaners interact with virtual environments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="technology-style1__single-list">
                                        <div className="icon">
                                            <span className="icon-check"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-3">Cost-Effective Training</Link></h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <div className="text-box">
                                            <p>Reduces expenses on-road training sessions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="technology-style1__single-list">
                                        <div className="icon">
                                            <span className="icon-check"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-3">Immersive Training Experience</Link></h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <div className="text-box">
                                            <p>Highly immersive training experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="technology-style1__single-list">
                                        <div className="icon">
                                            <span className="icon-check"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-3">Safety Enhancement</Link></h3>
                                        </div>
                                        <div className="border-line"></div>
                                        <div className="text-box">
                                            <p>Develop awareness and decision making skills.</p>
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
