// Loyalty card data. Each entry maps to a barcode and metadata.
// Codes are demo/placeholder community codes — replace with real shared
// numbers that don't require registration where you have them.
window.STORES = [
  // ─── United Kingdom ───────────────────────────────────────────────
  {
    id: "tesco",
    name: "Tesco",
    program: "Clubcard",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#EE1C2E",
    code: "6340000000019",
    format: "CODE128",
    note: "Clubcard Prices at checkout."
  },
  {
    id: "sainsburys",
    name: "Sainsbury's",
    program: "Nectar",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#F06C00",
    code: "9826300079614571032",
    format: "CODE128",
    note: "Nectar prices apply at the till."
  },
  {
    id: "morrisons",
    name: "Morrisons",
    program: "More",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#00643C",
    code: "6341000000018",
    format: "CODE128",
    note: "More Card discounts and points."
  },
  {
    id: "waitrose",
    name: "Waitrose",
    program: "myWaitrose",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#5C8923",
    code: "6342000000017",
    format: "CODE128",
    note: "Free hot drink + member offers."
  },
  {
    id: "boots",
    name: "Boots",
    program: "Advantage Card",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#05054B",
    code: "6343000000016",
    format: "CODE128",
    note: "4 points per £1 spent."
  },
  {
    id: "coop-uk",
    name: "Co-op",
    program: "Membership",
    country: "United Kingdom",
    emoji: "🇬🇧",
    color: "#00B1E7",
    code: "6344000000015",
    format: "CODE128",
    note: "Member prices on selected items."
  },

  // ─── Netherlands / Belgium ────────────────────────────────────────
  {
    id: "albert-heijn",
    name: "Albert Heijn",
    program: "Bonuskaart",
    country: "Netherlands",
    emoji: "🇳🇱",
    color: "#0072CE",
    code: "2623068685576",
    format: "CODE128",
    note: "Scan at checkout for Bonus discounts. No registration required."
  },
  {
    id: "jumbo",
    name: "Jumbo",
    program: "Extra's Spaarprogramma",
    country: "Netherlands",
    emoji: "🇳🇱",
    color: "#FCD200",
    code: "2622354259057",
    format: "CODE128",
    note: "Use at the till for promo discounts."
  },
  {
    id: "kruidvat",
    name: "Kruidvat",
    program: "Voordeelkaart",
    country: "Netherlands / Belgium",
    emoji: "🇳🇱",
    color: "#005CA9",
    code: "2750000000018",
    format: "CODE128",
    note: "Earn vouchers via the points system."
  },
  {
    id: "etos",
    name: "Etos",
    program: "Plus klantenkaart",
    country: "Netherlands",
    emoji: "🇳🇱",
    color: "#E2007A",
    code: "2760000000017",
    format: "CODE128",
    note: "Discounts and personal offers."
  },
  {
    id: "hema",
    name: "HEMA",
    program: "Meer HEMA",
    country: "Netherlands",
    emoji: "🇳🇱",
    color: "#E30613",
    code: "2770000000016",
    format: "CODE128",
    note: "Member discounts on selected items."
  },

  // ─── France ───────────────────────────────────────────────────────
  {
    id: "carrefour",
    name: "Carrefour",
    program: "Carte Carrefour",
    country: "France",
    emoji: "🇫🇷",
    color: "#0046AE",
    code: "3560000000019",
    format: "CODE128",
    note: "Promotions et remises fidélité."
  },
  {
    id: "leclerc",
    name: "E.Leclerc",
    program: "Carte fidélité",
    country: "France",
    emoji: "🇫🇷",
    color: "#005EB8",
    code: "3561000000018",
    format: "CODE128",
    note: "Cumul de ticket E.Leclerc."
  },

  // ─── Germany ──────────────────────────────────────────────────────
  {
    id: "lidl",
    name: "Lidl",
    program: "Lidl Plus",
    country: "Europe-wide",
    emoji: "🇪🇺",
    color: "#0050AA",
    code: "4000000000019",
    format: "CODE128",
    note: "App coupons typically required — this is a fallback scan."
  },
  {
    id: "rewe",
    name: "REWE",
    program: "Payback",
    country: "Germany",
    emoji: "🇩🇪",
    color: "#CC071E",
    code: "4001000000018",
    format: "CODE128",
    note: "Payback Punkte sammeln."
  },
  {
    id: "edeka",
    name: "EDEKA",
    program: "DeutschlandCard",
    country: "Germany",
    emoji: "🇩🇪",
    color: "#FECC00",
    code: "4002000000017",
    format: "CODE128",
    note: "Punkte mit jeder Einkauf."
  },
  {
    id: "dm",
    name: "dm",
    program: "Payback",
    country: "Germany",
    emoji: "🇩🇪",
    color: "#003D7C",
    code: "4003000000016",
    format: "CODE128",
    note: "Payback Punkte bei dm."
  },

  // ─── Scandinavia & Switzerland ────────────────────────────────────
  {
    id: "ica",
    name: "ICA",
    program: "ICA Stammis",
    country: "Sweden",
    emoji: "🇸🇪",
    color: "#E60012",
    code: "7350000000019",
    format: "CODE128",
    note: "Personliga erbjudanden."
  },
  {
    id: "coop-se",
    name: "Coop",
    program: "Medmera",
    country: "Sweden",
    emoji: "🇸🇪",
    color: "#00963F",
    code: "7351000000018",
    format: "CODE128",
    note: "Poäng + medlemspriser."
  },
  {
    id: "migros",
    name: "Migros",
    program: "Cumulus",
    country: "Switzerland",
    emoji: "🇨🇭",
    color: "#FF6600",
    code: "7610000000019",
    format: "CODE128",
    note: "Cumulus Punkte sammeln."
  },

  // ─── International chains ─────────────────────────────────────────
  {
    id: "decathlon",
    name: "Decathlon",
    program: "Decathlon Membership",
    country: "International",
    emoji: "🌍",
    color: "#0082C3",
    code: "3045140000016",
    format: "CODE128",
    note: "Free returns + member benefits."
  },
  {
    id: "ikea",
    name: "IKEA",
    program: "IKEA Family",
    country: "International",
    emoji: "🌍",
    color: "#0058A3",
    code: "7320000000016",
    format: "CODE128",
    note: "Member prices + free coffee."
  }
];
