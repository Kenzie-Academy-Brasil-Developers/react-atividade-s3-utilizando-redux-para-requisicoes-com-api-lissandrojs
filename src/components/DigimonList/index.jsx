import { useSelector } from "react-redux"
const DigimonList = ()=>{
    const {digimons} = useSelector((state)=> state)
    
    return(
                <>
                    <ul>
                        <li>
                        {digimons.map((digimon,index)=>
                        (<div key={index}>

                            <p>{digimons[0].name}</p>
                            <img src={digimons[0].img} alt={digimons[0].name} />
                        </div>
)
                        )}
                        </li>
                    </ul>
                </>
            )}

export default DigimonList