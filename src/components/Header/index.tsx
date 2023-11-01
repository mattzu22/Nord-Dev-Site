import Image from "next/image";
import logo from "../../assets/logo.png";

import Link from "next/link";

export function Header() {
  return (
    <header className="bg-bg-secundary ">
      <div className="max-w-[1440px] mx-auto px-[1.4rem] flex flex-col tabletSM:px-[3rem] laptopMD:flex-row laptopMD:justify-between laptopMD:items-center">
        <Image
          src={logo}
          alt=""
          className="w-[25rem] py-[4.6rem] px-[1.4rem] "
        />

        <nav className="max-w-full">
          <ul className="text-white-400 flex justify-between text-[1.3rem] tabletSM:text-[1.8rem] laptopMD:gap-[6rem]">
            <li className="font-bold border-b-yellow-500 border-b-4 px-[1.4rem] py-[1.3rem] laptopMD:py-[43px] laptopMD:px-0">
              <Link href={"inicio"}>Início</Link> 
            </li>
            <li className="px-[1.4rem] py-[1.3rem] laptopMD:py-[43px] laptopMD:px-0">
              <Link href={"quem-somos"}>Quem somos?</Link>
            </li>
            <li className="px-[1.4rem] py-[1.3rem] laptopMD:py-[43px] laptopMD:px-0">
              <Link href={"projetos"}>Projetos</Link>
            </li>
            <li className="px-[1.4rem] py-[1.3rem] laptopMD:py-[43px] laptopMD:px-0">
              <Link href={"servicos"}>Serviços</Link>
            </li>
          </ul>
        </nav>

        <Link
          href="#"
          className="hidden bg-yellow-500 text-black px-[21px] py-[7px] rounded-[6px] text-[1.8rem] laptopMD:block"
        >
          Solicite um orçamento
        </Link>
      </div>
    </header>
  );
}
