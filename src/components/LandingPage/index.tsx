'use client'

import { Header } from "../Header";
import { RequestQuode } from "../RequestQuote";
import { Services } from "../Services";
import { About } from "../About";
import { Projects } from "../Projects";
import { HomePage } from "../HomePage";
import { Footer } from "../Footer";
import { Teams } from "../Teams";
import { Supporters } from "../Supporters";

import Aos from "aos";

import 'aos/dist/aos.css'

export function LandingPage() {
  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <>
      <Header />

      <main>
        <HomePage />
      </main>

      <About />

      {/* <Projects /> */}
{/* 
      <Supporters /> */}

      {/* <Teams /> */}

      <Services />

      <RequestQuode />

      <Footer />
    </>
  );
}
