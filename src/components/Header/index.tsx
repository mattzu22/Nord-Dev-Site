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
          className="w-[22.6rem] py-[4.6rem] px-[1.4rem] "
        />

        <nav className="max-w-full">
          <ul className="text-white-400 flex justify-between text-[1.3rem] tabletSM:text-[1.8rem] laptopMD:gap-[6rem]">
            <li className="font-bold border-b-yellow-500 border-b-4 py-[43px]">
              Início
            </li>
            <li className="py-[43px]">Quem somos?</li>
            <li className="py-[43px]">Projetos</li>
            <li className="py-[43px]">Serviços</li>
          </ul>
        </nav>

        <Link
          href="#"
          className="hidden bg-yellow-500 text-black px-[21px] py-[9px] rounded-[6px] text-[1.8rem] laptopMD:block"
        >
          Solicite um orçamento
        </Link>
      </div>
    </header>
  );
}
