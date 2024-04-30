import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProgressionBar = ({ value, onComplete=()=>{} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if(value >= 100){
      onComplete()
    }
  }, [value]);
  return (
    <div className="progress">
      <span
      style={{color:percent > 49 ? "red":"black"}}
      >{percent.toFixed()}%</span>
      <div style={{width:`${percent}%`}} />
    </div>
  );
};

export default ProgressionBar;
