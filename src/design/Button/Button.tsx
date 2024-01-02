import clsx from "clsx"

interface PropsButton{
    size?:"small"|"medium"|"large"
    children?:React.ReactNode
    color?:"primary"|"secondary"|"transparent"
    className?:string
}

export const Button =({size="medium",children,color="primary",className }:PropsButton)=>{

    let varianteSize:string="",colorVariant:string="primary"


    switch(size){
        case "small":
            varianteSize="w-[225px] h-[72px] rounded-md text-lg "
            break
        case "medium"://default
            varianteSize="w-[280px] h-[72px]  rounded-md text-xl  "
            break
        case "large":
            varianteSize="w-[450px] h-[72px]  rounded-md text-2xl"
            break
    }

    switch(color){
        case"primary":
            colorVariant="bg-primary-500 text-text-50 hover:ring ring-primary-400  "
            break
        case"secondary":
            colorVariant="bg-background-500 text-text-50 hover:ring ring-background-400"
            break
        case"transparent":
            colorVariant="bg-transparent text-text-100 hover:ring ring-secondary-400"
            break
    }



    return(
        <button className={clsx(varianteSize,colorVariant,className)}>
            {children}
        </button>
    )
}