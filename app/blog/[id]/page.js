// app/blog/[id]/page.js
import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import parse from 'html-react-parser';


const API_URL = "https://miravapibackend.online/api";

async function fetchNovost(id) {
  const res = await fetch(`${API_URL}/dohvatiNovost/${id}`, {
    next: { revalidate: 60 }, // opcionalno ISR, osveži na 60 sekundi
  });

  if (!res.ok) {
    throw new Error("Greška pri dohvatanju novosti");
  }

  return res.json();
}

export default async function BlogSinglePage({ params }) {
  const { id } = params;

  let novost;
  try {
    novost = await fetchNovost(id);
  } catch (error) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle2={novost.naslov}>
        <div className="container">
          <h2>Novost nije pronađena ili došlo je do greške.</h2>
          <Link href="/blog-single">Nazad na Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <div className="page-wrapper boxed_wrapper course-details-page">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle2={novost.naslov}>
        <section className="blog-page-three">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-page-three-content">
                  {novost.slika && (
                    <div className="img-box">
                      <img
                        src={`https://miravapibackend.online/slike/${novost.slika}`}
                        alt={novost.naslov}
                      />
                    </div>
                  )}
                  <div className="text-box1">
                    <h2>{novost.naslov}</h2>
                    <p>{parse(novost.sadrzaj)}
</p>
                  </div>

                  <div className="blog-post-tag2">
                    <div className="title">
                      <div className="icon">
                        <img src="/assets/images/icon/post-tags-icon1.png" alt="icon" />
                      </div>
                      <h4>Tagovi</h4>
                    </div>
                    {/* Možeš dodati tagove ako ih imaš u API-ju */}
                  </div>

                  <div className="back-to-blog-post-btn">
                    <Link href="/blog-single">
                      <span className="icon-menu"></span>Nazad na objave
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ovdje možeš dodati komentar ili sidebar ako želiš */}
<div className="col-xl-4 col-lg-5">
                                <div className="sidebar-box-style2">
                                    <div className="sidebar-search-box-one">
                                        <form className="search-form" action="#">
                                            <input placeholder="Search..." type="text"/>
                                            <button type="submit">
                                                <i className="icon-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="sidebar-categories-box">
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Driving Tips</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>10</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Safety Tips</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>14</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Driving Test</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>06</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Regulations</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>03</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Community Events</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>08</h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="title">
                                                        <div className="icon">
                                                            <i className="icon-double-chevron"></i>
                                                            <i className="icon-double-chevron icon2"></i>
                                                        </div>
                                                        <Link href="#">Maintenance</Link>
                                                    </div>
                                                    <div className="count">
                                                        <h6>02</h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div className="sidebar-blog-post">
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <div className="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-1.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div className="content-box">
                                                        <div className="category">
                                                            <h6>Driving Tips</h6>
                                                        </div>
                                                        <div className="title">
                                                            <h3>
                                                                <Link href="/blog-single">Top 10 Tips for Passing Your Road
                                                                    Test.</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-2.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div className="content-box">
                                                        <div className="category">
                                                            <h6>Safety Tips</h6>
                                                        </div>
                                                        <div className="title">
                                                            <h3>
                                                                <Link href="/blog-single">Navigating Roundabouts: A Beginner's
                                                                    Guide.</Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="img-box">
                                                        <img src="assets/images/blog/blog-sidebar-1-3.jpg" alt="Awesome Image"/>
                                                    </div>
                                                    <div className="content-box">
                                                        <div className="category">
                                                            <h6>Maintenance</h6>
                                                        </div>
                                                        <div className="title">
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
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="icon">
                                                <img src="assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
                                            </div>
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div className="sidebar-blog-tag">
                                            <ul className="clearfix">
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
                                    <div className="banner-style1 banner-style1--1">
                                        <div className="banner-style1__bg"
                                            style={{ backgroundImage: "url(assets/images/resources/banner-style1-1.jpg)" }}>
                                        </div>
                                        <div className="banner-style1___inner text-center">
                                            <div className="title-box">
                                                <h4>Discover Road to</h4>
                                                <h2>learn Driving</h2>
                                            </div>
                                            <ul className="list-item clearfix">
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
                                            <div className="content-box">
                                                <h4>
                                                    <i className="icon-dial-pad"></i>
                                                    <Link href="tel:66120003456">+66 12 000 3456</Link>
                                                </h4>
                                                <p>Drive Your Questions to Us Contact Our Experts Now!</p>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="#">
                                                        <span className="txt">
                                                            Start to Learn
                                                        </span>
                                                    </Link>
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
  );
}
