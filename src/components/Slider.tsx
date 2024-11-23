import { useEffect, useState } from "react";
import { RiCheckLine, RiCloseLine } from "react-icons/ri";

function Slider() {
    const [ isOn, setIsOn ] = useState<boolean>(true);

    useEffect(() => {
        console.log(`Está habilitado: ${isOn}`)
    }, [isOn])

    return (
        <div onClick={() => setIsOn(!isOn)} data-toggle={isOn} className="relative inline-flex items-center h-6 w-11 rounded-full cursor-pointer transition-colors duration-100 data-[toggle=false]:bg-rose-500 data-[toggle=true]:bg-emerald-500">
            <span data-toggle={isOn} className="
            rounded-full
            absolute top-1 left-1 h-4 w-4 transition-transform delay-100 bg-white
            data-[toggle=true]:translate-x-5
            ">
                { !isOn && <RiCloseLine data-toggle={isOn} className="data-[toggle=false]:text-rose-500 transition-colors"/>}
                { isOn && <RiCheckLine data-toggle={isOn} className="data-[toggle=true]:text-emerald-500 transition-colors"/>}
            </span>
        </div>
    )
}

export default Slider;