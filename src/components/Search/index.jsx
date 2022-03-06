import { useDispatch } from "react-redux"
import { useState } from "react"
import{addDigimonThunk} from "../../store/modules/digimons/thunk"
import { Container, Content } from "./styles"

const Search = ()=>{
   const [input,setInput] = useState("")
   const [error,setError] = useState(false)

   const dispatch = useDispatch()

   const handleSearch = ()=>{
       setError(false)
       dispatch(addDigimonThunk(input))
       setInput("")
   }
    
    return (
    
        <Container>
            <h2>Procure pelo seu Digimon</h2>
            <Content>
                <input value={input} type="text" onChange={(e)=> setInput(e.target.value) } placeholder="Procure seu digimon" />
                <button onClick={handleSearch}>Pesquisar</button>
            </Content>
        </Container>
    )}

export default Search