import React from "react";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFAvorites";

function ReacipeItem({ recipe }) {
  const { favorites } = useFavorites();
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
