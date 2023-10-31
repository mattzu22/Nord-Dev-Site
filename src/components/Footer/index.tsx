import Image from "next/image";
import Link from "next/link";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

import logoFooter from "../../assets/logo-footer.png";
import logoDesktop from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-bg-secundary py-[5rem] tabletMD:py-[10rem]">
      <div className="max-w-[1440px] mx-auto pl-[4.2rem] flex flex-col tabletMD:flex-row tabletMD:items-center tabletMD:justify-between tabletMD:px-[2rem] laptopMD:px-[10rem]">
        <Image
          className="mb-[3rem] tabletMD:mb-0 laptopMD:hidden"
          src={logoFooter}
          alt="logo"
        />
        <Image
          className="hidden laptopMD:block w-[342px]"
          src={logoDesktop}
          alt=""
        />

        <nav>
          <ul className="text-[1.8rem] font-[600] leading-[3.3rem] flex flex-col gap-[1.6rem] tabletMD:flex-row tabletMD:gap-[3.5rem] laptopMD:gap-[5rem]">
            <li>Sobre nós</li>
            <li>Nossos projetos</li>
            <li>© NORDDEV</li>
          </ul>
        </nav>

        <div className="flex gap-[2.1rem] mt-[5rem] tabletMD:mt-0 tabletMD:gap-[1.5rem]">
          <Link href="#">
            <BsLinkedin className="social" />
          </Link>
          <Link href="#">
            <BsFacebook className="social" />
          </Link>
          <Link href="#">
            <BsGithub className="social" />
          </Link>
          <Link href="#">
            <RiWhatsappFill className="social" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
