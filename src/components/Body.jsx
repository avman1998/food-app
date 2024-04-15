import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../utils";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  async function fetchProducts() {
    const res = await fetch(RESTAURANTS_API);
    const data = await res.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  function topRatedRes() {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  }
  if (listOfRestaurants.length === 0) return <Shimmer />;
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
