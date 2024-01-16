import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.uz";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Contacts() {
  const { mode } = useSelector((state) => state.darkMode);
  const [firstNum, setfirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  return (
    <>
      <section
        className={
          mode
            ? "flex justify-between ml-8"
            : "flex justify-between ml-8 text-gray-500"
        }
      >
        <div className="w-1/5">
          <h3 className="text-2xl font-bold">Контакты</h3>
        </div>
        <div className="w-3/4">
          <div>
            <label htmlFor="number" className="font-semibold pb-[16px]">
              Телефоны
            </label>
            <br />

            <Cleave
              options={{ phone: true, phoneRegionCode: "UZ" }}
              placeholder="+xxx xx xxx xx xx"
              onChange={(e) => setfirstNum(e.target.value)}
              className={
                mode
                  ? "bg-gray-800 w-[350px]  outline-none h-14 rounded-2xl px-4"
                  : "w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
              }
            />
            <Cleave
              options={{ phone: true, phoneRegionCode: "UZ" }}
              placeholder="+xxx xx xxx xx xx"
              onChange={(e) => secondNum(e.target.value)}
              className={
                mode
                  ? "bg-gray-800 w-[350px] ml-[32px] outline-none h-14 rounded-2xl px-4"
                  : "w-[350px]  outline-none h-14 ml-[32px] rounded-2xl px-4 bg-gray-100"
              }
            />
            <button
              className={
                mode
                  ? "mt-[19px] w-[350px] bg-gray-800 text-blue-500 py-[16px] rounded-2xl"
                  : "mt-[19px] w-[350px] bg-gray-100 text-blue-500 py-[16px] rounded-2xl"
              }
            >
              + Добавить телефон
            </button>
          </div>
          <div className="flex my-[32px]">
            <div>
              <label htmlFor="facebook" className="font-semibold pb-[16px]">
                Facebook
              </label>
              <br />
              <input
                className={
                  mode
                    ? "w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-800"
                    : " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="Название страницы"
                id="facebook"
              />
            </div>
            <div>
              <label
                htmlFor="instagram"
                className="font-semibold pb-[16px] ml-[32px]"
              >
                Instagram
              </label>
              <br />
              <input
                className={
                  mode
                    ? "w-[350px] ml-[32px]  outline-none h-14 rounded-2xl px-4 bg-gray-800"
                    : " w-[350px] ml-[32px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="@ Юзернейм"
                id="instagram"
              />
            </div>
          </div>
          <div className="flex mb-[32px]">
            <div>
              <label htmlFor="facebook" className="font-semibold pb-[16px]">
                Telegram
              </label>
              <br />
              <input
                className={
                  mode
                    ? "w-[350px] outline-none h-14 rounded-2xl px-4 bg-gray-800"
                    : " w-[350px] outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="@ Юзернейм"
                id="facebook"
              />
            </div>
            <div>
              <label
                htmlFor="instagram"
                className="font-semibold pb-[16px] ml-[32px]"
              >
                Сайт
              </label>
              <br />
              <input
                className={
                  mode
                    ? "w-[350px] ml-[32px]  outline-none h-14 rounded-2xl px-4 bg-gray-800"
                    : " w-[350px] ml-[32px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="Ссылка на сайт"
                id="instagram"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-[32px]" />
    </>
  );
}
