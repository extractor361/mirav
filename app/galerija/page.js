"use client";

import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";

const PortfolioFilter2 = dynamic(
  () => import("@/components/elements/PortfolioFilter2"),
  { ssr: false }
);

export default function Gallery_Page_Two() {
  return (
    <>
      <Head>
        <title>Galerija – Auto škola Mirav Podgorica | Obuka vožnje</title>

        <meta
          name="description"
          content="Pogledajte galeriju auto škole Mirav u Podgorici – slike sa teorijske nastave, učionice, praktične vožnje i polaganja vozačkog ispita."
        />

        <meta
          name="keywords"
          content="galerija auto škole, slike obuke vožnje, auto škola Mirav, vožnja Podgorica, teorijska nastava"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Galerija – Auto škola Mirav Podgorica"
        />
        <meta
          property="og:description"
          content="Fotografije sa teorijske nastave, učionica, vožnje i polaganja u auto školi Mirav."
        />
        <meta property="og:url" content="https://mirav.me/galerija" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Galerija Auto škole Mirav Podgorica"
        />
        <meta
          name="twitter:description"
          content="Pogledajte slike sa obuke i vožnje u auto školi Mirav."
        />
        <meta
          name="twitter:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />
      </Head>

      <div className="page-wrapper boxed_wrapper">
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Galerija">
          
          {/* H1 */}
          <div className="container pt-40 pb-20 text-center">
            <h1 style={{marginTop:"40px",marginBottom:"40px"}}>Galerija Auto škole Mirav – Nastava, vožnja i polaganje</h1>
          </div>

          <PortfolioFilter2 />
        </Layout>
      </div>
    </>
  );
}
