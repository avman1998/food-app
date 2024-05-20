import { useState, useEffect } from "react";
import { menu_url } from "../utils";
export default function useRestaurantMenu(res_id) {
  const [restaurantData, setRestaurantData] = useState();
  async function fetchData() {
    const res = await fetch(menu_url(res_id));
    const data = await res.json();
    setRestaurantData(data?.data?.cards);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return restaurantData;
}
