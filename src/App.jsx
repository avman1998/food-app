import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  console.log("Outlet", Outlet);
  return (
    <div className="p-3">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
