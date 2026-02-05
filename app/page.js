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

    return (<><Head>
        <title>Auto škola Mirav Podgorica – Vozačka dozvola B kategorije</title>

        <meta
          name="description"
          content="Auto škola Mirav iz Podgorice nudi kompletnu obuku za B kategoriju – teorija, praktična vožnja, licencirani instruktori i moderna vozila. Prijavite se danas."
        />

        <meta
          name="keywords"
          content="auto škola Podgorica, auto škola Mirav, škola vožnje, vozačka dozvola, B kategorija"
        />

        {/* OpenGraph */}
        <meta property="og:title" content="Auto škola Mirav Podgorica" />
        <meta
          property="og:description"
          content="Licencirana auto škola u Podgorici. Preko 2000 obučenih vozača."
        />
        <meta property="og:url" content="https://mirav.me" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../assets/images/resources/Mirav-2036_compressed.webp" />
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