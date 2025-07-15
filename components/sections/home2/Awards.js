'use client'
import React from 'react'
import Link from "next/link"

export default function Awards() {
    return (
        <> 

            <section className="awards-style1">
                <div className="container">
                    <div className="awards-style1__inner">
                        <div className="awards-style1__title">
                            <div className="top-title">
                                <div className="icon">
                                    <span className="icon-license"><span className="path1"></span><span className="path2"></span><span
                                            className="path3"></span><span className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span className="path8"></span><span
                                            className="path9"></span><span className="path10"></span></span>
                                </div>
                                <h3>
                                    Proud<br/> Achievements
                                </h3>
                            </div>
                            <div className="text">
                                <p>08 Prestigious Awards Achieved.</p>
                            </div>
                        </div>

                        <div className="awards-style1__content">
                            <ul className="clearfix">
                                <li>
                                    <div className="single-awards-style1-box">
                                        <Link href="/about">
                                            <img src="assets/images/resources/award-1.png" alt=""/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-awards-style1-box">
                                        <Link href="/about">
                                            <img src="assets/images/resources/award-2.png" alt=""/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-awards-style1-box">
                                        <Link href="/about">
                                            <img src="assets/images/resources/award-3.png" alt=""/>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-awards-style1-box">
                                        <Link href="/about">
                                            <img src="assets/images/resources/award-4.png" alt=""/>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
