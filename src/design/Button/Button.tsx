import clsx from "clsx"

interface PropsButton{
    size?:"small"|"medium"|"large"
}





export const Button =({size="medium"}:PropsButton)=>{
    return(
        <button className={clsx()}>

        </button>
    )
}