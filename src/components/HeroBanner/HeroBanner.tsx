import { Outlet } from "react-router-dom"
import { Typographi } from "../../design/Typographi/Typographi"

export const HeroBanner=()=>{
    return(
        <>
        <div>
            logo
        </div>
        <div>
            <Typographi>Télécharger Battle.net </Typographi>

            <Typographi>Assistance</Typographi>
        </div>
        <button>profil</button>
        <Outlet/>
        </>
    )
}