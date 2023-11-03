import Image from "next/image";
import Link from "next/link";

import imgDesktop from "../../../public/assets/home-desktop.png";
import bgDesktop from "../../../public/assets/Vector-5.png";
import bgNotebook from "../../../public/assets/Vector-3.png";

export function HomePage() {
  return (
    <section id="inicio">
      <Image
        src={bgDesktop}
        className="hidden tabletLG:block tabletLG:absolute tabletLG:bottom-[-15rem] tabletLG:left-0 "
        alt=""
      />
      <div className="max-w-[1440px] mx-auto text-center min-h-homeMobile flex flex-col justify-center items-center tabletLG:flex tabletLG:items-center tabletLG:flex-row laptopSM:gap-[2.5rem] tabletLG:min-h-homeDesktop overflow-hidden">
        <div className="w-[680px] min-w-[335px] max-w-full px-[16px] tabletLG:text-left">
          <h1 className="text-white text-[3.4rem] font-bold mb-[2.4rem] tabletSM:text-[5.5rem] tabletSM:max-w-[520px] tabletSM:mx-auto tabletMD:text-[6rem] tabletMD:max-w-[590px] tabletLG:text-[4.7rem] laptopSM:ml-0 laptopSM:max-w-full laptopSM:text-[5.3rem] laptopMD:text-[5.9rem] laptopLG:text-[6.4rem]">
            Serviço completo para a sua empresa
          </h1>
          <p className="text-[1.3rem] tabletSM:text-[1.8rem] laptopSM:text-[1.8rem] tabletMD:text-[2.4rem] tabletLG:text-[1.6rem] laptopMD:text-[2rem] laptopLG:text-[2.2rem]">
            Desenvolvemos e construímos websites para a sua empresa, além de
            serviços de manutenção, etc.
          </p>

          <div className="pt-[2.4rem] flex justify-center items-center gap-[2rem] tabletMD:gap-[4.4rem] tabletLG:justify-start ">
            <Link
              href="#"
              className="bg-yellow-500 px-[1.3rem] py-[0.9rem] text-[1.5rem] rounded-[4px] text-nord-neutral-10 font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px] tabletMD:px-[2rem] border-[1px] border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all tabletLG:text-[1.8rem] laptopMD:text-[2.1rem] "
            >
              Entre em contato
            </Link>
            <Link
              href="#"
              className="border-[0.05rem] rounded-[4px] px-[2.2rem] py-[0.9rem] text-[1.3rem] font-[600] tabletSM:text-[2rem] tabletSM:rounded-[9px]  hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all tabletLG:text-[1.8rem] laptopMD:text-[2.1rem]"
            >
              Nossos projetos
            </Link>
          </div>
        </div>

        <Image
          className="w-[680px] min-w-[340px] max-w-full mt-[5rem] pl-[1.5rem] tabletLG:mt-0 tabletLG:pl-0"
          src={imgDesktop}
          alt=""
        />
      </div>
      
      <Image
        src={bgNotebook}
        className="hidden tabletLG:absolute tabletLG:bottom-[10rem] tabletLG:right-0 tabletLG:z-[-1] tabletLG:block"
        alt=""
      />
    </section>
  );
}
