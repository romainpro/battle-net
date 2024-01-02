import { Outlet } from "react-router-dom"
import { Typographi } from "../../design/Typographi/Typographi"

export const Footer=()=>{
    return(
        <div className="bg-[url('/src/assets/bg/mobile-bg-lg_3.webp')] w-[1900px] h-[500px] bg-cover bg-center flex items-center justify-evenly">
    
            <img className="w-[600px] h-[350px]" src="/src/assets/images/Laptop.png" alt="" />
            <div className="flex flex-col space-y-10">
            <Typographi variant="h3">Partez à l aventure</Typographi>
            <Typographi variant="body-base">Téléchargez Battle.net et rejoignez l immense communauté.</Typographi>
            <div className=" space-x-10">
                <button className="bg-primary-500 w-[500px] h-[75px] rounded-md"> <Typographi variant="h5">Telecharger pour Windows</Typographi></button>
                <button className="bg-background-500 h-[75px] w-[225px] rounded-md" ><Typographi variant="lead">Savoir Plus</Typographi> </button>
            </div>
            <Typographi variant="caption-3">Également disponible sur </Typographi>
            </div>    
    <Outlet/>

        </div>
    )
}