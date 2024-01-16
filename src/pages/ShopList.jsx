import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import NewShop from "../components/NewShop";
import SideBar from "../components/SideBar";
import { useState } from "react";

export default function ShopList() {
  const { mode } = useSelector((state) => state.darkMode);
  const { shops } = useSelector((state) => state.shops);
  const [value, setValue] = useState("");

  const filteredShops = shops.filter((shop) => {
    return shop.title.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <div
      className={
        mode ? "h-screen flex bg-gray-900 text-white" : "h-screen flex"
      }
    >
      <SideBar className="border" />
      <div className="w-3/4">
        <h2 className="text-4xl font-bold mt-12 ml-8 mb-8">
          Настройки магазинов
        </h2>
        <hr className="mb-8" />
        <div className="relative ml-8 mb-4">
          <CiSearch className="absolute top-6 text-xl left-4 text-gray-400" />
          <input
            className={
              mode
                ? "w-[81%] py-[19px] px-[45px] rounded-2xl bg-gray-800"
                : "w-[81%] py-[19px] px-[45px] rounded-2xl bg-gray-100"
            }
            type="text"
            name="storename"
            placeholder={"Название магазина"}
            onChange={(e) => setValue(e.target.value)}
          />
          <Link
            to={"/createShop"}
            className="ml-4 py-[19px] px-[16px] rounded-2xl bg-blue-600 text-[#fff] hover:text-gray-100"
          >
            <span className="pr-2 font-semibold text-base hover:text-white">
              +
            </span>
            Новый магазин
          </Link>
        </div>
        <div className="mx-8 mb-3 border-y text-gray-400 py-3 px-4 flex justify-between ">
          <p>Магазин</p>
          <p>Кол-во касс</p>
          <p>Действие</p>
        </div>
        {filteredShops.map((shop) => (
          <NewShop key={shop.id} shop={shop} />
        ))}
        <hr className="mx-8" />
      </div>
    </div>
  );
}
