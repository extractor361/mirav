'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Location() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <> 

            <section className="lacation-style1">
                <div className="lacation-style1__map">
                    
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps?q=VOJINA+KATNI%C4%86A+21/1,+PODGORICA,+Montenegro&output=embed" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    
                </div>
                <div className="container">
                    <div className="lacation-style1__tab">

                        <div className="tabs-content-box">
                            
                            <div className={activeIndex === 1 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                <div className="lacation-style1-tab-content-box-item">
                                    <div className="lacation-style1__inner">
                                        
                                        <div className="single-lacation-box">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box two active">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                            <div className="overlay-content">
                                                <h4>Auto Škola mirav</h4>
                                                <p>VOJINA KATNIĆA BR. 21/1<br/>, PODGORICA, Crna Gora</p>
                                                <div className="btn-box">
                                                    <Link
                                                        href="https://www.google.com/maps/search/26+Maggie+Street,+Little+South+Slope,+NY+12115./@40.661665,-73.9985044,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">
                                                        <span className="icon-next"></span>
                                                        Google Mapa
                                                    </Link>
                                                </div>
                                                <div className="phn-number">
                                                    <Link href="tel:+38268444101">
                                                        <span className="icon-dial-pad"></span>
                                                        +382 068444101
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box three">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box four">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box five">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box six">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                        <div className="single-lacation-box seven">
                                            <div className="icon">
                                                <span className="icon-place"></span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            

                            
                            

                            

                            
                            

                            

                            
                            
                            

                        </div>

                        <div className="lacation-style1__tab-button">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>Postani vozač</h4>
                                </div>
                                <h2>Postani Vozač Uz Auto Školu Mirav</h2>
                            </div>
                            <div className="text">
                                <p>Više od 2000 vozača obučeno uz savremenu obuku, stručne instruktore i moderan vozni park.</p>
                            </div>
                            <div className="tab-btn-box shadow-scroll-x">
                                <ul className="tabs-button-box clearfix">
                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                        <h6>Vojina Katnića 21/1, Podgorica 81000</h6>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="btn-box">
                                <Link className="btn-one" href="#main">
                                    <span className="txt">
                                        Zakaži Termin
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
