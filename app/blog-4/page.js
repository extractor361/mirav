'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
export default function Blog_Page_Four() {
    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Small Image">
                <section class="blog-page-two">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-4 col-lg-5 order222">
                                <div class="sidebar-box-style2 sidebar-box-style2--2">
                                    <div class="sidebar-search-box-one">
                                        <form class="search-form" action="#">
                                            <input placeholder="Search..." type="text"/>
                                            <button type="submit">
                                                <i class="icon-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <div class="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Categories</h3>
                                        </div>
                                        <div class="sidebar-categories-box">
                                            <ul class="list-item clearfix">
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Driving Tips</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>10</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Safety Tips</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>14</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Driving Test</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>06</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Regulations</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>03</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Community Events</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>08</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="title">
                                                        <div class="icon">
                                                            <i class="icon-double-chevron"></i>
                                                            <i class="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Maintenance</Link>
                                                    </div>
                                                    <div class="count">
                                                        <h6>02</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <div class="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div class="sidebar-blog-post">
                                            <ul class="list-item clearfix">
                                                <li>
                                                    <div class="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-1.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div class="content-box">
                                                        <div class="category">
                                                            <h6>Driving Tips</h6>
                                                        </div>
                                                        <div class="title">
                                                            <h3>
                                                                <Link href="/blog-single">Top 10 Tips for Passing Your Road
                                                                    Test.</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-2.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div class="content-box">
                                                        <div class="category">
                                                            <h6>Safety Tips</h6>
                                                        </div>
                                                        <div class="title">
                                                            <h3>
                                                                <Link href="/blog-single">Navigating Roundabouts: A Beginner's
                                                                    Guide.</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-3.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div class="content-box">
                                                        <div class="category">
                                                            <h6>Maintenance</h6>
                                                        </div>
                                                        <div class="title">
                                                            <h3>
                                                                <Link href="/blog-single">Mastering Maintenance: Your Guide to
                                                                    Car Care</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="single-sidebar-box">
                                        <div class="sidebar-title">
                                            <div class="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div class="sidebar-blog-tag">
                                            <ul class="clearfix">
                                                <li><Link href="#">Activities</Link></li>
                                                <li><Link href="#">Cars</Link></li>
                                                <li><Link href="#">Challenges</Link></li>
                                                <li><Link href="#">Courses</Link></li>
                                                <li><Link href="#">Instructors</Link></li>
                                                <li><Link href="#">Teen Drivers</Link></li>
                                                <li><Link href="#">Traffic Signs</Link></li>
                                                <li><Link href="#">Training</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="banner-style1 banner-style1--1">
                                        <div class="banner-style1__bg"
                                            style={{ backgroundImage: "url(assets/images/resources/banner-style1-1.jpg)" }}>
                                        </div>
                                        <div class="banner-style1___inner text-center">
                                            <div class="title-box">
                                                <h4>Discover Road to</h4>
                                                <h2>learn Driving</h2>
                                            </div>
                                            <ul class="list-item clearfix">
                                                <li>
                                                    <h6>safe</h6>
                                                </li>
                                                <li>
                                                    <h6>Reliable</h6>
                                                </li>
                                                <li>
                                                    <h6>Protected</h6>
                                                </li>
                                            </ul>
                                            <div class="content-box">
                                                <h4>
                                                    <i class="icon-dial-pad"></i>
                                                    <Link href="tel:66120003456">+66 12 000 3456</Link>
                                                </h4>
                                                <p>Drive Your Questions to Us Contact Our Experts Now!</p>
                                                <div class="btn-box">
                                                    <Link class="btn-one" href="#">
                                                        <span class="txt">
                                                            Start to Learn
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-8 col-lg-7 order111">
                                <ul class="blog-style2__inner pdt0">

                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-1.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>05 Apr, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Driving Tips</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>D.Ebenezer</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>3 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Top 10 Tips for Passing Your Road
                                                                Test.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>Business will frequently occur that pleasures have to be
                                                            repudiated...</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-2.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>22 Mar, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Safety Tips</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>K.Milton</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>2 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Navigating Roundabouts: A Beginner's
                                                                Guide.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>Matters to this principle of selection rejects pleasures secure other
                                                            greater....</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-3.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>22 Mar, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Driving Test</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>J.Beckham</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>4 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Choosing the Right Car for Your Teen
                                                                Driver.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>The wise man therefore always holds these matters to this
                                                            principle...</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-4.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>05 Apr, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Driving Tips</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>D.Ebenezer</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>3 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Top 10 Tips for Passing Your Road
                                                                Test.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>Business will frequently occur that pleasures have to be
                                                            repudiated...</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-5.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>22 Mar, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Safety Tips</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>K.Milton</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>2 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Navigating Roundabouts: A Beginner's
                                                                Guide.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>Matters to this principle of selection rejects pleasures secure other
                                                            greater....</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="blog-style2__single">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-img">
                                                    <img src="assets/images/blog/blog-page2-6.jpg" alt="image"/>
                                                    <div class="date-box">
                                                        <p>22 Mar, 24</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="blog-style2__single-content blog-style2__single-content--2">
                                                    <div class="blog-style2__single-content-top">
                                                        <div class="category">
                                                            <h6>Driving Test</h6>
                                                        </div>
                                                        <div class="meta-box">
                                                            <ul class="meta-info clearfix">
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-user"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>J.Beckham</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="icon">
                                                                        <i class="icon-stopwatch"></i>
                                                                    </div>
                                                                    <div class="text">
                                                                        <p>4 Mins Read</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="title-box">
                                                        <h3><Link href="/blog-single">Choosing the Right Car for Your Teen
                                                                Driver.</Link></h3>
                                                    </div>
                                                    <div class="text-box">
                                                        <p>The wise man therefore always holds these matters to this
                                                            principle...</p>
                                                    </div>
                                                    <div class="btn-box">
                                                        <Link class="thm-btn3" href="/blog-single">
                                                            <i class="icon-next"></i>Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="col-xl-12">
                                    <ul class="styled-pagination pdtop60 clearfix text-center">
                                        <li class="arrow prev">
                                            <Link href="#"><span class="icon-next left"></span></Link>
                                        </li>
                                        <li class="active"><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li class="arrow next">
                                            <Link href="#"><span class="icon-next right"></span></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}