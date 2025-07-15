import "app/favicon-2.ico"
import "public/assets/css/color-1.css"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Awards from "@/components/sections/home2/Awards"
import Services from "@/components/sections/home2/Services"
import Fact from "@/components/sections/home2/Fact"
import Courses from "@/components/sections/home2/Courses"
import Project from "@/components/sections/home2/Project"
import Technology from "@/components/sections/home2/Technology"
import Blog from "@/components/sections/home2/Blog"
import Location from "@/components/sections/home2/Location"
import Testimonial from "@/components/sections/home2/Testmonial"
import Faq from "@/components/sections/home2/Faq"
import Partner from "@/components/sections/home2/Partner"
export default function Home_Two() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Awards/>
                <Services/>
                <Fact/>
                <Courses/>
                <Project/>
                <Technology/>
                <Blog/>
                <Location/>
                <Testimonial/>
                <Faq/>
                <Partner/>
            </Layout>
        </div>
    )
}