import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

import logoFooter from "../../assets/logo-footer.png";
import logoDesktop from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-bg-secundary py-[5rem] tabletMD:py-[10rem]">
      <div className="max-w-[1440px] mx-auto pl-[4.2rem] flex flex-col tabletMD:flex-row tabletMD:items-center tabletMD:justify-between tabletMD:px-[2rem] laptopSM:px-[10rem]">
        <Link href="#">
          <Image
            className="mb-[3rem] tabletMD:mb-0 laptopLG:hidden"
            src={logoFooter}
            alt="logo"
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden laptopLG:block w-[342px]"
            src={logoDesktop}
            alt=""
          />
        </Link>
        <nav>
          <ul className="text-[1.8rem] font-[600] leading-[3.3rem] flex flex-col justify-around gap-[1.6rem] tabletMD:flex-row tabletMD:gap-[3.5rem] laptopSM:gap-[5rem]">
            <li>
              <Link href={"#quem-somos"}>Quem somos</Link>
            </li>
            {/* <li>
              <Link href={"#projetos"}>Nossos projetos</Link>
            </li> */}
            <li>
              <Link href={"#inicio"}>© NORDDEV</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-[2.1rem] mt-[5rem] tabletMD:mt-0 tabletMD:gap-[1.5rem]">
          <Link
            href="https://www.linkedin.com/company/93205029/admin/feed/posts/"
            target="true"
          >
            <BsLinkedin className="social" />
          </Link>
          <Link href="https://www.instagram.com/nord_devv/" target="true">
            <BsInstagram className="social" />
          </Link>
          <Link href="https://github.com/Nord-Devv" target="true">
            <BsGithub className="social" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5585986263325&text=Quero+ser+NORDDEV!&type=phone_number&app_absent=0"
            target="true"
          >
            <RiWhatsappFill className="social" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
