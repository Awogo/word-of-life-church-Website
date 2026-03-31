// ============================================================
// WORD OF LIFE BIBLE CHURCH — App Constants
// src/utils/constants.js
// ============================================================

// ── Church Info ──────────────────────────────────────────────
export const CHURCH_INFO = {
  name:        "Word of Life Bible Church",
  shortName:   "WLBC",
  tagline:     "Take my Word to the World.",
  address:     "Ajamimogha Road, Warri, Delta State, Nigeria",
  phone:       "+234 800 000 0000",
  email:       "info@wordoflife.org",
  website:     "https://wlbc.org",
  bibleStudy: "5:00 PM",
  revivalService: "5:00 PM",
  aDayWithTheLord: "5:00 PM",
  mainService: "8:00 AM",
  serviceDay:  ["Sunday", "Wednesday", "Friday"],
  social: {
    facebook:  "https://facebook.com/wordoflifewarri",
    youtube:   "https://youtube.com/wordoflifewarri",
    instagram: "https://instagram.com/wordoflifewarri",
  },
};

// ── Subsidiary Links (external sites) ───────────────────────
export const SUBSIDIARIES = [
  {
    key:         "eagles-flight-microfinance-bank",
    name:        "Eagles Flight MFB",
    shortDesc:   "Microfinance banking built on Kingdom principles.",
    fullDesc:    "Eagles Flight Microfinance Bank provides accessible, faith-driven financial services to individuals, families, and businesses in the Niger Delta region.",
    url:         "https://eaglesflightbank.com",
    color:       "#1a3a5c",
  },
  {
    key:         "eagle-might-school",
    name:        "Eagle Might Schools",
    shortDesc:   "Excellence in education from a Biblical foundation.",
    fullDesc:    "Eagle Might Schools offer world-class education rooted in Christian values, preparing the next generation of leaders academically and spiritually.",
    url:         "https://eaglemightschools.com",
    color:       "#b91c1c",
  },
  {
    key:         "eagle-nest",
    name:        "Eagle Nest Guest House",
    shortDesc:   "A restful, Spirit-filled hospitality experience.",
    fullDesc:    "Eagle Nest Guest House offers comfortable and serene accommodation for visitors, conference guests, and travelers seeking a peaceful, faith-centered stay in Warri.",
    url:         "/eagle-nest",   // internal page
    color:       "#c8922a",
    internal:    true,
  },
  {
    key:         "isom",
    name:        "ISOM School",
    shortDesc:   "International School of Ministry — equipping ministers.",
    fullDesc:    "The International School of Ministry (ISOM) at Word of Life equips men and women with theological training and practical ministry skills for global impact.",
    url:         "/isom",         // internal page
    color:       "#0f2744",
    internal:    true,
  },
];

// ── Navigation Links ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "HOME",        path: "/" },
  { label: "SERMONS",     path: "/sermons" },
  { label: "EVENTS",      path: "/events" },
  { label: "MINISTRIES",  path: "/ministries" },
];

export const FOOTER_NAV = {
  navigation: [
    { label: "About Our Church",  path: "/about" },
    { label: "Our Senior Pastor", path: "/about#pastor" },
    { label: "Ministries",        path: "/ministries" },
    { label: "Contact Us",        path: "/contact" },
  ],
  resources: [
    { label: "Sermon Archive", path: "/sermons" },
    { label: "Live Stream",    path: "/sermons#live" },
    { label: "Prayer Requests",path: "/contact#prayer" },
    { label: "Bible Studies",  path: "/sermons#studies" },
  ],
  services: [
    { label: "Give Online",        path: "/giving" },
    { label: "Eagle Nest Booking", path: "/eagle-nest" },
    { label: "ISOM Registration",  path: "/isom" },
    { label: "Member Dashboard",   path: "/dashboard" },
  ],
};

// ── Ministries Data ──────────────────────────────────────────
export const MINISTRIES = [
 
 {
    key:   "children",
    name:  "Children Evangelical Ministry",
    icon:  "Smile",
    desc:  "Building and Equipping the children that will build a nation.",
    color: "#fce8e8",
  },

  {
    key:   "teenagers",
    name:  "Action Teens For Christ fellowship",
    icon:  "Smile",
    desc:  "Building and Equipping the Teens that will build a nation.",
    color: "#fce8e8",
  },

   {
    key:   "youth",
    name:  "Action Youth For Christ Fellowship",
    icon:  "Rocket",
    desc:  "Building and Equipping the Youths that will build a nation.",
    color: "#fce8e8",
  },
  {
    key:   "women",
    name:  "Daughters of Sarah Ministry",
    icon:  "UserCircle",
    desc:  "A sanctuary for women to flourish in their divine calling and influence.",
    color: "#fce8e8",
  },
  {
    key:   "men",
    name:  "Men Alive Ministry",
    icon:  "Shield",
    desc:  "Building strong leaders, husbands, and fathers rooted in Biblical principles.",
    color: "#fce8e8",
  },
  
  {
    key:   "worship",
    name:  "Worship & Arts",
    icon:  "Music",
    desc:  "Lifting the name of Jesus through anointed music, dance, and creative arts.",
    color: "#fce8e8",
  },
  {
    key:   "outreach",
    name:  "Outreach & Missions",
    icon:  "Globe",
    desc:  "Taking the gospel beyond the walls of the church to Warri and the nations.",
    color: "#fce8e8",
  },
];

// ── Color Palette (JS reference matching CSS vars) ───────────
export const COLORS = {
  navy:       "#0f2744",
  navyMid:    "#1a3a5c",
  gold:       "#c8922a",
  goldLight:  "#e0a93e",
  goldPale:   "#fff3e0",
  red:        "#b91c1c",
  redDark:    "#991b1b",
  cream:      "#faf8f5",
  white:      "#ffffff",
  gray:       "#6b7280",
  grayLight:  "#f3f4f6",
};

// ── Xano API Base URL (update when Xano workspace is ready) ──
export const API_BASE_URL = "https://YOUR-XANO-INSTANCE.xano.io/api:XXXXXXXX";