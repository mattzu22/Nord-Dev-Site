import Image from "next/image"
import logo from "../../assets/logo.png"
import Link from "next/link"

export function Header() {
  return (
    <header className="max-w-[1920px] px-[1.4rem] flex flex-col bg-bg-secundary tablet:flex-row tablet:justify-between tablet:items-center tablet:px-[10rem] ">
        <Image src={logo} alt="" className="w-[22.6rem] my-[4.6rem]  px-[1.4rem] tablet:w-[385px]"/>

        <nav className="max-w-full">
            <ul className="text-white-400 flex text-[1.3rem] justify-between tablet:text-[2.5rem] tablet:gap-[47px]">
                <li className="px-[1.2rem] py-[1.5rem] font-bold border-b-yellow-500 border-b-2">Início</li>
                <li className="px-[1.2rem] py-[1.5rem]">Quem somos?</li>
                <li className="px-[1.2rem] py-[1.5rem]">Projetos</li>
                <li className="px-[1.2rem] py-[1.5rem]">Serviços</li>
            </ul>
        </nav>

        <Link href="#" className="hidden tablet:block bg-yellow-500 text-black px-[21px] py-[9px] rounded-[6px] text-[2.1rem]">Solicite um orçamento</Link>
    </header>
  )
}
