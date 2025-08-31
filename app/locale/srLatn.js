const srLatnLocale = {
  code: 'sr-latn',
  week: {
    dow: 1, // ponedeljak je prvi dan u nedelji
    doy: 7,
  },
  buttonText: {
    prev: 'Preth',
    next: 'Sled',
    today: 'Danas',
    month: 'Mesec',
    week: 'Nedelja',
    day: 'Dan',
    list: 'Plan'
  },
  weekText: 'Sed',
  allDayText: 'Ceo dan',
  moreLinkText: n => `+${n} još`,
  noEventsText: 'Nema događaja za prikaz',

  // dodato: nazivi meseci
  monthNames: [
    'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
    'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
    'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'
  ],

  // dodato: nazivi dana
  dayNames: [
    'Nedelja', 'Ponedeljak', 'Utorak', 'Sreda',
    'Četvrtak', 'Petak', 'Subota'
  ],
  dayNamesShort: [
    'Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'
  ],
};

export default srLatnLocale;
