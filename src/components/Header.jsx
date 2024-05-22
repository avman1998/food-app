import { LOGO_URL } from "../utils";
import { Link } from "react-router-dom";
import useOnline from "../custom-hooks/useOnline";
const Header = () => {
  const isOnline = useOnline();

  return (
    <nav className="flex justify-between items-center border border-black">
      <section className="m-2">
        <img src={LOGO_URL} alt="Food App" className="w-24 cursor-pointer" />
      </section>
      <section className="m-2">
        <ul className="flex gap-4">
          <li>Online status: {isOnline ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="cursor-pointer font-bold ">Home</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer font-bold">About</li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer font-bold">Contact</li>
          </Link>
          <li className="cursor-pointer font-bold">Cart</li>
        </ul>
      </section>
    </nav>
  );
};
export default Header;
