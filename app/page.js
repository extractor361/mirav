import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Courses from "@/components/sections/home1/Courses"
import Services from "@/components/sections/home1/Services"
import Process from "@/components/sections/home1/Process"
import Choose from "@/components/sections/home1/Choose"
import Team from "@/components/sections/home1/Team"
import Slogan from "@/components/sections/home1/Slogan"
import Blog from "@/components/sections/home1/Blog"
import Testimonial from "@/components/sections/home1/Testimonial"
export default function Home() {

    return (
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
        </div>
    )
}