import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import About from "@/components/sections/home1/About";
import Courses from "@/components/sections/home1/Courses";
import Services from "@/components/sections/home1/Services";
import Process from "@/components/sections/home1/Process";
import Choose from "@/components/sections/home1/Choose";
import Team from "@/components/sections/home1/Team";
import Slogan from "@/components/sections/home1/Slogan";
import Blog from "@/components/sections/home1/Blog";
import Testimonial from "@/components/sections/home1/Testimonial";

/* =============================
   SEO METADATA — HOME PAGE
============================= */

export const metadata = {
  title:
    "Auto škola Mirav Podgorica, Crna Gora – Postani vozač B kategorije",

  description:
    "Auto škola Mirav u Podgorici – licencirana obuka za B kategoriju, teorijska nastava, praktična vožnja i iskusni instruktori. Postani vozač već danas – pozovi +382 68 444 101.",

  keywords: [
    "auto škola Podgorica",
    "auto škola Mirav",
    "B kategorija Podgorica",
    "škola vožnje",
    "vozačka dozvola",
    "instruktor vožnje",
  ],

  openGraph: {
    title:
      "Auto škola Mirav Podgorica – Postani vozač B kategorije",

    description:
      "Licencirana auto škola u Podgorici sa preko 2000 obučenih vozača. Teorija, praksa i podrška do polaganja.",

    url: "https://mirav.me",

    siteName: "Auto škola Mirav",

    images: [
      {
        url:
          "https://mirav.me/assets/images/resources/Mirav-2036_compressed.webp",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },

  alternates: {
    canonical: "https://mirav.me",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =============================
   PAGE COMPONENT
============================= */

export default function Home() {
  return (
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <About />
        <Courses />
        <Services />
        <Process />
        <Choose />
        <Team />
        <Slogan />
        <Blog />
        <Testimonial />
      </Layout>
    </div>
  );
}
