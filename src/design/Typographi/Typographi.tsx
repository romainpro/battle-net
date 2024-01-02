import clsx from "clsx"


interface TypographiProps{

    children?:React.ReactNode,
    component?:"h1"|"h2"|"h3"|"h4"|"h5"|"div"|"p"|"span",
    variant?:"h1"|"h2"|"h3"|"h4"|"h5"|"lead"|"body-lg"|"body-base"|"body-sm"|"caption-1"|"caption-2"|"caption-3"|"caption-4"
    color?:"text"|"primary"|"secondary"|"accent",
    className?:string
}







export const Typographi=({children,component:Component="div",variant="body-base",color="text",className}:TypographiProps)=>{

    
    let variantStyle:string="",colorVariant:string="";
    
    
    switch(variant){
        case "h1":
            variantStyle="text-7xl"
            break
        case "h2":
            variantStyle="text-6xl"
            break
        case "h3":
            variantStyle="text-5xl"
            break
        case "h4":
            variantStyle="text-4xl"
            break
        case "h5":
            variantStyle="text-3xl"
            break
        case "lead":
            variantStyle="text-2xl"
            break
        case "body-lg":
            variantStyle="text-xl"
            break
        case "body-base":
            variantStyle="text-base"
            break
        case "body-sm":
            variantStyle="text-sm"
            break
        case "caption-1":
            variantStyle="text-caption1"
            break
        case "caption-2":
            variantStyle="text-caption2"
            break
        case "caption-3":
            variantStyle="text-caption3"
            break
        case "caption-4":
            variantStyle="text-caption4"
            break
    }

    switch(color){
        case "text":
            colorVariant="text-text-50"
            break
        case "primary":
            colorVariant="text-primary-500"
            break
        case "secondary":
            colorVariant="text-secondary-500"
            break
        case "accent":
            colorVariant="text-accent-500"
            break
    }


    return(
        <Component className={clsx(variantStyle,colorVariant,className)}>
            {children}
        </Component>
    )
}