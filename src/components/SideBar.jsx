/* eslint-disable react/prop-types */
import logo from "/billz-logo-full.svg";
import darkLogo from "/Layer 1.svg";
import { IoMdSettings } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/DarkMode/DarkModeSlice";

toggleDarkMode;
export default function SideBar({ showShops }) {
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
        <img src={mode ? darkLogo : logo} alt="logo" className="mb-12 pl-8" />
        <p className="flex items-center settings pl-8">
          <FaChevronLeft />
          <IoMdSettings
            className="text-blue-600"
            onClick={() => dispatch(toggleDarkMode())}
          />
          <span>Настройки</span>
        </p>
        <ul>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Профиль
          </li>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Компания
          </li>
          <button
            onClick={showShops}
            className="transition-all duration-300 ease-in-out focus:text-[#4993dd] w-[100%] h-[100%] focus:bg-[#e0e7ee] text-start  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded"
          >
            <li className="hover:text-[#4993dd] focus:text-[#4993dd]">
              Магазины
            </li>
          </button>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Кассы
          </li>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Чеки
          </li>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Валюты и оплата
          </li>
          <li className="transition-all duration-300 ease-in-out  hover:text-[#4993dd] hover:bg-[#e0e7ee] hover:rounded">
            Товары
          </li>
        </ul>
        <div className="mt-32 ml-8 flex items-center">
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
        </div>
      </div>
    </>
  );
}
