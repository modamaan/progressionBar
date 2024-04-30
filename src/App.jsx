import './App.css';
import ProgressionBar from './components/ProgressionBar';
import { useState,useEffect } from "react";
function App() {
  const [value,setValue] = useState(0)
  const [success,setState] = useState(false)
  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val +1)
    },100)
  },[])
  return (
    <div className="container" >
      <div>Progression Bar</div>
      <ProgressionBar value={value} 
      onComplete={()=>setState(true)} />
      <span>{success? "Completed!": "Loading.."}</span>
    </div>
  );
}

export default App;
