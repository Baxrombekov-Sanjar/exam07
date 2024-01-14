/* eslint-disable react/jsx-key */
import { CiSearch } from "react-icons/ci";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar";
import { useSelector } from "react-redux";
import NewShop from "../NewShop";

export default function Home() {
  const shops = useSelector((state) => state.shops.shops);
  console.log(shops);
  const [show, setShow] = useState(false);
  function showShops() {
    setShow(!show);
  }
  return (
    <div className="h-screen flex">
      <SideBar showShops={showShops} />
      {show ? (
        <div className="w-3/4">
          <h2 className="text-4xl font-bold mt-12 ml-8 mb-8">
            Настройки магазинов
          </h2>
          <hr className="mb-8" />
          <div className="relative ml-8 mb-4">
            <CiSearch className="absolute top-6 text-xl left-4 text-gray-400" />
            <input
              className="w-3/4 py-[19px] px-[45px] rounded-2xl bg-gray-100"
              type="text"
              name="storename"
              placeholder={"Название магазина"}
            />
            <Link
              to={"/stors"}
              className="w-1/5 border-2 mr-2 ml-4 py-[19px] px-[16px] rounded-2xl bg-blue-600 text-[#fff]"
            >
              <span className="pr-2 font-semibold text-base hover:text-white">
                +
              </span>{" "}
              Новый магазин
            </Link>
          </div>
          <div className="mx-8 mb-3 border-2 text-gray-400 border-x-0 py-3 px-4 flex justify-between ">
            <p>Магазин</p>
            <p>Кол-во касс</p>
            <p className="pr-20">Действие</p>
          </div>
          {shops.map((shop) => (
            <NewShop key={shop.id} shop={shop} />
          ))}
          <hr className="mx-8" />
        </div>
      ) : (
        <h1 className="text-3xl text-center m-auto font-medium">
          Добро пожаловать <br /> Достонхон Озодходжаев!
        </h1>
      )}
    </div>
  );
}
