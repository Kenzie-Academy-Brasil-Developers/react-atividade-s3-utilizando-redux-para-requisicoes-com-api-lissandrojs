import { ADD_DIGIMON } from "./actionTypes";

export const addDigimon =(digimon)=>({
    type: ADD_DIGIMON,
    digimon,
})