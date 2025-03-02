"use client";

import classes from './farmGrid.module.css';

const FarmGrid = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <div className={classes.container}>
          {Array.from({length: 52}, (_, index) => (
            <div key={index} className={classes.item}/>
          ))}
        </div>
        <img src="./ui_bulding_5_1 1.png" alt="logo"
             className="absolute bottom-[40vw] left-[50%] transform -translate-x-1/2 w-[38vw] z-20"
        />
      </div>
    </div>
  );
}

export default FarmGrid;
