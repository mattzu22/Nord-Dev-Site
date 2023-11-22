"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "/public/images/logo.png";
import { useState } from "react";


export function Header() {
  const [menuActive, setMenuActive] = useState<string>("inicio");

  return (
      <header className="bg-bg-secundary sticky top-0 w-full z-10">
        <div className="max-w-[1440px] mx-auto px-[1.4rem] flex flex-col tabletSM:px-[3rem] tabletLG:flex-row tabletLG:justify-between tabletLG:items-center ">
          <Link href="#">
            <Image
              src={logo}
              alt=""
              className="w-[25rem] py-[4.6rem] px-[1.4rem] "
            />
          </Link>

          <nav className="max-w-full px-[1.4rem]">
            <ul className="text-white-400 flex items-center justify-between text-[1.3rem] tabletSM:text-[1.8rem] tabletLG:gap-[6rem]">
              <li className={menuActive == "inicio" ? "active" : "links"}>
                <Link onClick={() => setMenuActive("inicio")} href={"#inicio"}>
                  Início
                </Link>
              </li>
              <li className={menuActive == "quem-somos" ? "active" : "links"}>
                <Link
                  onClick={() => setMenuActive("quem-somos")}
                  href={"#quem-somos"}
                >
                  Quem somos?
                </Link>
              </li>
              {/* <li className={menuActive == "projetos" ? "active" : "links"}>
              <Link
                onClick={() => setMenuActive("projetos")}
                href={"#projetos"}
              >
                Projetos
              </Link>
            </li> */}
              <li className={menuActive == "servicos" ? "active" : "links"}>
                <Link
                  onClick={() => setMenuActive("servicos")}
                  href={"#servicos"}
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="https://api.whatsapp.com/send/?phone=5585986263325&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
            target="true"
            className="hidden bg-yellow-500 text-black border-[1px] border-transparent px-[21px] py-[7px] rounded-[6px] text-[1.8rem] laptopMD:block hover:bg-transparent hover:text-yellow-500 hover:border-[1px] hover:border-yellow-500 transition-all"
          >
            Solicite um orçamento
          </Link>
        </div>
      </header>
  );
}
