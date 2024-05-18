import { useState } from "react";
import Nav from "./components/Nav";
import Textform from "./components/Textform";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=> {
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <div>
    <Nav mode={mode} toggleMode={toggleMode}/>
    <Textform />
    </div>
  );
}

export default App;
