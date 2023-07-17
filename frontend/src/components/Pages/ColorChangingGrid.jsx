import { useState } from "react";
import Navigation from "../Navigation";

function ColorChangingGrid() {
  const [itemStates, setItemStates] = useState([
    { id: 1, color: "", text: "" },
    { id: 2, color: "", text: "" },
    { id: 3, color: "", text: "" },
    { id: 4, color: "", text: "" },
  ]);

  const colors = [
    "#3366CC",
    "#0099C6",
    "#19A979",
    "#00CC99",
    "#FECB52",
    "#FF9900",
    "#B31B1B",
    "#663399",
    "#990099",
    "#CC79A7",
    "#6B8B3D",
    "#3D3D3D",
    "#666666",
    "#999999",
    "#CCCCCC",
  ];

  const gridColorChange = (itemId) => {
    setItemStates((originalItemStates) => {
      return originalItemStates.map((item) => {
        if (item.id === itemId) {
          const randomizeColorSelection =
            colors[Math.floor(Math.random() * colors.length)];
          return {
            ...item,
            color: randomizeColorSelection,
            text: "just keep clicking",
          };
        }
        return item;
      });
    });
  };

  const wrapper = {
    minHeight: "75vh",
    minWidth: "75vw",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    margin: "50px 50px",
    padding: "10px",
    fontFamily: "Pacifico, cursive",

    borderRadius: "10px",
    backgroundColor: "#4682B4",
    boxShadow: "1px 1px 1px 1px #FAF0E6",
  };

  const gridItems = {
    margin: "1.5rem",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px 2px #FAF0E6",
  };

  const h4 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto Slab, serif",
    color: "linen",
    borderBottom: "1px solid #FAF0E6",
    margin: "0.5rem",
    padding: "0.5rem",
  };

  return (
    <>
      <Navigation />
      <h4 style={h4}>Grid Color Change</h4>
      <div style={wrapper}>
        {itemStates.map((item) => (
          <div
            key={item.id}
            style={{ ...gridItems, backgroundColor: item.color }}
            onClick={() => gridColorChange(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorChangingGrid;
