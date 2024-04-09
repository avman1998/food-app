import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../config";
const Body = () => {
  return (
    <div className="border border-black my-2 flex flex-wrap justify-between items-center">
      {restaurants?.map((res) => (
        <RestaurantCard key={res?.info?.id} restaurant={res} />
      ))}
    </div>
  );
};

export default Body;
