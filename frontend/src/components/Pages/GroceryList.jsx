import { useState } from "react";

const GroceryListAndRecipeCreator = () => {
  const [isHover, setIsHover] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");
  const [recipe, setRecipe] = useState("");
  const [submittedRecipe, setSubmittedRecipe] = useState("");
  const [recipeSubmission, setRecipeSubmission] = useState(false);

  const handleMouseEnter = (buttonId) => {
    setIsHover(buttonId);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleRecipeChange = (e) => {
    setRecipe(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItemList((listContent) => [...listContent, item]);
    setItem("");
  };

  const handleCreateRecipe = (e) => {
    e.preventDefault();
    setSubmittedRecipe(recipe);
    setRecipeSubmission(true);
    setRecipe("");
  };

  const wrapper = {
    display: "flex",
    flexDirection: "column",
    width: "500px",
    mingHeight: "45vh",
    border: "1px solid",
    margin: "50px auto",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "1px 1px",
    textAlign: "center",
    backgroundColor: "cornflowerblue",
    color: "silver",
    fontFamily: "Roboto Slab, serif",
  };

  const itemAndRecipeGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr ",
    overflow: "auto",
    gap: "0.5rem",
    width: "70vw",
    height: "35vh",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "8px",
    boxShadow: "1px 1px 1px 1px ",
    backgroundColor: "blanchedalmond",
    textAlign: "center",
    contentFit: "auto",
  };

  const buttonStyle = {
    width: "50%",
    margin: "10px auto",
    cursor: "pointer",
    borderRadius: "8px",
    boxShadow: "1px 1px 1px pink",
    fontFamily: "Pacifico, serif",
  };

  return (
    <>
      <div style={wrapper}>
        <form onSubmit={handleAddItem}>
          <h4>Grocery List</h4>
          <input
            style={{
              width: "75%",
              textAlign: "center",
              background: "blanchedAlmond",
              borderRadius: "8px",
            }}
            value={item}
            onChange={handleItemChange}
            type="text"
          />
          <button
            type="submit"
            id="addItems"
            onMouseEnter={() => handleMouseEnter("button1")}
            onMouseLeave={handleMouseLeave}
            style={{
              ...buttonStyle,
              backgroundColor:
                isHover === "button1" ? "steelblue" : "gainsboro",
              color: isHover === "button1" ? "linen" : "slateblue",
            }}
          >
            Add item
          </button>
        </form>
        <h3>Recipe</h3>
        <form onSubmit={handleCreateRecipe}>
          <textarea
            name="recipe"
            id="recipeId"
            style={{
              textAlign: "center",
              background: "blanchedalmond",
              borderRadius: "8px",
            }}
            cols="30"
            rows="10"
            value={recipe}
            onChange={handleRecipeChange}
          ></textarea>
          <button
            type="submit"
            id="createRecipe"
            onMouseEnter={() => handleMouseEnter("button2")}
            onMouseLeave={handleMouseLeave}
            style={{
              ...buttonStyle,
              backgroundColor:
                isHover === "button2" ? "steelblue" : "gainsboro",
              color: isHover === "button2" ? "linen" : "slateblue",
            }}
          >
            Create Recipe
          </button>
        </form>
      </div>

      <div style={itemAndRecipeGrid}>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {recipeSubmission && (
          <>
            <div>
              <p>{submittedRecipe}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GroceryListAndRecipeCreator;
