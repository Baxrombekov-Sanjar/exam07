import "./Shops.css";
import StoreMain from "../../components/ShopMain";
import SideBar from "../../components/SideBar";
import Contacts from "../../components/Contacts";
import Requisites from "../../components/Requisites";
import Checks from "../../components/Checks";
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
