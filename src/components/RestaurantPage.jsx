import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { menu_url } from "../utils";
const RestaurantPage = () => {
  const { res_id } = useParams();
  const [restaurantData, setRestaurantData] = useState();
  async function fetchData() {
    const res = await fetch(menu_url(res_id));
    const data = await res.json();
    // setRestaurantData(data?.data?.cards[2]?.card?.card?.info);
    setRestaurantData(data?.data?.cards);
    console.log("Res data", data?.data?.cards);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col m-5">
      <h2>{restaurantData?.[2]?.card?.card?.info?.name}</h2>
      <h2>{restaurantData?.[2]?.card?.card?.info?.avgRatingString}</h2>
      <h3>{restaurantData?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h4>
        {restaurantData?.[2]?.card?.card?.info?.areaName}{" "}
        {restaurantData?.[2]?.card?.card?.info?.city}
      </h4>
      <div className="text-left">
        <h1>Menu List</h1>
        <ul>
          {restaurantData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards.map(
            (data) => {
              return (
                <li>
                  {data?.card?.info.name} - Rs. {data?.card?.info.price / 100}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
