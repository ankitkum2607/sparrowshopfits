import { CaseStudies } from "@/components/CaseStudies";
import { ClientLogos } from "@/components/ClientLogos";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Intro } from "@/components/Intro";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { PlanReality } from "@/components/PlanReality";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { ScrollFx } from "@/components/ScrollFx";
import { Services } from "@/components/Services";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* The hero is sticky inside this wrapper, so the sections after it slide up over the image. */}
        <div id="top">
          <Hero />
          <div className="relative z-10">
            <ClientLogos />
            <Intro />
            <Process />
            <Timeline />
          </div>
        </div>
        <Portfolio />
        <Technology />
        <PlanReality />
        <Services />
        <Industries />
        <Metrics />
        <CaseStudies />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
