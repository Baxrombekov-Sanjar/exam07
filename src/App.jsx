import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import {
  Shops,
  CashRegister,
  Checks,
  Company,
  Goods,
  Payment,
  Profile,
  ShopList,
  Settings,
  Error,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/createShop"} element={<Shops />} />
        <Route path={"/cashRegister"} element={<CashRegister />} />
        <Route path={"/checks"} element={<Checks />} />
        <Route path={"/company"} element={<Company />} />
        <Route path={"/goods"} element={<Goods />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/shopList"} element={<ShopList />} />
        <Route path={"/settings"} element={<Settings />} />
        <Route path={"/*"} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
