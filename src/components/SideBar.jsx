/* eslint-disable react/prop-types */
import logo from "/billz-logo-full.svg";
import darkLogo from "/Layer 1.svg";
import { IoMdSettings } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/DarkMode/DarkModeSlice";
import { FaRegSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuMoon } from "react-icons/lu";

export default function SideBar() {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={
          mode
            ? "w-1/4 pt-12 bg-gray-800 text-white"
            : "w-1/4 pt-12 bg-gray-100 text-gray-500"
        }
      >
        <div className="flex justify-between">
          <img
            src={mode ? darkLogo : logo}
            alt="logo"
            className="mb-12 pl-8 cursor-pointer"
          />
          {mode ? (
            <LuMoon
              className="text-2xl mr-10 cursor-pointer"
              onClick={() => dispatch(toggleDarkMode())}
            />
          ) : (
            <FaRegSun
              className="text-2xl mr-10 cursor-pointer"
              onClick={() => dispatch(toggleDarkMode())}
            />
          )}
        </div>
        <ul>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/settings"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              <FaChevronLeft />
              <IoMdSettings className="text-blue-600 mx-[8px]" />
              <span>Настройки</span>
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/profile"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Профиль
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/company"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Компания
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out w-[100%] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/shopList"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Магазины
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/cashRegister"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Кассы
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/checks"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Чеки
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/payment"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Валюты и оплата
            </Link>
          </button>
          <button className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            <Link
              to={"/goods"}
              className="route pl-8 focus:text-[#4993dd] focus:bg-[#e0e7ee]"
            >
              Товары
            </Link>
          </button>
        </ul>
        <Link
          to={"/profile"}
          className="mt-32 ml-8 flex items-center hover:text-[#4993dd] cursor-pointer"
        >
          <div
            className={
              mode
                ? "w-10 h-10 rounded-full bg-white text-gray-600 items-center flex justify-center mr-2"
                : "w-10 h-10 rounded-full bg-blue-600 text-white items-center flex justify-center mr-2"
            }
          >
            ДО
          </div>
          <p className="font-bold">
            Достонхон <br />
            Озодходжаев
          </p>
        </Link>
      </div>
    </>
  );
}
