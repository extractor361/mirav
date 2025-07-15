'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), { ssr: false,})
export default function Gallery_Page_Two() {

    return (
        <div className="page-wrapper boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Galerija">
                <PortfolioFilter2/>
            </Layout>
        </div>
    )
}