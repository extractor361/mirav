"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import srLatnLocale from "../locale/srLatn";
import raspored from "../raspored.json";
import Head from "next/head";

const getOblastFromTema = (tema = "") => {
  const t = tema.toLowerCase();

  if (
    t.includes("zakona o bezbjednosti saobraćaja") ||
    t.includes("uslovi za učestvovanje") ||
    t.includes("posebne mjere i kaznene odredbe")
  ) {
    return "Saobraćajni propisi";
  }

  if (
    t.includes("životnu sredinu") ||
    t.includes("zivotnu sredinu")
  ) {
    return "Zaštita životne sredine";
  }

  if (
    t.includes("prve pomoći") ||
    t.includes("prva pomoć") ||
    t.includes("prva pomoc") ||
    t.includes("trijaža") ||
    t.includes("trijaza")
  ) {
    return "Prva pomoć";
  }

  if (
    t.includes("opšta pravila") ||
    t.includes("opsta pravila") ||
    t.includes("radnje vozilom") ||
    t.includes("prilagođavanje brzine") ||
    t.includes("prilagodavanje brzine") ||
    t.includes("prvenstvu prolaza") ||
    t.includes("raskrsnici") ||
    t.includes("pješaka") ||
    t.includes("pjesaka") ||
    t.includes("zvučne i svjetlosne signalizacije") ||
    t.includes("zvucne i svjetlosne signalizacije") ||
    t.includes("vozila pod pratnjom") ||
    t.includes("sa prvenstvom prolaza")
  ) {
    return "Pravila saobraćaja";
  }

  if (
    t.includes("signalizacija") ||
    t.includes("znakovi opasnosti") ||
    t.includes("znakovi izričitih naredbi") ||
    t.includes("znakovi izricitih naredbi") ||
    t.includes("znakovi obavještenja") ||
    t.includes("znakovi obavjestenja") ||
    t.includes("dopunske table") ||
    t.includes("oznake na kolovozu") ||
    t.includes("svjetlosni saobraćajni znakovi") ||
    t.includes("tehničko regulisanje") ||
    t.includes("tehnicko regulisanje") ||
    t.includes("znaci koje daju ovlašćena lica") ||
    t.includes("znaci koje daju ovlascena lica")
  ) {
    return "Saobraćajna signalizacija";
  }

  if (
    t.includes("faktori bezbjednosti drumskog saobraćaja") ||
    t.includes("vozač kao faktor") ||
    t.includes("vozac kao faktor") ||
    t.includes("ponašanja vozača") ||
    t.includes("ponasanja vozaca") ||
    t.includes("elementi faktora put") ||
    t.includes("elementi aktivne i pasivne bezbjednosti vozila") ||
    t.includes("elementi faktora okolina")
  ) {
    return "Faktori bezbjednosti saobraćaja";
  }

  if (t.includes("vježba") || t.includes("vjezba")) {
    return "Vježba";
  }

  return "Teorijska nastava";
};

const getDefaultZnanjaFromTema = (tema = "") => {
  const t = tema.toLowerCase();

  if (
    t.includes("zakona o bezbjednosti saobraćaja") ||
    t.includes("uslovi za učestvovanje") ||
    t.includes("posebne mjere i kaznene odredbe")
  ) {
    return [
      "Razumije osnovne saobraćajne propise",
      "Prepoznaje zakonske obaveze učesnika u saobraćaju",
      "Primjenjuje teorijska znanja u saobraćajnim situacijama",
    ];
  }

  if (
    t.includes("prva pomoć") ||
    t.includes("prva pomoc") ||
    t.includes("trijaža") ||
    t.includes("trijaza")
  ) {
    return [
      "Prepoznaje situacije u kojima je potrebna prva pomoć",
      "Razumije osnovne korake pravilnog postupanja",
      "Primjenjuje osnovna znanja iz prve pomoći",
    ];
  }

  if (
    t.includes("signalizacija") ||
    t.includes("znakovi") ||
    t.includes("svjetlosni") ||
    t.includes("kolovozu")
  ) {
    return [
      "Prepoznaje značenje saobraćajnih znakova i signalizacije",
      "Razlikuje vrste znakova i oznaka",
      "Pravilno postupa prema signalizaciji u saobraćaju",
    ];
  }

  if (
    t.includes("pravila") ||
    t.includes("prvenstvu prolaza") ||
    t.includes("raskrsnici") ||
    t.includes("pješaka") ||
    t.includes("pjesaka") ||
    t.includes("brzine") ||
    t.includes("radnje vozilom")
  ) {
    return [
      "Razumije pravila ponašanja u saobraćaju",
      "Prepoznaje pravilno postupanje u tipičnim situacijama",
      "Primjenjuje teorijska znanja na primjerima iz prakse",
    ];
  }

  if (
    t.includes("faktori bezbjednosti") ||
    t.includes("vozač kao faktor") ||
    t.includes("vozac kao faktor") ||
    t.includes("vozila") ||
    t.includes("okolina") ||
    t.includes("put")
  ) {
    return [
      "Prepoznaje faktore koji utiču na bezbjednost saobraćaja",
      "Razumije uticaj vozača, puta, vozila i okoline",
      "Povezuje teorijska znanja sa stvarnim uslovima u saobraćaju",
    ];
  }

  if (t.includes("vježba") || t.includes("vjezba")) {
    return [
      "Utvrđuje prethodno usvojena znanja",
      "Primjenjuje teorijska znanja kroz primjere i zadatke",
    ];
  }

  return [
    "Usvaja osnovna teorijska znanja iz nastavne jedinice",
    "Razumije ključne pojmove obrađene na času",
  ];
};

export default function RasporedKalendar_Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = raspored.map((cas) => ({
    title: `${cas.broj_casa}. čas`,
    start: cas.datum ? cas.datum.split(".").reverse().join("-") : null,
    extendedProps: {
      broj_casa: cas.broj_casa,
      tema: cas.tema,
      datum: cas.datum,
      vrijeme: cas.vrijeme,
      oblast: cas.oblast || getOblastFromTema(cas.tema),
      znanja: Array.isArray(cas.znanja_i_vjestine) && cas.znanja_i_vjestine.length
        ? cas.znanja_i_vjestine
        : getDefaultZnanjaFromTema(cas.tema),
      preporuke:
        Array.isArray(cas.preporuke_za_nastavu) && cas.preporuke_za_nastavu.length
          ? cas.preporuke_za_nastavu
          : [],
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
                    aria-label="Zatvori detalje časa"
                  >
                    ✕
                  </button>

                  <h3 className="text-xl font-bold mb-4">
                    {selectedEvent.title} – {selectedEvent.extendedProps.tema}
                  </h3>

                  <p>
                    <strong>Datum:</strong> {selectedEvent.extendedProps.datum}
                  </p>

                  <p>
                    <strong>Vrijeme:</strong>{" "}
                    {selectedEvent.extendedProps.vrijeme || "Nije uneseno"}
                  </p>

                  <p>
                    <strong>Oblast:</strong>{" "}
                    {selectedEvent.extendedProps.oblast || "Nije uneseno"}
                  </p>

                  <p>
                    <strong>Znanja i vještine:</strong>
                    <br />
                    {selectedEvent.extendedProps.znanja?.length ? (
                      selectedEvent.extendedProps.znanja.map((item, index) => (
                        <span key={index}>
                          • {item}
                          <br />
                        </span>
                      ))
                    ) : (
                      <span>Nema unesenih podataka</span>
                    )}
                  </p>

                  {/* 
                  <p>
                    <strong>Preporuke za nastavu:</strong>
                    <br />
                    {selectedEvent.extendedProps.preporuke?.length ? (
                      selectedEvent.extendedProps.preporuke.map((item, index) => (
                        <span key={index}>
                          • {item}
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