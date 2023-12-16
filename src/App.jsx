import React from "react";
import ReacipeItem from "./components/recipeItem/ReacipeItem";
import Header from "./components/header/Header";

function App() {
  return (
    <section>
      <Header />
      <div>
        <ReacipeItem
          recipe={{
            id: 1,
            name: "ermek",
          }}
        />
        <ReacipeItem
          recipe={{
            id: 2,
            name: "erlan",
          }}
        />
        <ReacipeItem
          recipe={{
            id: 3,
            name: "abai",
          }}
        />
      </div>
    </section>
  );
}

export default App;
