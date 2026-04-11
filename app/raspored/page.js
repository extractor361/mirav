"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import srLatnLocale from "../locale/srLatn";
import raspored from "../raspored.json";
import Head from "next/head";

export default function RasporedKalendar_Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = raspored.map((cas) => ({
    title: `${cas.broj_casa}. čas`,
    start: cas.datum ? cas.datum.split(".").reverse().join("-") : null,
    extendedProps: {
      tema: cas.tema,
      oblast: cas.oblast,
      znanja: cas.znanja_i_vjestine,
      preporuke: cas.preporuke_za_nastavu,
    },
  }));

  return (
    <>
      <Head>
        <title>Raspored časova teorije – Auto škola Mirav Podgorica</title>

        <meta
          name="description"
          content="Pogledajte raspored teorijskih časova u auto školi Mirav u Podgorici. Kalendar nastave, teme lekcija i priprema za polaganje vozačkog ispita."
        />

        <meta
          name="keywords"
          content="raspored časova vožnje, teorijska nastava Podgorica, auto škola Mirav, kalendar časova, B kategorija teorija"
        />

        <meta
          property="og:title"
          content="Raspored časova – Auto škola Mirav Podgorica"
        />
        <meta
          property="og:description"
          content="Kalendar teorijskih časova i plan nastave u auto školi Mirav u Podgorici."
        />
        <meta property="og:url" content="https://mirav.me/raspored-casova" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Raspored časova teorije – Auto škola Mirav"
        />
        <meta
          name="twitter:description"
          content="Plan i raspored teorijskih časova u auto školi Mirav."
        />
        <meta
          name="twitter:image"
          content="https://mirav.me/assets/images/resources/driving%20(12).jpg"
        />
      </Head>

      <div className="page-wrapper boxed_wrapper bg-blue-900 min-h-screen">
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Raspored časova">
          <section className="pt-12 pb-12">
            <div className="container">
              <div
                className="sec-title text-center"
                style={{ paddingTop: "50px" }}
              >
                <div className="sub-title">
                  <h4>Teorijski program nastave</h4>
                </div>
                <h1>Kalendar časova Auto Škole Mirav</h1>
              </div>

              {selectedEvent && (
                <div className="bg-white p-6 rounded-2xl shadow-xl mb-6 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={() => setSelectedEvent(null)}
                  >
                    ✕
                  </button>

                  <h3 className="text-xl font-bold mb-4">
                    {selectedEvent.title} – {selectedEvent.extendedProps.tema}
                  </h3>

                  <p>
                    <strong>Oblast:</strong> {selectedEvent.extendedProps.oblast}
                  </p>

                  <p>
                    <strong>Znanja i vještine:</strong>
                    <br />
                    {selectedEvent.extendedProps.znanja?.length ? (
                      selectedEvent.extendedProps.znanja.map((item, index) => (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      ))
                    ) : (
                      <span>Nema unesenih podataka</span>
                    )}
                  </p>

                  {/* 
                  <p>
                    <strong>Preporuke:</strong>
                    <br />
                    {selectedEvent.extendedProps.preporuke?.length ? (
                      selectedEvent.extendedProps.preporuke.map((item, index) => (
                        <span key={index}>
                          {item}
                          <br />
                        </span>
                      ))
                    ) : (
                      <span>Nema unesenih preporuka</span>
                    )}
                  </p>
                  */}
                </div>
              )}

              <div
                className="bg-white p-4 rounded-xl shadow-lg"
                style={{ paddingBottom: "40px" }}
              >
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  locales={[srLatnLocale]}
                  locale="sr-latn"
                  buttonText={{
                    today: "Danas",
                    month: "Mjesec",
                    week: "Sedmica",
                    day: "Dan",
                  }}
                  events={events}
                  eventColor="#183d73"
                  height="auto"
                  eventClick={(info) => {
                    info.jsEvent.preventDefault();
                    setSelectedEvent(info.event);
                  }}
                />
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}