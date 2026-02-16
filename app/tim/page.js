'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Head from 'next/head';
const teamMembers = [
  {
    name: "Mirjana Vešović",
    role: "Osnivač",
    image: "assets/images/resources/tim1.jpeg",
    description: `Osnivač i direktor auto škole, instruktor vožnje B i C kategorije, član ispitne komisije. 
Rođena 1978. u Kolašinu. Inženjer drumskog saobraćaja. Od 2013. vodi auto školu Mirav i obučila preko 3000 kandidata.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Almedina Jasharaj",
    role: "Asistent u nastavi",
    image: "assets/images/resources/tim2.jpeg",
    description: `Pomaže kandidatima u teorijskoj nastavi. Student saobraćajnog fakulteta, prati nove trendove i propise.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
   {
    name: "dr Mirela Kalić",
    role: "Predavač za prvu pomoć",
    image: "assets/images/resources/tim111.jpeg",
    description: `Rođena je u Rožajama, gdje je završila osnovnu i srednju školu. Diplomirala je na Medicinskom fakultetu u Podgorici 2011. godine, a od 2021. godine je specijalista radiologije.
Tokom usavršavanja završila je CT i UZ školu u Beogradu, kao i više kurseva iz dopler i ultrazvučne dijagnostike dojke. Članica je Udruženja radiologa Crne Gore i zaposlena u Domu zdravlja Danilovgrad.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Ivana Petković",
    role: "Instruktor",
    image: "assets/images/ivana.jpg",
    description: `Instruktor B kategorije. Strpljiva i posvećena, prilagođava obuku svakom kandidatu.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
    {
    name: "dr Mirela Kalić",
    role: "Predavač za prvu pomoć",
    image: "assets/images/resources/tim111.jpeg",
    description: `Rođena je u Rožajama, gdje je završila osnovnu i srednju školu. Diplomirala je na Medicinskom fakultetu u Podgorici 2011. godine, a od 2021. godine je specijalista radiologije.
Tokom usavršavanja završila je CT i UZ školu u Beogradu, kao i više kurseva iz dopler i ultrazvučne dijagnostike dojke. Članica je Udruženja radiologa Crne Gore i zaposlena u Domu zdravlja Danilovgrad.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Nikola Vlahović",
    role: "Instruktor",
    image: "assets/images/resources/tim3.jpeg",
    description: `Mirne naravi, prilagođava obuku svakom kandidatu, pruža sigurnost u vožnji.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Miladin Vešović",
    role: "Instruktor",
    image: "assets/images/resources/tim4.jpeg",
    description: `Posvećen i temeljit instruktor sa dugogodišnjim iskustvom.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Jadranka Vesović Rakočević",
    role: "Referent auto škole",
    image: "assets/images/resources/tim5.jpeg",
    description: `Zadužena za administraciju i svakodnevni rad škole, organizovana i precizna.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  },
  {
    name: "Adam Baković",
    role: "Instruktor",
    image: "assets/images/resources/tim6.jpeg",
    description: `Energican i pozitivan instruktor, pomaže kandidatima da prevaziđu strah.`,
    social: {
      facebook: "https://www.facebook.com/",
      twitter: "https://x.com/i/flow/login",
      instagram: "https://www.instagram.com/accounts/login/?hl=en"
    }
  }
]

export default function Team_Page() {
  return (
    <><Head>
  <title>Naš Tim – Instruktori Auto škole Mirav Podgorica</title>

  <meta
    name="description"
    content="Naš tim čine licencirani instruktori vožnje sa dugogodišnjim iskustvom u obuci kandidata u Podgorici, posvećeni vašem uspjehu, sigurnosti i samopouzdanju za volanom."
  />

  <meta
    name="keywords"
    content="instruktori vožnje Podgorica, auto škola Mirav tim, škola vožnje Podgorica, učitelji vožnje"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Naš Tim – Auto škola Mirav Podgorica" />
  <meta
    property="og:description"
    content="Upoznajte tim instruktora auto škole Mirav – iskustvo, znanje i posvećenost sigurnoj vožnji."
  />
  <meta property="og:url" content="https://mirav.me/tim" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="../assets/images/resources/Mirav-2096_compressed.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Naš Tim – Auto škola Mirav Podgorica"
  />
  <meta
    name="twitter:description"
    content="Iskusni instruktori auto škole Mirav iz Podgorice."
  />
  <meta
    name="twitter:image"
    content="../assets/images/resources/Mirav-2096_compressed.webp"
  />
</Head>
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Naš Tim">
        <section className="team-style1 team-style1--2">
          
          <div className="container">
            <div className="row">
  <div className="sec-title text-center">
    <div className="sub-title">
      <h4>Naš tim</h4>
    </div>
    <h1>Naš tim instruktora – snaga Auto škole Mirav</h1>
  </div>
  <div className="text1 text-center">
    <p style={{marginBottom:40}}>
      Naš tim čine licencirani instruktori vožnje sa dugogodišnjim iskustvom u obuci kandidata u Podgorici, posvećeni vašem uspjehu, sigurnosti i samopouzdanju za volanom. Strpljenje, profesionalizam i individualni pristup svakom kandidatu vrijednosti su po kojima je Auto škola Mirav prepoznata.
    </p>
  </div>
              {teamMembers.map((member, index) => (
                <div key={index} className="col-xl-4 col-lg-6">
                  <div className="single-team-style1">
                    <div className="single-team-style1-inner">
                      <div className="single-team-style1-shape">
                        <img src="assets/images/shapes/team-v1-shape1.png" alt="shape" />
                      </div>
                      <div className="single-team-style1-title">
                        <h3><Link href="/team">{member.name}</Link></h3>
                        <span>{member.role}</span>
                      </div>
                      <div className="single-team-style1-border"></div>
                      <div className="single-team-style1-text">
                        <p>{member.description}</p>
                      </div>
                      <div className="single-team-style1-bottom">
                        <ul className="single-team-style1-social-link clearfix">
                          <li>
                            <Link href={member.social.facebook}>
                              <span className="icon-facebook"></span>
                            </Link>
                          </li>
                          <li>
                            <Link href={member.social.twitter}>
                              <span className="icon-twitter"></span>
                            </Link>
                          </li>
                          <li>
                            <Link href={member.social.instagram}>
                              <span className="icon-instagram-logo"></span>
                            </Link>
                          </li>
                        </ul>
                        <div className="single-team-style1-btn">
                          <Link href="/team"><i className="icon-next"></i> Pogledaj Profil</Link>
                        </div>
                      </div>
                    </div>
                    <div className="single-team-style1-img">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div></>
  )
}
