import { Typographi } from "../../design/Typographi/Typographi"

interface CardProps{
    nameGame?:string
    logo?:string
    title?:string
    description?:string
    image?:string
    button?:string
    price?:string

}


export const Card=({nameGame,title,description,image,logo,price}:CardProps)=>{
    return(
        <div className="bg-background-800 w-[300px] h-[450px] flex flex-col rounded-xl   hover:bg-background-700 hover:cursor-pointer">
            <div className="rounded-xl">
                <img className="rounded-t-xl" src={image} alt="" />
            </div>
            <div className="flex flex-col place-items-start h-[217px] space-y-5 px-9 pt-2 transition duration-100 ease-in  hover:-translate-y-2 ">
                
            <Typographi className="flex gap-5" variant="caption-3" >
                <img className=" w-6" src={logo} alt="" />
                {nameGame}
            </Typographi>
            <Typographi variant="h5" >{title}</Typographi>
            

            <div>
                    <Typographi variant="body-sm" color="accent">{description}</Typographi>
            </div>
        
        </div>
            <div className="w-full h-[72px] flex items-center justify-center">
            <Typographi variant="caption-2" color="secondary" >{price}</Typographi>
            </div>
        </div>
    )
}