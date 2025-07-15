'use client'
import React from 'react'
import Link from "next/link"

export default function Blog() {
    return (
        <> 

            <section className="blog-style3">
                <div className="container">
                    <div className="blog-style3__top">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h4>Blog Post</h4>
                            </div>
                            <h2>Latest from Blog Post</h2>
                        </div>
                        <div className="btn-box">
                            <Link className="btn-one" href="/blog-single">
                                <span className="txt">
                                    View All Post
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xl-6">
                            
                            <div className="single-blog-style3-outer">
                                <div className="blog-style3__img">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-v3-1.jpg" alt="Awesome Image"/>
                                        <div className="blog-style3__overlay-icon">
                                            <Link className="lightbox-image" data-fancybox="gallery"
                                                href="assets/images/blog/blog-v3-1.jpg">
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
                            <ul className="blog-style3__content clearfix">
                                
                                <li className="single-blog-style3">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single-blog-style3-img">
                                                <img src="assets/images/blog/blog-v3-2.jpg" alt="image"/>
                                                <div className="date-box">
                                                    <p>22 Mar, 24</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8">
                                            <div className="single-blog-style3-content">
                                                <div className="category">
                                                    <h6>Safety Tips</h6>
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
                                                    </ul>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/blog-single">Navigating Roundabouts: A Beginner's
                                                            Guide.</Link></h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/blog-single">
                                                        <i className="icon-next"></i>Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="single-blog-style3">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single-blog-style3-img">
                                                <img src="assets/images/blog/blog-v3-3.jpg" alt="image"/>
                                                <div className="date-box">
                                                    <p>16 Feb, 24</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8">
                                            <div className="single-blog-style3-content">
                                                <div className="category">
                                                    <h6>Driving Tips</h6>
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
                                                    </ul>
                                                </div>
                                                <div className="title-box">
                                                    <h3><Link href="/blog-single">Choosing the Right Car for Your Teen
                                                            Driver.</Link></h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/blog-single">
                                                        <i className="icon-next"></i>Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li className="single-blog-style3">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="single-blog-style3-img">
                                                <img src="assets/images/blog/blog-v3-4.jpg" alt="image"/>
                                                <div className="date-box">
                                                    <p>15 Jan, 24</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-8 col-md-8">
                                            <div className="single-blog-style3-content">
                                                <div className="category">
                                                    <h6>Licence</h6>
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
                                                    </ul>
                                                </div>
                                                <div className="title-box">
                                                    <h3>
                                                        <Link href="/blog-single">
                                                            Convert Your International Driving Licence in USA.
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/blog-single">
                                                        <i className="icon-next"></i>Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
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
