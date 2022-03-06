import Search from "./components/Search";
import DigimonList from "./components/DigimonList";
import GLobalStyle from "./styles/index.js"


const App=()=> {
  return (
    <>
      <GLobalStyle/>
        <Search/>
        <DigimonList/>   
    </>
  );
}

export default App;
