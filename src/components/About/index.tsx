import Image from "next/image";

import bgAboutMobile from "../../assets/bg-about-mobile.png";
import imageAbout from "../../assets/bg-image-about.png";
import bgAboutDesktop from "../../assets/bg-about-desktop.png";
import imageAboutDesktop from "../../assets/image-about-desktop.png";

export function About() {
  return (
    <section className="max-w-[2000px] relative flex flex-col tabletLG:flex-row tabletpLG:justify-center laptopSM:mx-auto laptopSM:items-center" id="quem-somos">
      <div className="h-[280px] flex items-center border-t-[1rem] border-yellow-500 w-full justify-center laptopSM:relative tabletLG:border-l-[1.3rem] tabletMD:h-[400px] tabletLG:border-t-0 tabletLG:h-[500px] laptopLG:h-[633px] tabletLG:max-w-full tabletLG:justify-normal">
        <Image
          className="block w-full h-full -z-10 border-top tabletLG:hidden"
          src={bgAboutMobile}
          alt=""
        />
        <Image
          className="hidden absolute h-full pr-[30rem] laptopMD:pr-[10rem] laptopLG:pr-0 tabletLG:block"
          src={bgAboutDesktop}
          alt=""
        />

        <div className="absolute max-w-[656px] px-[2rem] flex justify-center flex-col gap-[1.3rem] pb-[3.5rem] tabletSM:px-[4rem] laptopSM:px-0 laptopSM:pb-0 laptopSM:ml-[5rem] laptopMD:ml-[8rem]">
          <h2 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] text-[1.1rem] mb-[1.3rem] text-center flex justify-center items-center gap-[1.9rem] tabletSM:text-[1.6rem] tabletMD:text-[2.3rem] tabletLG:text-[2rem] laptopMD:text-[2.3rem] laptopLG:text-[2.9rem]">
            SOMOS UMA EMPRESA (Especializada)
          </h2>

          <p className="text-[1.5rem] font-[600] tabletSM:text-[1.9rem] tabletMD:text-[2.8rem] laptopMD:text-[3.1rem] laptopLG:text-[3.9rem]">
            Criando e melhorando sistemas com{" "}
            <span className="text-key">TECNOLOGIA</span>,
            <span className="text-key">INOVAÇÃO</span> &{" "}
            <span className="text-key">TECNOLOGIA</span>
          </p>

          <p className="text-[1.4rem] tabletSM:text-[1.9rem] tabletMD:text-[1.6rem] tabletLG:text-[1.9rem] laptopMD:text-[2.1rem] laptopLG:text-[1.9rem]">
            Desenvolvemos e construímos websites para a sua empresa, além de
            serviços de manutenção, etc e etc.
          </p>
        </div>
      </div>
      <Image
        className="w-full relative top-[-70px] -z-20 tabletMD:top-[-100px] laptopSM:top-[-130px] block tabletLG:hidden"
        src={imageAbout}
        alt=""
      />
      <Image
        className="tabletLG:block max-w-[1200px] h-[495px] laptopLG:h-[633px] w-full object-cover hidden absolute right-0 -z-10"
        src={imageAboutDesktop}
        alt=""
      />
    </section>
  );
}
