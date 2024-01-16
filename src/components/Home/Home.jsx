/* eslint-disable react/jsx-key */
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar";
import { useSelector } from "react-redux";
import NewShop from "../NewShop";

export default function Home() {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={
        mode ? "h-screen flex bg-gray-900 text-white" : "h-screen flex"
      }
    >
      <SideBar />

      {/* {show ? (
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
                  ? "w-3/4 py-[19px] px-[45px] rounded-2xl bg-gray-800"
                  : "w-3/4 py-[19px] px-[45px] rounded-2xl bg-gray-100"
              }
              type="text"
              name="storename"
              placeholder={"Название магазина"}
            />
            <Link
              to={"/stors"}
              className="w-1/5 mr-2 ml-4 py-[19px] px-[16px] rounded-2xl bg-blue-600 text-[#fff] hover:text-gray-100"
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
            <p className="pr-20">Действие</p>
          </div>
          {shops.map((shop) => (
            <NewShop key={shop.id} shop={shop} />
          ))}
          <hr className="mx-8" />
        </div>
      ) : ( */}
      <h1 className="text-3xl text-center m-auto font-medium">
        Добро пожаловать <br /> Достонхон Озодходжаев!
      </h1>
      {/* )} */}
    </div>
  );
}
