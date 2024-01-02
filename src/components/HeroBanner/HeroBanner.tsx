import { Outlet } from "react-router-dom"
import { Typographi } from "../../design/Typographi/Typographi"
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { ProfilPhoto } from "../../design/ProfilPhoto/ProfilPhoto";
import { RiArrowDropDownLine } from "react-icons/ri";


export const HeroBanner=()=>{
    return(
        <div className="mx-auto w-5/6 flex justify-between items-center h-[72px]  ">
        <div>
           <Typographi>logo</Typographi> 
        </div>
        <div className="w-[560px] h-[48px] flex flex-row-reverse justify-between  ">
            <Typographi className=" flex  items-center justify-center w-[155px] h-[48px]"> <ProfilPhoto/> Profil <RiArrowDropDownLine /></Typographi>
            <Typographi className="flex items-center justify-center w-[152px] h-[48px]   hover:bg-background-500"><IoHelpCircleOutline />Assistance</Typographi>
            <Typographi className=" flex items-center justify-center w-[240px] h-[48px] "><MdOutlineFileDownload />Télécharger Battle.net </Typographi>
        </div>
        <Outlet/>
        </div>
    )
}