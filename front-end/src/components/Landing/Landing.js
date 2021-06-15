import React from "react";
import RecipeCardList from "./RecipeCardList";
import Carousel from "./Carousel";
import FavouriteDish from "./FavouriteDish";
import BestRatedDishes from "./BestRatedDishes";
import Reviews from "./Reviews";

function Landing() {
  return (
    <div>
      <Carousel />
      <RecipeCardList />
      <FavouriteDish />
      <BestRatedDishes />
      <Reviews />
    </div>
  );
}

export default Landing;
