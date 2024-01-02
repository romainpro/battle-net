import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { Wallet } from "../Wallet/Wallet"
import { Shearch } from "../shearch/Shearch"

export const HeroBarre=()=>{
    return(
<div className="mx-auto w-5/6 flex items-stretch space-x-2 pb-6 sticky top-0 z-50 ">
        <NavBar/>
        <Shearch/>
        <Wallet/>
    <Outlet/>    
</div>
    )
}