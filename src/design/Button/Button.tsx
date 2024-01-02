import clsx from "clsx"

interface PropsButton{
    size?:"small"|"medium"|"large"
}





export const Button =({size="medium"}:PropsButton)=>{

    let varianteSize:string=""


    switch(size){
        case "small":
            varianteSize="w-[225px] h-[72px]"
            break
        case "medium"://default
            varianteSize="w-[280px] h-[52px]"
            break
        case "large":
            varianteSize="w-[450px] h-[72px]"
            break
    }



    return(
        <button className={clsx(varianteSize)}>

        </button>
    )
}