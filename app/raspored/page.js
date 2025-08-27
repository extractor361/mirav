'use client'
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import raspored from "../raspored.json";
import "./raspored.css"; // dodali smo naš css

export default function RasporedCasova_Page() {
  const [search, setSearch] = useState("");
  const [oblast, setOblast] = useState("Sve");
  const oblasti = ["Sve", ...new Set(raspored.map(cas => cas.oblast))];
  const filtriraniCasovi = raspored.filter(cas => {
const matchOblast = oblast === "Sve" || cas.oblast === oblast;
    const matchSearch =
      cas.tema.toLowerCase().includes(search.toLowerCase()) ||
      cas.znanja_i_vjestine.some(z => z.toLowerCase().includes(search.toLowerCase()));
    return matchOblast && matchSearch;
  });
  return (
    <div className="page-wrapper boxed_wrapper bg-blue-900 min-h-screen">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Raspored časova">
        <section className="pt-12 pb-12">
          <div className="container">

            <div className="sec-title text-center" style={{paddingTop: "50px"}}>
              <div className="sub-title"><h4>Teorijski program</h4></div>
              <h2>Teorijski dio programa obuke za sve kategorije</h2>
            </div>
            {/* filteri */}
            <div className="filters">
              <input
                type="text"
                placeholder="Pretraga po temi ili oblasti..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                value={oblast}
                onChange={(e) => setOblast(e.target.value)}
              >
                {oblasti.map((o, i) => (
                  <option key={i} value={o}>{o}</option>
                ))}
              </select>
            </div>
            {/* tabela */}
            <div className="table-wrapper" style={{paddingBottom:50}}>
              <table className="raspored-table">
                <thead>
                  <tr>
                    <th>Broj časa</th>
                    <th>Sadržaj programa obrazovanja</th>
                    <th>Znanja i vještine</th>
                    <th>Preporuke za nastavu</th>
                  </tr>
                </thead>
                <tbody>
                  {filtriraniCasovi.map((cas, i) => (
                    <tr key={i}>
                      <td data-label="Broj časa"><b>{cas.broj_casa}. čas</b></td>
                      <td data-label="Sadržaj programa obrazovanja">
                        {cas.tema} <br />
                        <span className="oblast">{cas.oblast}</span>
                      </td>
                      <td data-label="Znanja i vještine">
                        <ul>
                          {cas.znanja_i_vjestine.map((z, idx) => (
                            <li key={idx}>{z}</li>))}
                        </ul>
                      </td>
                      <td data-label="Preporuke za nastavu">
                        {cas.preporuke_za_nastavu?.length > 0 ? (
                          <ul>
                            {cas.preporuke_za_nastavu.map((p, idx) => (
                              <li key={idx}>{p}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="nema">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
