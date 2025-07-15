'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function Blog_Page_One() {
    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle2="2 Columns Grid">
                <section className="blog-style3">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-1.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-1.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>05 Apr, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Driving Tips</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>D.Ebenezer</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>3 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>5 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Top 10 Tips for Passing Your Road Test in First Attempt.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-2.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-2.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>22 Mar, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Safety Tips</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>K.Milton</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>2 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>3 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Navigating Roundabouts: A Beginner's Guide.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-3.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-3.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>16 Feb, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Driving Test</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>J.Beckham</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>4 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>10 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Choosing the Right Car for Your Teen Driver Safety.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <a className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-4.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-4.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>05 Apr, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Driving Test</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>D.Ebenezer</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>3 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>5 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Top 10 Tips for Passing Your Road Test in First Attempt.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-5.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-5.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>22 Mar, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Safety Tips</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>K.Milton</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>2 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>3 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Navigating Roundabouts: A Beginner's Guide.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-6">
                                <div className="single-blog-style3-outer single-blog-style3-outer--1">
                                    <div className="blog-style3__img">
                                        <div className="inner">
                                            <img src="assets/images/blog/blog-1-6.jpg" alt="Awesome Image"/>
                                            <div className="blog-style3__overlay-icon">
                                                <Link className="lightbox-image" data-fancybox="gallery"
                                                    href="assets/images/blog/blog-1-6.jpg">
                                                    <i className="icon-zoom"></i>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="blog-style3__overlay-content">
                                            <div className="date-box">
                                                <h6>16 Feb, 24</h6>
                                            </div>
                                            <div className="category">
                                                <h5>Driving Test</h5>
                                            </div>
                                            <div className="meta-box">
                                                <ul className="meta-info clearfix">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-user"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>J.Beckham</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-stopwatch"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>4 Mins Read</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="icon-chatting"></i>
                                                        </div>
                                                        <div className="text">
                                                            <p>10 Comments</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-style3__title">
                                        <h3>
                                            <Link href="/blog-single">
                                                Choosing the Right Car for Your Teen Driver Safety.
                                            </Link>
                                        </h3>
                                        <div className="btn-box">
                                            <Link className="thm-btn3" href="/blog-single">
                                                <i className="icon-next"></i>Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12">
                                <ul className="styled-pagination pdtop30 clearfix text-center">
                                    <li className="arrow prev">
                                        <Link href="#"><span className="icon-next left"></span></Link>
                                    </li>
                                    <li className="active"><Link href="#">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li><Link href="#">3</Link></li>
                                    <li className="arrow next">
                                        <Link href="#"><span className="icon-next right"></span></Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}