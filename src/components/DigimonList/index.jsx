import { useSelector } from "react-redux"
import { Container } from "./styles"
const DigimonList = ()=>{
    const {digimons} = useSelector((state)=> state)
    
    return(
                <>
                    <ul>
                        <li>
                        {digimons.map((digimon,index)=>
                        (<Container  key={index}>

                            <h1>{digimon.name}</h1>
                            <img src={digimon.img} alt={digimon.name} />
                            <h4> Nivel :{digimon.level}</h4>
                        </Container>
)
                        )}
                        </li>
                    </ul>
                </>
            )}

export default DigimonList