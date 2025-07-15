import "app/favicon-3.ico"
import "public/assets/css/color-3.css"
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Service from "@/components/sections/home4/Service"
import Courses from "@/components/sections/home4/Courses"
import Training from "@/components/sections/home4/Training"
import Choose from "@/components/sections/home4/Choose"
import Fact from "@/components/sections/home4/Fact"
import Project from "@/components/sections/home4/Project"
import Learn from "@/components/sections/home4/Learn"
import Blog from "@/components/sections/home1/Blog"
import Location from "@/components/sections/home2/Location"
import Partner from "@/components/sections/home2/Partner"
export default function Home_Four() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner/>
                <Service/>
                <Courses/>
                <Training/>
                <Choose/>
                <Fact/>
                <Project/>
                <Learn/>
                <Blog/>
                <Location/>
                <Partner/>
            </Layout>
        </div>
    )
}