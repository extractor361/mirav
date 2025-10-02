'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function Faq_Page() {

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

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq’s">
                <section className="faq-page-one">
                    <div className="container">
                        <div className="faq-page-one__tab">
                            <div className="row">

                                <div className="col-xl-3">
                                    <div className="faq-page-one__content">
                                        <div className="faq-page-one__tab-btn">
                                            <ul className="tabs-button-box clearfix">
                                                <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                    <div className="title">
                                                        <p>General</p>
                                                        <div className="icon">
                                                            <i className="icon-next"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                    <div className="title">
                                                        <p>Enrollment Process</p>
                                                        <div className="icon">
                                                            <i className="icon-next"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                    <div className="title">
                                                        <p>Driving Lessons</p>
                                                        <div className="icon">
                                                            <i className="icon-next"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                    <div className="title">
                                                        <p>Payment</p>
                                                        <div className="icon">
                                                            <i className="icon-next"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn-item active-btn" : "tab-btn-item"}>
                                                    <div className="title">
                                                        <p>Licensing</p>
                                                        <div className="icon">
                                                            <i className="icon-next"></i>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="question-box">
                                            <div className="icon">
                                                <span className="icon-chat"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span>
                                                </span>
                                            </div>
                                            <div className="title">
                                                <h5>Have a Question on <br/>Mind?</h5>
                                                <p><Link href="mailto:support@drivemaster.com">support@drivemaster.com</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-9">
                                    <div className="tabs-content-box">
                                        

                                        <div className={activeIndex === 1 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                            <div className="faq-page-one__content-tab-item">
                                                <div className="faq-style1__content faq-style1__content--style2">
                                                    <ul className="accordion-box-style1">
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                                                <h4>
                                                                    <span>Q1.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                                                <h4>
                                                                    <span>Q3.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                                <h4>
                                                                    <span>Q6.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 6 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 7 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(7)}>
                                                                <h4>
                                                                    <span>Q7.</span> Can I learn driving in my own car?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 7 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 8 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(8)}>
                                                                <h4>
                                                                    <span>Q8.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 8 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 9 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(9)}>
                                                                <h4>
                                                                    <span>Q9.</span> Where are you located?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 9 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 10 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(10)}>
                                                                <h4>
                                                                    <span>Q10.</span> What type of cars does Drive Master use?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 10 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className={activeIndex === 2 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                            <div className="faq-page-one__content-tab-item">
                                                <div className="faq-style1__content faq-style1__content--style2">
                                                    <ul className="accordion-box-style1">
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                                                <h4>
                                                                    <span>Q1.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                                                <h4>
                                                                    <span>Q3.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                                <h4>
                                                                    <span>Q6.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 6 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 7 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(7)}>
                                                                <h4>
                                                                    <span>Q7.</span> Can I learn driving in my own car?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 7 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 8 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(8)}>
                                                                <h4>
                                                                    <span>Q8.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 8 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 9 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(9)}>
                                                                <h4>
                                                                    <span>Q9.</span> Where are you located?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 9 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 10 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(10)}>
                                                                <h4>
                                                                    <span>Q10.</span> What type of cars does Drive Master use?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 10 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className={activeIndex === 3 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                            <div className="faq-page-one__content-tab-item">
                                                <div className="faq-style1__content faq-style1__content--style2">
                                                    <ul className="accordion-box-style1">
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                                                <h4>
                                                                    <span>Q1.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                                                <h4>
                                                                    <span>Q3.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                                <h4>
                                                                    <span>Q6.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 6 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 7 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(7)}>
                                                                <h4>
                                                                    <span>Q7.</span> Can I learn driving in my own car?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 7 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 8 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(8)}>
                                                                <h4>
                                                                    <span>Q8.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 8 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 9 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(9)}>
                                                                <h4>
                                                                    <span>Q9.</span> Where are you located?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 9 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 10 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(10)}>
                                                                <h4>
                                                                    <span>Q10.</span> What type of cars does Drive Master use?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 10 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className={activeIndex === 4 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                            <div className="faq-page-one__content-tab-item">
                                                <div className="faq-style1__content faq-style1__content--style2">
                                                    <ul className="accordion-box-style1">
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                                                <h4>
                                                                    <span>Q1.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                                                <h4>
                                                                    <span>Q3.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                                <h4>
                                                                    <span>Q6.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 6 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 7 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(7)}>
                                                                <h4>
                                                                    <span>Q7.</span> Can I learn driving in my own car?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 7 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 8 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(8)}>
                                                                <h4>
                                                                    <span>Q8.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 8 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 9 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(9)}>
                                                                <h4>
                                                                    <span>Q9.</span> Where are you located?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 9 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 10 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(10)}>
                                                                <h4>
                                                                    <span>Q10.</span> What type of cars does Drive Master use?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 10 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <div className={activeIndex === 5 ? "tab-content-box-item active-tab" : "tab-content-box-item"}>
                                            <div className="faq-page-one__content-tab-item">
                                                <div className="faq-style1__content faq-style1__content--style2">
                                                    <ul className="accordion-box-style1">
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                                                <h4>
                                                                    <span>Q1.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 1 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                                                <h4>
                                                                    <span>Q3.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 3 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
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
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                                <h4>
                                                                    <span>Q6.</span> How are you different from other driving
                                                                    schools?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 6 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 7 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(7)}>
                                                                <h4>
                                                                    <span>Q7.</span> Can I learn driving in my own car?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 7 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 8 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(8)}>
                                                                <h4>
                                                                    <span>Q8.</span> Can I choose my own trainer for my
                                                                    training?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 8 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 9 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(9)}>
                                                                <h4>
                                                                    <span>Q9.</span> Where are you located?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 9 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li className="accordion accordion-block">
                                                            <div className={isActive.key == 10 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(10)}>
                                                                <h4>
                                                                    <span>Q10.</span> What type of cars does Drive Master use?
                                                                </h4>
                                                            </div>
                                                            <div className={isActive.key == 10 ? "accord-content current" : "accord-content"}>
                                                                <div className="text">
                                                                    <p>
                                                                        The wise man therefore always holds in these matters to
                                                                        this principle of selection rejects pleasures to secure
                                                                        other greater pleasures.
                                                                    </p>
                                                                </div>
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
                    </div>
                </section>
            </Layout>
        </div>
    )
}