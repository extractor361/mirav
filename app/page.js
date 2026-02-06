import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Courses from "@/components/sections/home1/Courses"
import Head from "next/head";
import Services from "@/components/sections/home1/Services"
import Process from "@/components/sections/home1/Process"
import Choose from "@/components/sections/home1/Choose"
import Team from "@/components/sections/home1/Team"
import Slogan from "@/components/sections/home1/Slogan"
import Blog from "@/components/sections/home1/Blog"
import Testimonial from "@/components/sections/home1/Testimonial"
export default function Home() {

    return (<>
    <Head>
  <title>
    Auto škola Mirav Podgorica – Postani vozač B kategorije | 068 444 101
  </title>

  <meta
    name="description"
    content="Auto škola Mirav u Podgorici – licencirana obuka za B kategoriju, teorijska nastava, praktična vožnja i iskusni instruktori. Postani vozač već danas – pozovi +382 68 444 101."
  />

  <meta
    name="keywords"
    content="auto škola Podgorica, auto škola Mirav, B kategorija Podgorica, vozačka dozvola, škola vožnje Podgorica, obuka vozača, instruktor vožnje, polaganje vožnje"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Auto škola Mirav Podgorica – Postani vozač B kategorije"
  />

  <meta
    property="og:description"
    content="Licencirana auto škola u Podgorici sa preko 2000 obučenih vozača. Teorija, praksa i podrška do polaganja. Pozovi +382 68 444 101."
  />

  <meta property="og:url" content="https://mirav.me" />
  <meta property="og:type" content="website" />

  <meta
    property="og:image"
    content="https://mirav.me/assets/images/resources/Mirav-2036_compressed.webp"
  />

  {/* Local SEO */}
  <meta name="geo.region" content="ME-16" />
  <meta name="geo.placename" content="Podgorica" />
  <meta name="geo.position" content="42.4304;19.2594" />
  <meta name="ICBM" content="42.4304, 19.2594" />
</Head>

        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <About/>
                <Courses/>
                <Services/>
                <Process/>
                <Choose/>
                <Team/>
                <Slogan/>
                <Blog/>
                <Testimonial/>
            </Layout>
        </div></>
    )
}