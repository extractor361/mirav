'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), { ssr: false,})
export default function Gallery_Page_One() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="2 Columns Grid">
                <PortfolioFilter1/>
            </Layout>
        </div>
    )
}