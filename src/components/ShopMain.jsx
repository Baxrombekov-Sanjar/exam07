import Cleave from "cleave.js/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { uid } from "uid";
import { FaChevronLeft } from "react-icons/fa6";
import { addShop } from "../features/NewShop/NewShopSlice";

export default function StoreMain() {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const [shopTitle, setShopTitle] = useState("");
  const [quadrature, setquadrature] = useState("");
  const navigate = useNavigate();
  const addShopsHandler = () => {
    if (shopTitle && quadrature !== "") {
      const shop = {
        id: uid(),
        title: shopTitle,
        quadrature: quadrature,
      };
      navigate("/");
      alert("Товар успешно добавлен!");
      dispatch(addShop(shop));
      setShopTitle("");
      setquadrature("");
    } else {
      return;
    }
  };
  return (
    <>
      <nav
        className={
          mode
            ? "flex fixed top-0 w-[74%] mb-24 bg-gray-900 z-10 items-center justify-between"
            : "flex fixed top-0 w-[74%] mb-24 bg-white z-10 items-center justify-between"
        }
      >
        <h2 className="text-4xl font-bold mt-12 ml-8 mb-8 flex items-center">
          <Link to={"/"}>
            <FaChevronLeft className="w-10 rounded-full p-3 cursor-pointer h-10 bg-gray-100 text-blue-500 mr-4" />
          </Link>
          <p>
            <span>Новый магазин</span>
          </p>
        </h2>
        <div className="mr-8">
          <button
            onClick={() => addShopsHandler()}
            className={
              shopTitle && quadrature
                ? "bg-blue-600 px-[16px] font-medium py-[15px] mr-4 rounded-2xl"
                : "px-[16px] font-medium bg-gray-100 py-[15px] mr-4  rounded-2xl"
            }
            style={{ background: mode ? "#404040" : "" }}
          >
            Создать
          </button>
        </div>
      </nav>
      <hr className="mb-8 mt-[130px]" />
      <section
        className={
          mode
            ? "flex justify-between ml-8 text-white"
            : "flex justify-between ml-8 text-gray-500"
        }
      >
        <div className="w-1/5">
          <h3 className="text-2xl font-bold">Основные</h3>
        </div>
        <div className="w-3/4">
          <div className="flex">
            <div>
              <label htmlFor="nameStore" className="font-semibold">
                Наименование
              </label>
              <br />
              <input
                value={shopTitle}
                onChange={(e) => setShopTitle(e.target.value)}
                type="text"
                className={
                  mode
                    ? "bg-gray-800 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                    : "bg-gray-100 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                }
                id="nameStore"
              />
            </div>
            <div className="relative">
              <label htmlFor="quadrature" className="font-semibold">
                Квадратура
              </label>
              <br />
              <input
                value={quadrature}
                onChange={(e) => setquadrature(e.target.value)}
                type="number"
                className={
                  mode
                    ? "bg-gray-800 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                    : "bg-gray-100 mr-[32px] rounded-2xl pl-[16px] w-[350px] h-[56px] mt-[16px] border-0 outline-none"
                }
                id="quadrature"
              />
              <p className="text-gray-400 font-semibold absolute top-[60%] right-[15%]">
                м<sup>2</sup>
              </p>
            </div>
          </div>
          <div className="mb-[32px]">
            <p className="font-semibold pt-[32px] pb-[16px]">Режим работы</p>
            <div
              className={
                mode
                  ? "flex mr-[92px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] w-[135px] border-end h-[100%]">
                Понедельник
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] w-[135px] border-end h-[100%]">
                Вторник
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] border-end h-[100%] w-[135px]">
                Среда
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] border-end h-[100%] w-[135px]">
                Четверг
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] border-end h-[100%] w-[135px]">
                Пятница
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] border-end h-[100%] w-[135px]">
                Суббота
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
            <div
              className={
                mode
                  ? "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-800 justify-between pr-[16px]"
                  : "flex mr-[92px] my-[8px] rounded-2xl h-[65px] items-center bg-gray-100 justify-between pr-[16px]"
              }
            >
              <p className="font-semibold flex items-center px-[16px] border-end h-[100%] w-[135px]">
                Воскресенье
              </p>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Открытие:</p>
                <Cleave
                  className="w-[50px] p-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="flex w-[30%] justify-around">
                <p className="text-gray-300 font-semibold">Закрытие:</p>
                <Cleave
                  className="w-[50px] border-0 outline-none text-gray-500 bg-inherit"
                  options={{ time: true, timePattern: ["h", "m"] }}
                  placeholder="XX:XX"
                />
              </div>
              <div className="form-check form-switch text-2xl flex justify-end w-[15%]">
                <input
                  className="form-check-input p-3"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-[32px]" />
    </>
  );
}
