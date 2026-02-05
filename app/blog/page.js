"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Blog_Page_Two() {
  const [novosti, setNovosti] = useState([]);

  useEffect(() => {
    fetch("https://miravapibackend.online/api/dohvatiNovosti")
      .then((res) => res.json())
      .then((data) => setNovosti(data))
      .catch((err) =>
        console.error("Greška pri dohvatu novosti:", err)
      );
  }, []);

  return (
    <>
      <Head>
        <title>Blog Auto škole Mirav Podgorica – Savjeti za vozače</title>

        <meta
          name="description"
          content="Pročitajte savjete i novosti iz auto škole Mirav u Podgorici – priprema za polaganje vozačkog ispita, teorija vožnje i korisni vodiči za buduće vozače."
        />

        <meta
          name="keywords"
          content="blog auto škole, savjeti za vozače, auto škola Mirav, teorija vožnje Podgorica"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Blog Auto škole Mirav – Savjeti za vozače"
        />
        <meta
          property="og:description"
          content="Savjeti i novosti za buduće vozače iz auto škole Mirav u Podgorici."
        />
        <meta property="og:url" content="https://mirav.me/blog" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog Auto škole Mirav Podgorica"
        />
        <meta
          name="twitter:description"
          content="Savjeti za vozače i novosti iz auto škole Mirav."
        />
        <meta
          name="twitter:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />
      </Head>

      <div className="page-wrapper boxed_wrapper course-details-page">
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
          <section className="blog-style1">
            <div className="container">

              {/* H1 */}
              <div className="row">
                <div className="col-xl-12 text-center mb-40">
                  <h1>Blog Auto škole Mirav – Savjeti za vozače</h1>
                </div>
              </div>

              <div className="row">
                {novosti.length === 0 && <p>Učitavanje novosti...</p>}

                {novosti.map(
                  (
                    {
                      novosti_id,
                      naslov,
                      sadrzaj,
                      slika,
                      datum_objave,
                      korisnik_korisnik_id,
                    },
                    index
                  ) => (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6"
                      key={novosti_id || index}
                    >
                      <div className="single-blog-style1">
                        <div className="single-blog-style1__img">
                          <div className="inner">
                            <img
                              src={
                                slika
                                  ? `https://miravapibackend.online/slike/${slika}`
                                  : "/assets/images/blog/blog-default.jpg"
                              }
                              alt={naslov}
                            />
                            <div className="single-blog-style1__overlay-icon">
                              <Link
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href="#"
                              >
                                <i className="icon-zoom"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="single-blog-style1__overlay-content">
                            <div className="date-box">
                              <h6>
                                {new Date(datum_objave).toLocaleDateString(
                                  "sr-RS",
                                  {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </h6>
                            </div>
                            <div className="category">
                              <h5>Autor: Admin</h5>
                            </div>
                            <div className="meta-box">
                              <ul className="meta-info clearfix">
                                <li>
                                  <div className="icon">
                                    <i className="icon-user"></i>
                                  </div>
                                  <div className="text">
                                    <p>
                                      Mirjana {korisnik_korisnik_id}
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="icon">
                                    <i className="icon-stopwatch"></i>
                                  </div>
                                  <div className="text">
                                    <p>2 minuta čitanja</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="single-blog-style1__title">
                          <h3>
                            <Link href={`/blog/${novosti_id}`}>
                              {naslov}
                            </Link>
                          </h3>
                          <div className="btn-box">
                            <Link
                              className="thm-btn3"
                              href={`/blog/${novosti_id}`}
                            >
                              <i className="icon-next"></i>
                              Pročitaj više
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}
