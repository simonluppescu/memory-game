import React from "react";
import DataProcessorService from "../services/dataProcessorService";
import Card from "./Card";

interface Props {}

const Board: React.FC<Props> = () => {
  const dataProcessor = new DataProcessorService();
  console.log(dataProcessor.shuffledItems);

  return (
    <div className="board">
      {dataProcessor.shuffledItems.map((item, index) => (
        <Card key={index} itemData={item}></Card>
      ))}
    </div>
  );
};

export default Board;
