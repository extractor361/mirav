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
                        <img src="../assets/images/icon/post-tags-icon1.png" alt="icon" />
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
                                            <input placeholder="Pretraga..." type="text"/>
                                            <button type="submit">
                                                <i className="icon-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    
                                    
                                    <div className="single-sidebar-box">
                                        <div className="sidebar-title">
                                            <div className="icon">
                                                <img src="../assets/images/icon/blog-sidebar-icon-1.png" alt="icon"/>
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
    <li><Link href="#">Bezbedna vožnja</Link></li>
    <li><Link href="#">Pravila saobraćaja</Link></li>
  </ul>
</div>

                                    </div>
                                    <div className="banner-style1 banner-style1--1">
                                        <div className="banner-style1__bg"
                                            style={{ backgroundImage: "url(assets/images/resources/banner-style1-1.jpg)" }}>
                                        </div>
                                        <div className="banner-style1___inner text-center">
                                            <div className="title-box">
                                                <h4>Kreni putem
</h4>
                                                <h2>bezbjedne vožnje</h2>
                                            </div>
                                            <ul className="list-item clearfix">
                                                <li>
                                                    <h6>Sigurno</h6>
                                                </li>
                                                <li>
                                                    <h6>Pouzdano</h6>
                                                </li>
                                                <li>
                                                    <h6>Strpljivo</h6>
                                                </li>
                                            </ul>
                                            <div className="content-box">
                                                <h4>
                                                    <i className="icon-dial-pad"></i>
                                                    <Link href="tel:+382 068 444 101">+382 068 444 101</Link>
                                                </h4>
                                                <p>Imate pitanja? Vozite ih nama! Kontaktirajte naše stručnjake i započnite svoje putovanje ka sigurnoj vožnji.
</p>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="#">
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
