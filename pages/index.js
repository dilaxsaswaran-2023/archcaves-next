import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Projects from "../components/ui/Projects";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Endorsement from "../components/ui/Endorsement";
import AboutUs from "../components/ui/AboutUs";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        <Projects />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Endorsement />
      </GradientWrapper>
      <GradientWrapper>
        <AboutUs />
      </GradientWrapper>
      <FooterCTA />
    </>
  );
}
