import { Carrousel } from "../../components/Carrousel/Carrousel"
import { Card } from "../../components/card/Card"
import { Typographi } from "../../design/Typographi/Typographi"
import {cardInfo} from "../../json/CardInfo.json"



export const Home=()=>{
    return(<div className="bg-background">
        <Carrousel/>
        <div className="pt-9 pb-9 w-5/6 mx-auto fit-auto">
            <Typographi className="py-5" variant="h5">Recomander</Typographi>
        <div className="flex gap-5 flex-wrap ">
            {cardInfo.map((card)=>(
                 <Card 
                 key={card.id} 
                 title={card.title} 
                 logo={card.logo}
                 nameGame={card.gameName} 
                 description={card.descrtion} 
                 image={card.image} 
                 price={card.price}/>
            ))
               
            }
        </div>
        </div>
        </div>
    )
}