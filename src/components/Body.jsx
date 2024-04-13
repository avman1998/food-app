import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../config";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  function topRatedRes() {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  }
  return (
    <>
      <button onClick={topRatedRes}>Top rated restuarants</button>
      <div className="border border-black my-2 flex flex-wrap justify-between items-center">
        {listOfRestaurants?.map((res) => (
          <RestaurantCard key={res?.info?.id} restaurant={res} />
        ))}
      </div>
    </>
  );
};

export default Body;
