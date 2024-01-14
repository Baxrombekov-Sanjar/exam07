import "./Shops.css";
import StoreMain from "../ShopMain";
import SideBar from "../SideBar";
import Contacts from "../Contacts";
import Requisites from "../Requisites";
import Checks from "../Checks";
import { useSelector } from "react-redux";
export default function Stors() {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div className="h-screen flex">
      <SideBar />
      <main
        className={
          mode
            ? "w-3/4 overflow-y-scroll bg-gray-900 text-white"
            : "w-3/4 overflow-y-scroll"
        }
      >
        <StoreMain />
        <Contacts />
        <Requisites />
        <Checks />
      </main>
    </div>
  );
}
