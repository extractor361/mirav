'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter3 = dynamic(() => import('@/components/elements/PortfolioFilter3'), { ssr: false,})
export default function Gallery_Page_Three() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="5 Columns Fullwidth">
                <PortfolioFilter3/>
            </Layout>
        </div>
    )
}