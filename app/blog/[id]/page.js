// app/blog/[id]/page.js

import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import parse from "html-react-parser";

export const dynamic = "force-dynamic";

const API_URL = "https://miravapibackend.online/api";

/* ================= FETCH ALL + FILTER ================= */

async function fetchNovost(id) {
  try {
    const res = await fetch(`${API_URL}/dohvatiNovosti`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();

    if (!Array.isArray(data)) return null;

    return data.find(
      (item) => String(item.novosti_id) === String(id)
    );
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

/* ================= PAGE ================= */

export default async function BlogSinglePage({ params }) {
  const { id } = params;

  const novost = await fetchNovost(id);

  /* ================= NOT FOUND ================= */

  if (!novost) {
    return (
      <div className="page-wrapper boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle2="Blog">
          <div className="container text-center pt-80 pb-80">
            <h1>Novost nije pronađena</h1>
            <p>
              Moguće je da je objava obrisana ili privremeno
              nedostupna.
            </p>

            <Link href="/blog" className="btn-one mt-20">
              Nazad na Blog
            </Link>
          </div>
        </Layout>
      </div>
    );
  }

  /* ================= PAGE CONTENT ================= */

  return (
    <div className="page-wrapper boxed_wrapper course-details-page">
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle2={novost.naslov || "Blog"}
      >
        <section className="blog-page-three">
          <div className="container">
            <div className="row">

              {/* ================= MAIN ================= */}

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
                    <h1>{novost.naslov}</h1>

                    {novost.sadrzaj && (
                      <div>{parse(novost.sadrzaj)}</div>
                    )}
                  </div>

                  <div className="blog-post-tag2">
                    <div className="title">
                      <div className="icon">
                        <img
                          src="/assets/images/icon/post-tags-icon1.png"
                          alt="icon"
                        />
                      </div>
                      <h4>Tagovi</h4>
                    </div>
                  </div>

                  <div className="back-to-blog-post-btn">
                    <Link href="/blog">
                      <span className="icon-menu"></span>
                      Nazad na objave
                    </Link>
                  </div>

                </div>
              </div>

              {/* ================= SIDEBAR ================= */}

              <div className="col-xl-4 col-lg-5">
                <div className="sidebar-box-style2">

                  <div className="sidebar-search-box-one">
                    <form className="search-form">
                      <input placeholder="Pretraga..." />
                      <button>
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>

                  <div className="single-sidebar-box">
                    <div className="sidebar-title">
                      <div className="icon">
                        <img
                          src="/assets/images/icon/blog-sidebar-icon-1.png"
                          alt="icon"
                        />
                      </div>
                      <h3>Popularni Tagovi</h3>
                    </div>

                    <div className="sidebar-blog-tag">
                      <ul className="clearfix">
                        <li><Link href="#">Časovi vožnje</Link></li>
                        <li><Link href="#">Teorijska nastava</Link></li>
                        <li><Link href="#">Poligon</Link></li>
                        <li><Link href="#">Auto škola</Link></li>
                        <li><Link href="#">Instruktori</Link></li>
                        <li><Link href="#">Saobraćajni znaci</Link></li>
                        <li><Link href="#">Praktična obuka</Link></li>
                        <li><Link href="#">Polaganje ispita</Link></li>
                        <li><Link href="#">Bezbjedna vožnja</Link></li>
                        <li><Link href="#">Pravila saobraćaja</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="banner-style1 banner-style1--1">
                    <div
                      className="banner-style1__bg"
                      style={{
                        backgroundImage:
                          "url(/assets/images/resources/banner-style1-1.jpg)",
                      }}
                    />

                    <div className="banner-style1___inner text-center">
                      <div className="title-box">
                        <h4>Kreni putem</h4>
                        <h2>bezbjedne vožnje</h2>
                      </div>

                      <ul className="list-item clearfix">
                        <li><h6>Sigurno</h6></li>
                        <li><h6>Pouzdano</h6></li>
                        <li><h6>Strpljivo</h6></li>
                      </ul>

                      <div className="content-box">
                        <h4>
                          <i className="icon-dial-pad"></i>
                          <Link href="tel:+382068444101">
                            +382 068 444 101
                          </Link>
                        </h4>

                        <p>
                          Imate pitanja? Vozite ih nama!
                          Kontaktirajte naše stručnjake.
                        </p>

                        <div className="btn-box">
                          <Link className="btn-one" href="/kontakt">
                            <span className="txt">
                              Želim vozačku dozvolu
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
