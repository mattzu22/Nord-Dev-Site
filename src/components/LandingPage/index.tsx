import { Header } from "../Header";
import { RequestQuode } from "../RequestQuote";
import { Services } from "../Services";
import { About } from "../About";
import { Projects } from "../Projects";
import { HomePage } from "../HomePage";
import { Footer } from "../Footer";
import { Teams } from "../Teams";
import { Supporters } from "../Supporters";


export function LandingPage() {


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
