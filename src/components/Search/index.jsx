import { useDispatch } from "react-redux"
import { useState } from "react"
import{addDigimonThunk} from "../../store/modules/digimons/thunk"
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
    
        <>
            <h2>Procure pelo seu Digimon</h2>
            <div>
                <input value={input} type="text" onChange={(e)=> setInput(e.target.value) } placeholder="Procure seu digimon" />
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
        </>
    )}

export default Search