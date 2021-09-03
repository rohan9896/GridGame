import React from "react";
import "./Grid.css"
import { generateDatabase, shuffleDatabase } from "../../utils/files";

function Grid() {
  const db = shuffleDatabase(generateDatabase().concat(generateDatabase()));

  return (
    <div className="Grid">
      {db.map((item, index) => {
        return (
            <div className="Grid_box" key={index}>{item}</div>
        );
      })}
    </div>
  );
}

export default Grid;
