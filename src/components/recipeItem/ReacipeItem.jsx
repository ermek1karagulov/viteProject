import React from "react";
import { useSelector } from "react-redux";
import { actions } from "../favorites/favorites.slice";
import { useActions } from "../../hooks/useActions";

function ReacipeItem({ recipe }) {
  const { favorites } = useSelector((state) => state);
  const { togglefavorites } = useActions();

  const isExists = favorites.some((r) => r.id === recipe.id);
  return (
    <div>
      <h3>{recipe.name}</h3>
      <button onClick={() => togglefavorites(recipe)}>
        {isExists ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
}

export default ReacipeItem;
