import "app/favicon-3.ico"
import "public/assets/css/color-2.css"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import About from "@/components/sections/home3/About"
import Package from "@/components/sections/home3/Package"
import Service from "@/components/sections/home3/Service"
import Choose from "@/components/sections/home3/Choose"
import Video from "@/components/sections/home3/Video"
import Learn from "@/components/sections/home3/Learn"
import Project from "@/components/sections/home3/Project"
import Testimonial from "@/components/sections/home3/Testimonial"
import Blog from "@/components/sections/home3/Blog"
import Contact from "@/components/sections/home3/Contact"
import Partner from "@/components/sections/home2/Partner"
export default function Home_Three() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={3} footerStyle={3}>
                <Banner/>
                <About/>
                <Package/>
                <Service/>
                <Choose/>
                <Video/>
                <Learn/>
                <Project/>
                <Testimonial/>
                <Blog/>
                <Contact/>
                <Partner/>
            </Layout>
        </div>
    )
}