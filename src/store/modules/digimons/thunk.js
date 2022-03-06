import { addDigimon } from "./action";
import axios from "axios";


export const addDigimonThunk =(digimon,setError)=> (dispacth)=>{

    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`).then((resp)=> dispacth(addDigimon(resp.data))).catch((error)=> console.log(error))
    

}

