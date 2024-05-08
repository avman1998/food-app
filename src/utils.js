export const LOGO_URL =
  "https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png";

export const RES_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RESTAURANTS_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.75935&lng=75.864946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const menu_url = (res_id) => {
  return `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.75935&lng=75.864946&restaurantId=${res_id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
};
