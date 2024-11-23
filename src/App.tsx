import { useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import Slider from "./components/Slider";

function App() {
  const words = ["Construa", "Monte", "Planeje", "Elabore", "Organize", "Crie"];
  const [currentString, setCurrentString] = useState(words[0]);

  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const toggleSwitch = (): void => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    const getRandomString = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentString(words[randomIndex]);
    };

    const interval = setInterval(getRandomString, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-12 flex h-svh flex-col justify-between">
      <main className="flex flex-1 flex-col">
        <div className="absolute z-0 left-0 top-0 overflow-hidden">
          <svg className="w-[400px] h-[800px] md:w-[1233px] md:h-[1289px]" viewBox="0 0 1233 1289" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_2811_2735)"><ellipse cx="94.1737" cy="824.195" rx="94.1737" ry="824.195" transform="matrix(0.347047 -0.937848 0.628306 0.777966 -236.488 -311.402)" fill="#698AFF"></ellipse><ellipse cx="94.1737" cy="824.195" rx="94.1737" ry="824.195" transform="matrix(0.347047 -0.937848 0.628306 0.777966 -236.488 -311.402)" fill="#698AFF"></ellipse></g><g filter="url(#filter1_f_2811_2735)"><ellipse cx="61.1689" cy="376.084" rx="61.1689" ry="376.084" transform="matrix(0.347047 -0.937848 0.628306 0.777966 275 134.734)" fill="#698AFF"></ellipse></g><defs><filter id="filter0_f_2811_2735" x="-604.854" y="-805.855" width="1837.79" height="2094.66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2811_2735"></feGaussianBlur></filter><filter id="filter1_f_2811_2735" x="-104.738" y="-328.26" width="1274.53" height="1396.42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2811_2735"></feGaussianBlur></filter></defs></svg>
        </div>
        <div className="w-full relative bg-center bg-no-repeat justify-center items-center bg-cover z-10">
          <div className="flex flex-col justify-between items-center gap-10">
            <div className="flex flex-col gap-0.5 max-w-[400px] text-center">
              <p className="font-semibold antialiased tracking-wider text-zinc-300 text-3xl">{currentString} já o seu horário!</p>
              <p className="text-zinc-400 max-w-[400px]">Construído por um aluno para <b>FACILITAR</b> a vida de outros alunos.</p>
            </div>
            <form className="p-4 bg-zinc-900 h-96 md:w-3/5 lg:w-1/2 w-full rounded-lg shadow-xl">
                <label className="text-zinc-300 flex flex-row items-center gap-1 mb-2 text-sm">Qual o nome do seu curso?</label>
                <div className="flex flex-row items-center">
                  <TfiSearch size={20} className="text-zinc-400 absolute ml-2"/>
                  <input className="pl-10 h-12 w-full bg-dark-950 border rounded-md border-zinc-800 outline-none text-zinc-400 text-xs placeholder-zinc-500" placeholder="Engenharia de Alimentos">

                  </input>
                </div>
                <div className="mt-4">
                  <label className="text-zinc-300 flex flex-row items-center gap-1 mb-2 text-sm">Você está atualmente blocado?</label>
                  <Slider/>
                </div>
            </form>
            <div>
              <button className="pl-8 pr-8 pt-4 pb-4 border-dotted border-2 rounded-md border-sky-500 text-zinc-300 hover:bg-sky-500 hover:text-white transition-all">
                Gerar Horário
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
