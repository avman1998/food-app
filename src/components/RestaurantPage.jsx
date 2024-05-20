import { useParams } from "react-router-dom";
import useRestaurantMenu from "../custom-hooks/useRestaurantMenu";
const RestaurantPage = () => {
  const { res_id } = useParams();
  const restaurantData = useRestaurantMenu(res_id);

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
                  {data?.card?.info?.name} - Rs. {data?.card?.info?.price / 100}
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
