"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import srLatnLocale from "../locale/srLatn";
import raspored from "../raspored.json";

export default function RasporedKalendar_Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Pretvorimo JSON u događaje za kalendar
  const events = raspored.map((cas) => ({
    title: `${cas.broj_casa}. čas`, // samo broj časa u kalendaru
    start: cas.datum ? cas.datum.split(".").reverse().join("-") : null,
    extendedProps: {
      tema: cas.tema,
      oblast: cas.oblast,
      znanja: cas.znanja_i_vjestine,
      preporuke: cas.preporuke_za_nastavu,
    },
  }));

  return (
    <div className="page-wrapper boxed_wrapper bg-blue-900 min-h-screen">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Raspored časova">
        <section className="pt-12 pb-12">
          <div className="container">
            <div
              className="sec-title text-center"
              style={{ paddingTop: "50px" }}
            >
              <div className="sub-title">
                <h4>Teorijski program</h4>
              </div>
              <h2>Kalendar časova</h2>
            </div>

            {/* Kartica sa detaljima iznad kalendara */}
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
                  <strong>Znanja i vještine:</strong>{" "}
                  {selectedEvent.extendedProps.znanja}
                </p>
                <p>
                  <strong>Preporuke:</strong>{" "}
                  {selectedEvent.extendedProps.preporuke}
                </p>
              </div>
            )}

            {/* Kalendar */}
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
  );
}
