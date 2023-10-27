
import bg from "../../assets/bg-about.png"

export function About() {
  return (
    <section className="max-w-full mx-[2rem] text-left ">
      <div className="max-w-[343px] m-auto flex flex-col justify-center align-center gap-[1.2rem] px-[1.4rem] bg-about bg-cover bg-no-repeat bg-center " >
        <h2 className="before:bg-white before:w-[3rem] before:h-[1px] after:bg-white after:w-[3rem] after:h-[1px] text-[1.2rem] font-[300] mb-[1.3rem] text-center flex justify-center items-center gap-[1.5rem]">SOMOS UMA EMPRESA (Especializada)</h2>

        <p className="text-[1.5rem] font-[600]">
          Criando e melhorando sistemas com <span className="text-yellow-500">TECNOLOGIA</span>,
          <span className="text-yellow-500">INOVAÇÃO</span> & <span className="text-yellow-500">TECNOLOGIA</span>
        </p>

        <p className="text-[1.4rem] ">
          Desenvolvemos e construímos websites para a sua empresa, além de
          serviços de manutenção, etc e etc.{" "}
        </p>
      </div>
    </section>
  );
}
