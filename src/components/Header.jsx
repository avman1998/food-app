import { LOGO_URL } from "../utils";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between items-center border border-black">
      <section className="m-2">
        <img src={LOGO_URL} alt="Food App" className="w-24 cursor-pointer" />
      </section>
      <section className="m-2">
        <ul className="flex gap-4">
          <li className="cursor-pointer font-bold ">Home</li>
          <Link to="/about">
            <li className="cursor-pointer font-bold">About</li>
          </Link>
          <li className="cursor-pointer font-bold">Contact</li>
          <li className="cursor-pointer font-bold">Cart</li>
        </ul>
      </section>
    </nav>
  );
};
export default Header;
