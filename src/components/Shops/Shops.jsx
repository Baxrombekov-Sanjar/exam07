import "./Shops.css";
// import Navbar from "../Navbar";
import StoreMain from "../ShopMain";
import SideBar from "../SideBar";
import Contacts from "../Contacts";
import Requisites from "../Requisites";
import Checks from "../Checks";
export default function Stors() {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="w-3/4 overflow-y-scroll">
        {/* <Navbar /> */}
        <main>
          <StoreMain />
          <Contacts />
          <Requisites />
          <Checks />
        </main>
      </div>
    </div>
  );
}
