import { Outlet } from "react-router-dom"
import { Typographi } from "../../design/Typographi/Typographi"
import { Button } from "../../design/Button/Button"

export const Footer=()=>{
    return(
        <div className="bg-[url('/src/assets/bg/mobile-bg-lg_3.webp')] w-[1900px] h-[500px] bg-cover bg-center flex items-center justify-evenly">
    
            <img className="w-[600px] h-[350px]" src="/src/assets/images/Laptop.png" alt="" />
            <div className="flex flex-col space-y-10">
            <Typographi variant="h3">Partez à l aventure</Typographi>
            <Typographi variant="body-base">Téléchargez Battle.net et rejoignez l immense communauté.</Typographi>
            <div className=" space-x-10">
                <Button size="large">Telecharger pour Windows</Button>
                <Button size="medium" color="secondary"  >Savoir Plus</Button>
            </div>
            <Typographi variant="caption-3">Également disponible sur </Typographi>
            </div>    
    <Outlet/>

        </div>
    )
}