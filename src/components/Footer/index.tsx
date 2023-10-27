import Image from "next/image";
import Link from "next/link";

import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {RiWhatsappFill} from "react-icons/ri"

import logo from "../../assets/logo-footer.png"

export function Footer() {
  return (
    <section className="bg-bg-secundary pl-[4.2rem] py-[5rem]">
        <Image className="mb-[3rem]"  src={logo} alt="logo"/>

        <nav>
            <ul className="text-[1.9rem] font-[600] leading-[3.3rem] flex flex-col gap-[1.6rem] ">
                <li>Sobre nós</li>
                <li>Nossos projetos</li>
                <li>© NORDDEV</li>
            </ul>
        </nav>

        <div className="flex gap-[2.1rem] mt-[5rem]">
            <Link href="#"><BsLinkedin className="text-[3.2rem] w-[] text-yellow-500 rounded-[50%]"/></Link>
            <Link href="#"><BsFacebook className="text-[3.2rem] w-[] text-yellow-500 rounded-[50%]"/></Link>
            <Link href="#"><BsGithub className="text-[3.2rem] w-[] text-yellow-500 rounded-[50%]"/></Link>
            <Link href="#"><RiWhatsappFill className="text-[3.5rem] w-[] text-yellow-500 rounded-[50%]"/></Link>
        </div>
    </section>
  )
}

