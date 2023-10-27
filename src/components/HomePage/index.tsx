import Image from "next/image";
import Link from "next/link";

import imgProject from "../../assets/img-project.png";
import imgDesktop from "../../assets/home-desktop.png"

import { Header } from "../Header";

export function HomePage() {
  return (
    <>
      <Header />

      <section className="max-w-[350px] pt-[3rem] mx-auto text-center tablet:flex tablet:max-w-[1920px] tablet:justify-center tablet:text-left items-center">
        <div className="max-w-[670px]">
          <h1 className="text-white text-[4.4rem] font-bold mb-[2.4rem] tablet:text-[6.4rem]">
            Serviço completo para a sua empresa
          </h1>
          <p className="text-[1.3rem] tablet:text-[2rem]">
            Desenvolvemos e construímos websites para a sua empresa, além de
            serviços de manutenção, etc.
          </p>

          <div className="pt-[2.4rem] flex justify-between gap-[2rem]">
            <Link
              href="#"
              className="bg-yellow-500 px-[1.5rem] py-[0.6rem] text-[1.5rem] rounded-[4px] text-nord-neutral-10 font-[600] inline-block tablet:text-[3.2rem] tablet:rounded-[9px] tablet:px-[32px] tablet:py-[13px]"
            >
              Entre em contato
            </Link>
            <Link
              href="#"
              className="border-[0.05rem] rounded-[4px] px-[1.5rem] py-[0.6rem] text-[1.4rem] font-[500] tablet:text-[3.2rem] tablet:rounded-[9px] tablet:px-[32px] tablet:py-[13px]"
            >
              Nossos projetos
            </Link>
          </div>
        </div>
        <div className="relative pt-[1.5rem] mx-[1.5rem]">
          <Image className="w-full tablet:hidden" src={imgProject} alt="" />
          <Image className="hidden tablet:block tablet:max-w-[853px]" src={imgDesktop} alt=""/>
        </div>
      </section>
    </>
  );
}
