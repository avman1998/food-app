import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import useOnline from "./custom-hooks/useOnline";

function App() {
  const isOnline = useOnline();
  console.log("IsOnline", isOnline);
  if (!isOnline) return <h1>Check your internet connection.</h1>;
  console.log("Outlet", Outlet);
  return (
    <div className="p-3">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
