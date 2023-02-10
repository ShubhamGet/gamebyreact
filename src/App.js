import React from "react";
import SlotM from "./SlotM";

const App = () => {
  return (
    <>
      <h1 className="heading_style">🎰 Welocome to <span style={{ fontWeight: 'bold', backgroundColor: 'gray' }}>Slot Machine Game </span>🎰</h1>
      <div className="slotmachine">
        <SlotM x='😃' y='😃' z='😃' />
        <SlotM x='😃' y='😅' z='😃' />
        <SlotM x='🍌' y='🍎' z='🍌' />
        <SlotM x='🍎' y='🍎' z='🍎' />
      </div>
    </>
  );
}

export default App;
