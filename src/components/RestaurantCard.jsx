const RestaurantCard = () => {
  return (
    <div className="flex flex-col gap-1 w-44 border border-black p-2 m-2 cursor-pointer">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
        alt="res-logo"
      />
      <p>Domino's Pizza</p>
      <div>
        <p>4.3 star</p>
        <p>30 mins</p>
      </div>
      <p>Pizzas, Italian, Pastas, Desserts Meghdoot Park Road</p>
    </div>
  );
};

export default RestaurantCard;
