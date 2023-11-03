import Image from "next/image";

import cyberSecurity from "../../assets/cyberSecurity.svg";
import devWeb from "../../assets/dev-web.svg";
import desing from "../../assets/design.svg";
import hospedagem from "../../assets/hospedagem.svg";
import socialMedia from "../../assets/social-media.svg";

export function Services() {
  return (
    <section className="flex flex-col items-center justify-center my-[2.5rem] max-w-[1440px] mx-auto tabletSM:flex-wrap" id="servicos">
      <h1 className="before:bg-white before:w-[4.5rem] before:h-[1px] after:bg-white after:w-[4.5rem] after:h-[1px] flex justify-center items-center gap-[1.5rem] font-[200] text-[3.4rem] laptopSM:text-[5.9rem]">
        Nossos
      </h1>
      <h3 className="text-[3.5rem] font-bold mb-[2.4rem] laptopSM:text-[6rem]">Serviços</h3>

      <div className="flex flex-col items-center justify-center tabletSM:flex-wrap tabletSM:flex-row tabletSM:gap-[10%] pt-[4rem]">
        <div className="service">
          <Image className="img-service" src={cyberSecurity} alt="" />

          <div>
            <h3 className="title">Cyber Security</h3>
            <p className="description">
              A equipe de suporte precisa saber que o gerenciador.
            </p>
          </div>
        </div>

        <div className="service">
          <Image className="img-service" src={desing} alt="" />
          <h3 className="title">Design</h3>
          <p className="description">
            A equipe de suporte precisa saber que o gerenciador.
          </p>
        </div>

        <div className="service">
          <Image className="img-service" src={devWeb} alt="" />
          <h3 className="title">Web Development</h3>
          <p className="description">
            A equipe de suporte precisa saber que o gerenciador.
          </p>
        </div>

        <div className="service">
          <Image className="img-service" src={hospedagem} alt="" />
          <h3 className="title">Hospedagem</h3>
          <p className="description">
            A equipe de suporte precisa saber que o gerenciador.
          </p>
        </div>

        <div className="service">
          <Image className="img-service" src={socialMedia} alt="" />
          <h3 className="title">Social Media</h3>
          <p className="description">
            A equipe de suporte precisa saber que o gerenciador.
          </p>
        </div>
      </div>
    </section>
  );
}
