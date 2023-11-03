import Link from "next/link";
import Image from "next/image";

import bgRequest from "../../assets/bg-request.png";

export function RequestQuode() {
  return (
    <section className="flex items-center justify-center relative w-full">
      <Image className="w-full object-cover h-[600px] max-h-full" src={bgRequest} alt="" />
      <div className="absolute text-center px-[3.5rem] max-w-[1330px]">
        <h3 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] flex justify-center items-center gap-[1.5rem] text-[1.3rem] mb-[2rem] font-[300] tabletSM:text-[2rem] tabletMD:text-[2.5rem] laptopLG:text-[4rem]">Vamos solicitar o seu orçamento</h3>
        <h2 className="text-[3.6rem] font-[700] pb-[5rem] tabletSM:text-[5rem] tabletSM:px-[6rem] tabletMD:px-[3rem] laptopSM:text-[7rem]">E garantir o <span className="text-yellow-500">sucesso da sua empresa</span> no mundo digital</h2>

        <Link className="text-[1.4rem] text-black bg-yellow-500 px-[1.9rem] py-[1rem] rounded-[5px] font-[600] tabletSM:text-[2rem] tabletMD:text-[2.3rem] laptopLG:text-[2.7rem] laptopLG:px-[3.5rem] border-[1px] border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all" href="#">Solicitar orçamento</Link>
      </div>
    </section>
  );
}
