'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"

export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <> 

            <section className="faq-style1">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4">
                            <div className="faq-style1__left-content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Faq’s</h4>
                                    </div>
                                    <h2>Answers to Common Queries</h2>
                                </div>
                                <div className="question-box">
                                    <div className="icon">
                                        <span className="icon-chat"><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span className="path5"></span>
                                        </span>
                                    </div>
                                    <div className="title">
                                        <h5>Have a Question on <br/>Mind?</h5>
                                        <p><a href="mailto:support@drivemaster.com">support@drivemaster.com</a></p>
                                    </div>
                                </div>

                                <div className="text-box">
                                    <p>We've answered all customer queries.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/faq"><i className="icon-next"></i>More Answers</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-8">
                            <div className="faq-style1__content">
                                <ul className="accordion-box-style1">
                                    
                                    <li className="accordion accordion-block">
                                        <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                            <h4>
                                                <span>Q1.</span> How are you different from other driving schools?
                                            </h4>
                                        </div>
                                        <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                            <div className="text">
                                                <p>
                                                    The wise man therefore always holds in these matters to this
                                                    principle of selection rejects pleasures to secure other greater
                                                    pleasures.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="accordion accordion-block">
                                        <div className={isActive.key == 2 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(2)}>
                                            <h4>
                                                <span>Q2.</span> Can I learn driving in my own car?
                                            </h4>
                                        </div>
                                        <div className={isActive.key == 2 ? "accord-content current" : "accord-content"}>
                                            <div className="text">
                                                <p>
                                                    The wise man therefore always holds in these matters to this
                                                    principle of selection rejects pleasures to secure other greater
                                                    pleasures.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="accordion accordion-block">
                                        <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                            <h4>
                                                <span>Q3.</span> Can I choose my own trainer for my training?
                                            </h4>
                                        </div>
                                        <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                            <div className="text">
                                                <p>
                                                    The wise man therefore always holds in these matters to this
                                                    principle of selection rejects pleasures to secure other greater
                                                    pleasures.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="accordion accordion-block">
                                        <div className={isActive.key == 4 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(4)}>
                                            <h4>
                                                <span>Q4.</span> Where are you located?
                                            </h4>
                                        </div>
                                        <div className={isActive.key == 4 ? "accord-content current" : "accord-content"}>
                                            <div className="text">
                                                <p>
                                                    The wise man therefore always holds in these matters to this
                                                    principle of selection rejects pleasures to secure other greater
                                                    pleasures.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="accordion accordion-block">
                                        <div className={isActive.key == 5 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(5)}>
                                            <h4>
                                                <span>Q5.</span> What type of cars does Drive Master use?
                                            </h4>
                                        </div>
                                        <div className={isActive.key == 5 ? "accord-content current" : "accord-content"}>
                                            <div className="text">
                                                <p>
                                                    The wise man therefore always holds in these matters to this
                                                    principle of selection rejects pleasures to secure other greater
                                                    pleasures.
                                                </p>
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
