// Static content for the prototype. Facts (projects, dates, areas, testimonials,
// metrics, contact details) are taken from sparrowshopfits.com; nothing is invented.
import { img } from "./images";

const SITE = "https://sparrowshopfits.com";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
];

export const contact = {
  email: "info@sparrowshopfits.com",
  phone: "+91 85952 40025",
  tel: "+918595240025",
  address: ["1207, Sector 28, DLF Phase IV", "Gurugram, Haryana 122002", "India"],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/sparrowshopfits/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sparrow-shopfits/" },
    { label: "YouTube", href: "https://www.youtube.com/@sparrow_shopfits" },
    { label: "Facebook", href: "https://www.facebook.com/sparrowshopfits/" },
    { label: "Pinterest", href: "https://in.pinterest.com/sparrowshopfits/" },
  ],
};

export const processSteps = [
  {
    title: "Design",
    text: "Concept design, AI-assisted layouts and working drawings shaped around the brand and the site.",
    image: img.armani3,
    alt: "Armani Exchange store interior with timber slat walls",
  },
  {
    title: "Plan",
    text: "Site survey reports, cost estimates, schedules and mall or authority approvals, locked before work starts.",
    image: img.sunglass4,
    alt: "Sunglass Hut display wall with illuminated shelving",
  },
  {
    title: "Build",
    text: "Factory-made fixtures and on-site civil, MEP and interior works, tracked in real time.",
    image: img.zudio2,
    alt: "Zudio store floor during final fit-out",
  },
  {
    title: "Handover",
    text: "Snag lists, joint measurements and audits closed out, so the store opens ready to trade.",
    image: img.home4,
    alt: "Burnt Toast storefront ready for handover",
  },
];

export const timeline = ["Site Survey", "Design", "Approval", "Fabrication", "Execution", "Handover"];

export const projects = [
  {
    name: "Zudio",
    industry: "Retail & Fashion",
    location: "VR Mall, Bangalore",
    services: ["Project Management", "6,500 sq ft", "2025"],
    image: img.zudio3,
    alt: "Zudio store at VR Mall Bangalore with illuminated brand wall",
    href: `${SITE}/portfolio/zudio-vr-mall-bangalore-karnataka/`,
  },
  {
    name: "Armani Exchange",
    industry: "Luxury & Lifestyle",
    location: "Inorbit Mall, Visakhapatnam",
    services: ["Project Management", "1,503 sq ft", "2026"],
    image: img.armani4,
    alt: "Armani Exchange store interior at Inorbit Mall Visakhapatnam",
    href: `${SITE}/portfolio/armani-exchange-inorbit-mall-visakhapatnam-andhra-pradesh/`,
  },
  {
    name: "Sunglass Icon",
    industry: "Airport Retail",
    location: "RGI Airport, Hyderabad",
    services: ["Project Management", "850 sq ft", "2026"],
    image: img.sunglass1,
    alt: "Sunglass Icon by Sunglass Hut store at Hyderabad airport",
    href: `${SITE}/portfolio/sunglass-icon-by-sunglass-hut-rajiv-gandhi-international-airport-hyderabad/`,
  },
  {
    name: "Bluorng",
    industry: "Retail & Fashion",
    location: "DLF Summit Plaza, Gurugram",
    services: ["Turnkey Execution", "900 sq ft", "2026"],
    image: img.bluorng2,
    alt: "Bluorng store with concrete portal and garment rail",
    href: `${SITE}/portfolio/bluorng-dlf-summit-plaza-gurugram/`,
  },
  {
    name: "Max",
    industry: "Retail & Fashion",
    location: "Bailey Square Mall, Patna",
    services: ["Project Management", "10,816 sq ft", "2026"],
    image: img.max1,
    alt: "Max Fashion storefront at Bailey Square Mall Patna",
    href: `${SITE}/portfolio/max-bailey-square-mall-patna-bihar/`,
  },
];

export const techFlow = ["Site Data", "AI Analysis", "Space Planning", "Customer Flow", "Layout", "Execution"];

export const services = [
  { title: "Retail Design", text: "Concepts, layouts and working drawings", image: img.armani3 },
  { title: "Site Survey", text: "App-based measurement and site documentation", image: img.lenskart3 },
  { title: "Project Management", text: "Schedules, vendors, quality and approvals", image: img.max4 },
  { title: "Turnkey Fit-Out", text: "Civil, MEP and interiors under one contract", image: img.bluorng5 },
  { title: "Fixture Manufacturing", text: "Factory-built display fixtures", image: img.sunglass3 },
  { title: "Retail Rollouts", text: "Multi-store programmes, one standard", image: img.vmart2 },
  { title: "Kiosks & Prototypes", text: "Kiosk design, prototyping and fabrication", image: img.home1 },
  { title: "Technology-Enabled Execution", text: "Live progress, estimates and snag tracking", image: img.zudio1 },
];

export const industries = [
  { name: "Fashion", image: img.max2 },
  { name: "Beauty", image: img.sunglass2 },
  { name: "Luxury", image: img.armani2 },
  { name: "Grocery", image: img.home1 },
  { name: "Technology", image: img.lenskart2 },
  { name: "Jewellery", image: img.sunglass3 },
  { name: "Lifestyle", image: img.bluorng2 },
  { name: "Consumer Retail", image: img.vmart3 },
];

export const metrics = [
  { value: 1100, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 20, suffix: "+", label: "Years of founder experience" },
  { value: 16, suffix: "", label: "Countries across MENA, UK and India" },
];

export const caseStudies = [
  {
    client: "Style Up",
    project: "Large-format fashion store",
    location: "ECR, Chennai",
    scope: "Project Management Consultancy · 10,138 sq ft",
    result: "Kicked off 6 August, handed over 29 September 2025.",
    image: img.styleup1,
    alt: "Two-storey Style Up storefront on ECR Chennai",
    href: `${SITE}/portfolio/style-store-up-ecr-chennai/`,
  },
  {
    client: "Lenskart",
    project: "Eyewear store fit-out",
    location: "Rampur, Uttar Pradesh",
    scope: "Turnkey Retail Fit-Out Execution · 1,000 sq ft",
    result: "Delivered in 2025 to Lenskart's national brand guidelines.",
    image: img.lenskart2,
    alt: "Lenskart store interior with illuminated eyewear displays",
    href: `${SITE}/portfolio/lenskart-rampur-uttar-pradesh/`,
  },
  {
    client: "V-Mart",
    project: "Multi-level value retail store",
    location: "Chhapra, Bihar",
    scope: "Project Management Consultancy · 5,807 sq ft",
    result: "Started 28 July, completed 19 September 2026.",
    image: img.vmart1,
    alt: "V-Mart storefront in Chhapra lit up at night",
    href: `${SITE}/portfolio/v-mart-chhapra-bihar/`,
  },
];

export const testimonials = [
  {
    quote:
      "The fixtures crafted by M/S Sparroh showcased exceptional craftsmanship and attention to detail, enhancing the overall aesthetic of our retail space.",
    person: "Manish Kapoor",
    role: "Head of Design & Constructions",
    company: "McDonald's",
  },
  {
    quote:
      "I highly recommend M/S Sparroh for their unmatched commitment to timely delivery and exceptional quality.",
    person: "Ritesh Ghai",
    role: "Sr. Manager Design & Development",
    company: "Adidas",
  },
  {
    quote:
      "M/S Sparroh's professionalism, clear communication, and prompt resolution of challenges were noteworthy. They have become our preferred choice for retail fixture manufacturing.",
    person: "Manish Kumar Sinha",
    role: "Head of Projects Retail",
    company: "Bliss Club",
  },
  {
    quote:
      "Efficiency and commitment to meeting deadlines by M/S Sparroh Team were evident throughout the project. It's great working with the team.",
    person: "Vivek Yadav",
    role: "Retail and F&B Fitout Manager",
    company: "DLF",
  },
  {
    quote:
      "Team ensured that our unique requirements were not only understood but seamlessly incorporated into the final product.",
    person: "Jeevan Santosh S",
    role: "AGM Franchisee Head",
    company: "Suta",
  },
  {
    quote:
      "Team's commitment to timely delivery and unparalleled quality of work have truly set them apart in the industry.",
    person: "Pooja Rajput",
    role: "Founder",
    company: "Chidiyaa",
  },
];
