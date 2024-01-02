import clsx from "clsx"

interface PropsButton{
    size?:"small"|"medium"|"large"
    children?:React.ReactNode
    color?:"primary"|"secondary"|"transparent"
}

export const Button =({size="medium",children,color}:PropsButton)=>{

    let varianteSize:string="",colorVariant:string="primary"


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

    switch(color){
        case"primary":
            colorVariant="bg-primary-500"
            break
        case"secondary":
            colorVariant="bg-secondary-500"
            break
        case"transparent":
            colorVariant="bg-transparent"
            break
    }



    return(
        <button className={clsx(varianteSize)}>
            {children}
        </button>
    )
}