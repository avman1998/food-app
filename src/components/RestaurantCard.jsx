import { RES_IMG_URL } from "../utils";
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = restaurant.info;
  return (
    <div className="w-60 m-2 p-2 bg-gray  hover:shadow-lg  break-all flex flex-col items-center gap-1 cursor-pointer">
      <img
        src={`${RES_IMG_URL}${cloudinaryImageId}`}
        alt="res-logo"
        className="w-44"
      />
      <p className="font-bold text-gray-800 text-[80%]">{name}</p>
      <div>
        <p>{avgRating} ⭐</p>
        <p>{sla?.deliveryTime} mins</p>
      </div>
      <p className="flex flex-wrap  text-[70%]">{cuisines.join(",")}</p>
    </div>
  );
};

export default RestaurantCard;
