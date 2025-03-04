"use client";

import classes from './farmGrid.module.css';
import Builds from "@/components/Builds";

const FarmGrid = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <img src="./top-bg.png" alt="logo"
             className="absolute left-[50%] transform -translate-x-1/2 w-[120vw] max-w-[600px] z-20"
             style={{
               top: "max(-22vw, -110px)"
             }}
        />
        <Builds/>
        <div className={classes.container}>
          {Array.from({length: 52}, (_, index) => (
            <div key={index} className={classes.item}/>
          ))}
        </div>
        <img src="./ui_bulding_5_1 1.png" alt="logo"
             className="absolute bottom-[40vw] left-[50%] transform -translate-x-1/2 w-[min(38vw, 164px)] z-20"
             style={{
               width: "min(38vw, 164px)",
               bottom: "min(40vw, 200px)"
            }}
        />
      </div>
    </div>
  );
}

export default FarmGrid;
