import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANTS_API } from "../utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  function handleFilterBySearch() {
    const filteredRes = listOfRestaurants?.filter((res) => {
      if (res.info.name.toLowerCase().includes(searchText.toLowerCase())) {
        return res;
      }
    });
    setFilteredRestaurants(filteredRes);
  }

  async function fetchProducts() {
    const res = await fetch(RESTAURANTS_API);
    const data = await res.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurants(listOfRestaurants);
    }
  }, [searchText]);
  function topRatedRes() {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );
    setListOfRestaurants(filteredRestaurants);
  }
  if (filteredRestaurants?.length === 0) return <Shimmer />;
  return (
    <>
      <div>
        <input
          type="text"
          className="border"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleFilterBySearch}>Search</button>
      </div>
      <button onClick={topRatedRes}>Top rated restuarants</button>
      <div className="border border-black my-2 flex flex-wrap justify-between items-center">
        {filteredRestaurants?.map((res) => (
          <Link to={`/restaurant/${res.info.id}`}>
            <RestaurantCard key={res?.info?.id} restaurant={res} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
