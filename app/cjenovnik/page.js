'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"

export default function Cjenovnik_Page() {
  return (
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cjenovnik">
        <section className="pricing-style1 py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Naš cilj je da Vam vožnju učinimo lakom</h2>
              <p className="text-xl text-gray-600 mt-4">CJENOVNIK</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-gray-700 text-lg">
              {/* Obuka za vozače */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Obuka za vozače</h3>
                <ul className="space-y-2">
                  <li>640 €</li>
                  <li>700 €</li>
                  <li>740 € <span className="text-sm text-gray-500">(strana lica)</span></li>
                </ul>
              </div>

              {/* Plaćanje na rate */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Plaćanje na rate</h3>
                <ul className="space-y-2">
                  <li>660 €</li>
                  <li>720 €</li>
                  <li>760 € <span className="text-sm text-gray-500">(strana lica)</span></li>
                </ul>
              </div>

              {/* Ljekarsko uvjerenje */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Ljekarsko uvjerenje</h3>
                <p className="text-lg">20 €</p>
              </div>
            </div>

            {/* CTA dugme */}
            <div className="text-center mt-16">
              <p className="text-lg font-medium mb-4">Pridružite nam se</p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Prijavi se
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
