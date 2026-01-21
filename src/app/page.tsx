/**
 * ============================================================
 * LEVEL UP LANDING PAGE - MAIN PAGE COMPONENT
 * ============================================================
 * 
 * 📖 HOW TO EDIT THIS FILE:
 * 
 * This is the main page of your website. It's written in React/TypeScript
 * but don't worry - most edits are just changing text between quotes!
 * 
 * 🔍 QUICK NAVIGATION (use Ctrl+F to search):
 * 
 *   "COMPANY INFO"     - Change company name, tagline, year
 *   "HERO SECTION"     - The big headline at the top
 *   "MARQUEE"          - The scrolling text strip  
 *   "SERVICES"         - The 4 service cards (accordion)
 *   "STATEMENT"        - The "Why We Exist" section
 *   "FOOTER"           - Bottom section with contact info
 * 
 * 🎨 ICONS: We use "lucide-react" for icons. To find more icons,
 *    visit: https://lucide.dev/icons
 * 
 * ============================================================
 */

'use client';

// === IMPORTS ===
// React hooks for managing state and effects
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Icons from Lucide (https://lucide.dev/icons)
// To add more icons, import them here and use as <IconName />
import {
  ArrowUpRight,  // Arrow pointing up-right (used for buttons)
  Menu,          // Hamburger menu icon (mobile)
  X,             // X/close icon
  Plus,          // Plus sign (accordion expand)
  Minus          // Minus sign (accordion collapse)
} from 'lucide-react';


/* ============================================================
   COMPANY INFO - EDIT YOUR BASIC INFO HERE!
   ============================================================ */

const COMPANY = {
  name: "Level Up",
  tagline: "Structure & Data",
  yearEstablished: "2014",
  location: "SLC, UT",
  phone: "385-335-5542",
  email: "johncook@levelupinstalling.com",
};


/* ============================================================
   NAVIGATION LINKS - ADD OR REMOVE NAV ITEMS HERE
   ============================================================ */

const NAV_LINKS = ['Expertise', 'Projects', 'Safety', 'Contact'];


/* ============================================================
   SERVICES DATA - EDIT YOUR SERVICES HERE!
   ============================================================
   
   Each service has:
   - id: Display number (01, 02, etc.)
   - title: The service name
   - desc: A description paragraph
   - specs: A list of 3 specific offerings
   
   To add a new service, copy one of these blocks and edit it.
   To remove a service, delete the entire { ... } block.
   
============================================================ */

const SERVICES = [
  {
    id: "01",
    title: "Containment Systems",
    desc: "Thermal isolation architecture. Full-scale hot and cold aisle solutions. From field measurements to hermetic sealing.",
    specs: [
      "HAC/CAC Configurations",
      "Structural Ceiling Grids",
      "Custom End-Row Assemblies"
    ]
  },
  {
    id: "02",
    title: "Critical Conveyance",
    desc: "The nervous system of the facility. Seismic-rated overhead and underfloor pathways deployed at scale.",
    specs: [
      "Fiber Raceway Integration",
      "Basket Tray Systems",
      "Seismic bracing (Zone 4)"
    ]
  },
  {
    id: "03",
    title: "Structural Decking",
    desc: "Heavy infrastructure support. Industrial steel and FRP decking creating access in complex mechanical environments.",
    specs: [
      "Generator Gantries",
      "Maintenance Walkways",
      "Industrial Steel & FRP"
    ]
  },
  {
    id: "04",
    title: "Raised Access Floor",
    desc: "The literal foundation. Laser-leveled grid systems built to support massive static loads. Live-environment retrofits.",
    specs: [
      "Pedestal Stabilization",
      "Airflow Panel Logic",
      "Live-Environment Retrofits"
    ]
  }
];


/* ============================================================
   MARQUEE TEXT - EDIT THE SCROLLING TEXT HERE
   ============================================================ */

const MARQUEE_ITEMS = [
  "60+ Technicians",
  "Nationwide Deployment",
  "OSHA 30 Certified",
  "Precision Installation"
];


/* ============================================================
   FEATURES - EDIT THE "WHY WE EXIST" FEATURES HERE
   ============================================================ */

const FEATURES = [
  {
    number: "01",
    title: "Rapid Mobilization",
    desc: "60+ technicians ready to deploy nationwide. We keep the schedule moving."
  },
  {
    number: "02",
    title: "Clinical Standards",
    desc: "Strict white-space cleanliness protocols. We treat the data center like a lab."
  }
];


/* ============================================================
   MAIN PAGE COMPONENT
   ============================================================
   
   This is the actual page that gets rendered. Each section is
   clearly labeled below. To edit content, scroll to the section
   you want to change.
   
============================================================ */

export default function LevelUpPage() {
  // --- STATE VARIABLES ---
  // These track things that can change (like scroll position, menu open/closed)

  const [isScrolled, setIsScrolled] = useState(false);          // Has user scrolled down?
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  // Is mobile menu open?
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);  // Which service is expanded?

  // --- SCROLL EFFECT ---
  // This makes the navigation shrink when you scroll down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  /* ==========================================================
     RENDER THE PAGE
     ==========================================================
     
     Below is the actual HTML structure of the page.
     Each section is wrapped in comments explaining what it is.
     
  ========================================================== */

  return (
    <div className="min-h-screen bg-[--color-bg-primary] text-[--color-text-primary] font-sans selection:bg-[--color-accent] selection:text-white overflow-x-hidden">


      {/* ========================================
          BACKGROUND GRID LINES
          ========================================
          These are the subtle vertical lines in the background.
          They're decorative only - adds to the "brutalist" feel.
      ======================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-20">
        <div className="w-px h-full bg-white/10"></div>
        <div className="w-px h-full bg-white/10"></div>
        <div className="w-px h-full bg-white/10 hidden md:block"></div>
        <div className="w-px h-full bg-white/10 hidden md:block"></div>
        <div className="w-px h-full bg-white/10"></div>
      </div>


      {/* ========================================
          NAVIGATION BAR
          ========================================
          The top menu that stays fixed as you scroll.
          
          🎯 TO EDIT: 
          - Company name: Change COMPANY.name at the top of this file
          - Links: Edit the NAV_LINKS array at the top
      ======================================== */}
      <nav className={`fixed w-full z-50 transition-all duration-300 mix-blend-difference ${isScrolled ? 'py-4' : 'py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-start">

          {/* Logo */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tighter uppercase leading-none">
              {COMPANY.name}
            </h1>
            <span className="text-[10px] font-mono text-[--color-accent] uppercase tracking-widest mt-1">
              {COMPANY.tagline}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-12 text-xs font-bold uppercase tracking-widest">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[--color-accent] transition-colors flex items-start gap-1 group"
              >
                {item}
                <span className="text-[--color-accent] opacity-0 group-hover:opacity-100 transition-opacity">.</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu (hidden on desktop) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[--color-bg-primary] border-b border-white/10 p-6">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-xl font-bold uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* ========================================
          HERO SECTION
          ========================================
          The big headline at the top of the page.
          
          🎯 TO EDIT:
          - Main headline: Change "Structure" and "& Data" below
          - Description: Change the paragraph text
          - Button: Change "Start Project" text
      ======================================== */}
      <header className="relative min-h-screen flex flex-col justify-end pb-20 pt-40 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          {/* Status Badge */}
          <div className="mb-8 flex items-center gap-4">
            <div className="w-2 h-2 bg-[--color-accent]"></div>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Global Operations / Active
            </span>
          </div>

          {/* Main Headline - EDIT THIS TEXT! */}
          <div className="relative">
            <h1 className="text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter text-white mix-blend-overlay opacity-50 select-none">
              Structure
            </h1>
            <h1 className="text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter text-white mt-[-2vw] ml-[4vw]">
              & Data
            </h1>
          </div>

          {/* Info Grid (Location, Description, CTA Button) */}
          <div className="grid md:grid-cols-12 gap-8 mt-20 border-t border-white/10 pt-8">

            {/* Location Info */}
            <div className="md:col-span-4 font-mono text-xs text-zinc-500 uppercase leading-relaxed">
              Based in {COMPANY.location}<br />
              Deploying Nationwide<br />
              EST. {COMPANY.yearEstablished}
            </div>

            {/* Description Paragraph - EDIT THIS TEXT! */}
            <div className="md:col-span-5">
              <p className="text-xl md:text-2xl font-medium leading-tight max-w-lg">
                We build the physical backbone of the internet.
                Specialized installation for hyperscale data centers.
              </p>
            </div>

            {/* Call-to-Action Button */}
            <div className="md:col-span-3 flex justify-end items-start">
              <a
                href="/contact"
                className="bg-[--color-accent] hover:bg-white hover:text-black transition-colors text-white text-sm font-bold uppercase px-8 py-4 tracking-wider flex items-center gap-2"
              >
                Start Project <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </header>


      {/* ========================================
          MARQUEE STRIP
          ========================================
          The scrolling text banner.
          
          🎯 TO EDIT: Change the MARQUEE_ITEMS array at the top
      ======================================== */}
      <div className="border-b border-white/10 py-4 overflow-hidden bg-white text-black">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-bold uppercase tracking-tighter text-sm">
          {/* We repeat the items 8 times to create seamless loop */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {MARQUEE_ITEMS.map((item, j) => (
                <span key={j}>
                  {item}
                  <span className="text-[--color-accent] ml-16">+</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* ========================================
          SERVICES SECTION (Accordion)
          ========================================
          The 4 expandable service cards.
          
          🎯 TO EDIT: Change the SERVICES array at the top of this file
      ======================================== */}
      <section id="expertise" className="py-0 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12">

          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors cursor-pointer"
              onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
            >
              <div className="py-12 md:py-16 grid md:grid-cols-12 gap-8 items-start">

                {/* Service Number */}
                <div className="md:col-span-2 font-mono text-xs text-[--color-accent] uppercase pt-2">
                  ( {service.id} )
                </div>

                {/* Service Title */}
                <div className="md:col-span-5">
                  <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h2>
                </div>

                {/* Service Content (expandable on mobile) */}
                <div className="md:col-span-4 md:col-start-9 flex justify-between items-start">
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === idx
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
                    }`}>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.specs.map((spec, i) => (
                        <li key={i} className="font-mono text-xs uppercase text-zinc-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[--color-accent]"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand/Collapse Icon (mobile only) */}
                  <div className="md:hidden">
                    {activeAccordion === idx ? <Minus /> : <Plus />}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* ========================================
          STATEMENT BLOCK ("WHY WE EXIST")
          ========================================
          The two-column section with image and features.
          
          🎯 TO EDIT:
          - Headline: Change the "We execute the hard stuff" text below
          - Features: Edit the FEATURES array at the top
      ======================================== */}
      <section id="projects" className="grid md:grid-cols-2 min-h-[80vh] border-b border-white/10">

        {/* Left Side - Abstract Image/Graphic */}
        <div className="bg-zinc-900 border-r border-white/10 relative overflow-hidden">

          {/* Real Work Image (Generated/Placeholder) */}
          <div className="absolute inset-0">
            <Image
              src="/datacenter-construction.png"
              alt="Data Center Construction"
              fill
              className="object-cover opacity-40 grayscale mix-blend-luminosity"
            />
            {/* Dark gradient overlay so text remains readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          </div>

          {/* Field Report Badge */}
          <div className="absolute bottom-8 left-8">
            <div className="bg-[--color-accent] text-white text-xs font-bold uppercase px-3 py-1 inline-block mb-2">
              Field Report
            </div>
            <p className="font-mono text-xs text-zinc-400">
              Zero-defect delivery maintained across 15 sites.
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between p-12 md:p-24 bg-[--color-bg-primary]">
          <div>
            <h3 className="text-[--color-accent] font-mono text-xs uppercase tracking-widest mb-8">
              Why We Exist
            </h3>
            {/* Main Statement - EDIT THIS TEXT! */}
            <p className="text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight mb-12">
              We execute the <span className="text-zinc-600">hard stuff</span> so you don&apos;t have to.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-lg font-bold uppercase">{feature.title}</span>
                  <span className="font-mono text-[--color-accent]">{feature.number}</span>
                </div>
                <p className="text-zinc-500 text-sm max-w-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================
          FOOTER
          ========================================
          Bottom section with contact info and links.
          
          🎯 TO EDIT:
          - Contact info: Change COMPANY object at the top
          - Links: Edit the lists below directly
      ======================================== */}
      <footer id="contact" className="bg-[--color-bg-primary] pt-20 pb-8">
        <div className="container mx-auto px-6 md:px-12">

          {/* Big "Let's Talk" CTA */}
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-4 mb-4">
            <a href="/contact" className="group">
              <h2 className="text-[15vw] md:text-[10vw] font-bold uppercase leading-none tracking-tighter text-zinc-800 group-hover:text-white transition-colors cursor-pointer select-none">
                Let&apos;s Talk
              </h2>
            </a>
            <a
              href="/contact"
              className="hidden md:flex bg-[--color-accent] w-32 h-32 rounded-full items-center justify-center hover:scale-110 transition-transform mb-8"
            >
              <ArrowUpRight size={48} className="text-white" />
            </a>
          </div>

          {/* Footer Grid - Links and Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">

            {/* Contact Column */}
            <div>
              <h4 className="font-mono text-xs text-[--color-accent] uppercase mb-6">Contact</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-white cursor-pointer">
                    Email Ops
                  </a>
                </li>
                <li>
                  <a href={`tel:${COMPANY.phone}`} className="hover:text-white cursor-pointer">
                    {COMPANY.phone}
                  </a>
                </li>
                <li><a href="#" className="hover:text-white cursor-pointer">LinkedIn</a></li>
              </ul>
            </div>

            {/* Sitemap Column */}
            <div>
              <h4 className="font-mono text-xs text-[--color-accent] uppercase mb-6">Sitemap</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#expertise" className="hover:text-white cursor-pointer">Capabilities</a></li>
                <li><a href="#projects" className="hover:text-white cursor-pointer">Projects</a></li>
                <li><a href="#safety" className="hover:text-white cursor-pointer">Safety</a></li>
              </ul>
            </div>

            {/* Company Description */}
            <div className="col-span-2 md:col-span-2 md:text-right">
              <p className="text-zinc-600 text-sm max-w-md ml-auto">
                {COMPANY.name} {COMPANY.tagline}<br />
                Precision structural installation for the digital age.
              </p>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-white/10 font-mono text-[10px] uppercase text-zinc-600">
            <span>© {new Date().getFullYear()} {COMPANY.name}</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-400">Privacy</a>
              <a href="#" className="hover:text-zinc-400">Terms</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
