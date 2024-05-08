import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { menu_url } from "../utils";
const RestaurantPage = () => {
  const { res_id } = useParams();
  const [restaurantData, setRestaurantData] = useState();
  async function fetchData() {
    const res = await fetch(menu_url(res_id));
    const data = await res.json();
    setRestaurantData(data?.data?.cards[2]?.card?.card?.info);
    console.log("Res data", data?.data?.cards[2]?.card?.card?.info);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col m-5">
      <h2>{restaurantData?.name}</h2>
      <h2>{restaurantData?.avgRatingString}</h2>
      <h3>{restaurantData?.costForTwoMessage}</h3>
      <h4>
        {restaurantData?.areaName} {restaurantData?.city}
      </h4>
    </div>
  );
};

export default RestaurantPage;
