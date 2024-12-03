import { ReactNode, useState } from "react"
import { motion } from "motion/react"
import { LuArrowUpRight } from "react-icons/lu"
import { Badge } from "./components/Badge"
import undraw from "./assets/undraw.svg"
import profileVector from "./assets/profile-vector.svg"
import wave from "./assets/wave.svg"
import { RiHeart3Fill } from "react-icons/ri"
import { RxDiscordLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx"

function App() {

  const [ donationOpen, setDonationOpen ] = useState<boolean>(false);

  return (
    <div>
      <div className="p-2 md:mt-0 md:pl-20 md:pr-20">
        <div className="p-4 flex flex-row gap-5 w-full justify-between items-center text-zinc-700 text-sm">
          <div className="w-3/12"/>
          <div className="w-6/12 flex flex-row gap-5">
            <NavbarButton url="https://google.com" name="Sobre mim"/>
            <NavbarButton url="https://google.com" name="Projetos"/>
            <NavbarButton url="https://google.com" name="Contato"/>
            <NavbarButton url="https://google.com" name="Currículo">
              <LuArrowUpRight/>
            </NavbarButton>
          </div>
          <div className="w-3/12">
            <button onClick={() => setDonationOpen(!donationOpen) } className="p-2 bg-sky-400 text-zinc-50 rounded-md hover:bg-sky-700 transition-colors">
              Apoie meus estudos!
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-row justify-between items-center mt-20">
          <div className="flex flex-col gap-5 md:w-[600px] w-full">
            <div className="flex flex-col gap-2 md:gap-1">
              <h1 className="text-3xl text-center md:text-left uppercase font-semibold text-sky-400 tracking-wider">JOÃO VICTOR</h1>
              <h1 className="text-md text-center md:text-left uppercase font-semibold text-zinc-600 tracking-wider">Desenvolvedor Júnior</h1>
              <div className="flex flex-row gap-1 justify-center md:justify-normal">
                <Badge text="Java" color="#f89820" bgColor="#5382a1"/>
                <Badge text="Kotlin" color="#0c64f6" bgColor="#bdc9db"/>
                <Badge text="React JS" color="#73f8c0" bgColor="#1c4c3c"/>
                <Badge text="TypeScript" color="#7c8cfb" bgColor="#fba528"/>
              </div>
            </div>
            <span className="text-sm text-zinc-600 text-justify mt-4 md:mt-0">
              Olá! Sou João Victor, tenho 20 anos e estou trilhando meu caminho como desenvolvedor júnior.
              Minha jornada na tecnologia é impulsionada por curiosidade, dedicação e a paixão por criar soluções
              que facilitem a vida das pessoas. Sempre tive um fascínio por entender como as coisas funcionam, o que
              me levou ao mundo da programação, onde encontrei a oportunidade perfeita para unir lógica, criatividade
              e inovação.
            </span>
            <button className="mt-4 md:mt-0 w-full border border-dashed border-sky-400 pt-2 pb-2 rounded-md text-sky-400 text-sm hover:bg-sky-400 hover:text-zinc-100 transition-colors">
              Entre em contato!
            </button>
          </div>
          <img src={undraw} className="hidden select-none md:flex"/>
        </div>
        <section className="flex flex-col mt-20 mb-20 p-4 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col">
              <h1 className="text-4xl text-zinc-600 text-center md:text-start font-semibold border-b-2 mb-10">TRAJETÓRIA</h1>
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-start">
                <img src={profileVector} className="hidden md:block lg:block"/>
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex flex-col text-justify text-zinc-600 text-sm gap-4 md:max-w-[640px]">
                    <p>
                        Iniciei minha trajetória na programação em 2019, motivado pelo desejo de criar meu próprio servidor de Minecraft.
                        Sempre admirei os plugins utilizados em servidores, mas, por não ter condições de contratar outros desenvolvedores, decidi aprender a programar por conta própria.
                        Comecei assistindo a vídeos, buscando ajuda em fóruns e resolvendo problemas usando o Stack Overflow. Foi assim que desenvolvi meus primeiros
                        <a href="https://google.com" className="text-sky-400 ml-1 border-b border-sky-400 hover:opacity-80 transition-opacity">projetos de plugins</a>.
                    </p>
                        
                    <p>
                        Com o tempo, minha curiosidade se expandiu para o desenvolvimento web. Passei a estudar segurança,
                        sistemas de login e conceitos de UI/UX — embora a parte de design ainda não seja meu ponto forte.
                        Meu interesse cresceu ainda mais quando descobri o Spring Boot, o que me levou a aprofundar meus
                        conhecimentos em backend.
                    </p>
                        
                    <p>
                        Entretanto, percebi que um bom backend exige um frontend à altura. Isso me motivou a aprender
                        desenvolvimento de interfaces, onde encontrei no ReactJS, Tailwind CSS e TypeScript as ferramentas ideais
                        para criar sites modernos e dinâmicos. Essa jornada continua a me inspirar, sempre em busca de novos 
                        desafios e conhecimentos no mundo do desenvolvimento de software.
                    </p>
                  </div>
                  <div className="flex gap-4 w-full">
                    <button className="w-1/2 p-2 pl-4 pr-4 text-zinc-50 bg-sky-400 rounded-lg hover:bg-sky-600 transition-colors">
                      Ver projetos
                    </button>
                    <button className="w-1/2 p-2 pl-4 pr-4 text-sky-400 border-2 border-dashed border-sky-400 rounded-lg hover:bg-sky-600 hover:border-opacity-0 hover:text-zinc-50 transition-colors">
                      Encomendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col">
              <h1 className="text-4xl text-zinc-600 text-center md:text-right md:text-normal font-semibold border-b-2 mb-10">PROFISSIONAL</h1>
              <div className="flex flex-col md:flex-row lg:flex-row gap-4 items-start">
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex flex-col text-justify text-zinc-600 text-sm gap-4 md:max-w-[640px]">
                    <p>
                        Ainda não possuo experiência no mercado profissional, já fiz projetos para freelance, mas nunca fui além disso.
                        Atualmente, estou em busca de entrar em alguma empresa como desenvolvedor Java, como júnior ou trainee. Como não
                        faço nenhum curso de bacharelado relacionado a sistemas ou computação, acredito que não há a possibilidade de ingressar como
                        estagiário, a não ser que me contratem como tal.
                    </p>
                  </div>
                </div>
                <img src={profileVector} className="hidden md:block lg:block"/>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <img src={wave} className="w-full -mt-44 md:-mt-96"/>
      <footer className="p-4 bg-sky-400 h-44">
        <div className="flex flex-col h-full justify-center items-center gap-4">
          <h3 className="flex items-center gap-2 text-zinc-50">Feito por João Victor <RiHeart3Fill className="hover:text-rose-300" /></h3>
          <div className="flex flex-row items-center gap-4">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-453819337/">
              <RxLinkedinLogo size={36} className="text-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors"/>
            </a>
            <a href="https://www.instagram.com/">
              <RxInstagramLogo size={36} className="text-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors"/>
            </a>
            <a href="https://www.discord.com/">
              <RxDiscordLogo size={36} className="text-zinc-50 hover:text-zinc-900 cursor-pointer transition-colors"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface NavbarButtonProps {
  url: string
  name: string
  children?: ReactNode
}

const NavbarButton = (({ url, name, children }: NavbarButtonProps) => {
  return (
    <a href={url} className="flex flex-row items-center gap-2 hover:opacity-85 transition-opacity">{name}
      {children}
    </a>
  )
})

export default App
