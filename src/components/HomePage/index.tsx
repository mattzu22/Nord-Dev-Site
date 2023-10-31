import Image from "next/image";
import Link from "next/link";

import imgDesktop from "../../assets/home-desktop.png"
import bgDesktop from "../../assets/Vector-5.png"
import bgNotebook from "../../assets/Vector-3.png"

import { Header } from "../Header";
import { RequestQuode } from "../RequestQuote";
import { Services } from "../Services";
import { About } from "../About";


export function HomePage() {
  return (
    <>
      <Header />

      <section className="max-w-[1440px] mx-auto relative text-center min-h-homeMobile tabletSM:min-h-homeDesktop flex flex-col justify-center items-center laptopMD:flex laptopMD:items-center laptopMD:flex-row laptopMD:gap-[2.5rem] overflow-hidden">
        <Image src={bgDesktop} className="hidden laptopMD:absolute laptopMD:bottom-[-20rem] laptopMD:left-0 laptopMD:block" alt=""/>

        <div className="max-w-[680px] min-w-[335px] px-[16px] laptopMD:text-left">
          <h1 className="text-white text-[3.2rem] font-bold mb-[2.4rem] tabletSM:text-[5rem] laptopMD:text-[5.6rem] laptopLG:text-[6.7rem]">
            Serviço completo para a sua empresa
          </h1>
          <p className="text-[1.3rem] tabletSM:text-[1.8rem] laptopMD:text-[2.2rem]">
            Desenvolvemos e construímos websites para a sua empresa, além de
            serviços de manutenção, etc.
          </p>

          <div className="pt-[2.4rem] flex justify-center gap-[2rem] laptopMD:justify-start">
            <Link
              href="#"
              className="bg-yellow-500 px-[2.1rem] py-[1.2rem] text-[1.5rem] rounded-[4px] text-nord-neutral-10 font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px] "
            >
              Entre em contato
            </Link>
            <Link
              href="#"
              className="border-[0.05rem] rounded-[4px] px-[2.1rem] py-[1.2rem] text-[1.4rem] font-[500] tabletSM:text-[2rem] tabletSM:rounded-[9px] tabletSM:px-[32px] tabletSM:py-[13px]"
            >
              Nossos projetos
            </Link>
          </div>
        </div>

        <div className="laptopMD:relative">
          <Image className="w-[680px] max-w-full mt-[5rem]" src={imgDesktop} alt=""/>
          <Image src={bgNotebook} className="hidden laptopMD:absolute laptopMD:bottom-[-10rem] laptopMD:left-[20rem] laptopMD:z-[-1] laptopMD:block" alt=""/>
        </div>
      </section>

      <About />

      <Services />

      <RequestQuode />
    </>
  );
}
