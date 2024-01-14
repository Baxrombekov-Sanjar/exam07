import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Stors from "./components/Shops/Shops";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/stors"} element={<Stors />} />
      </Routes>
    </>
  );
}

export default App;
