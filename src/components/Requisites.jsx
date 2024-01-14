import Cleave from "cleave.js/react";
import { useSelector } from "react-redux";

export default function Requisites() {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <>
      <section
        className={
          mode
            ? "flex ml-8 justify-between"
            : "flex ml-8 justify-between text-gray-500"
        }
      >
        <div className="w-1/5">
          <h3 className="text-2xl font-bold">Реквизиты</h3>
        </div>
        <div className="w-3/4">
          <div className="flex">
            <div className="flex mb-[32px]">
              <div>
                <label className="font-semibold">
                  Магазин имеет уникальные реквизиты
                </label>
                <div
                  className={
                    mode
                      ? "w-[350px] overflow-hidden rounded-2xl bg-gray-800 mt-[16px]"
                      : "w-[350px] overflow-hidden rounded-2xl bg-gray-100 mt-[16px]"
                  }
                >
                  <button
                    className={
                      mode
                        ? "w-[47.5%] hover:bg-black rounded-2xl m-1  p-[16px]"
                        : "w-[47.5%] hover:bg-white rounded-2xl m-1  p-[16px]"
                    }
                  >
                    Да
                  </button>
                  <button
                    className={
                      mode
                        ? "w-[47.5%] hover:bg-black rounded-2xl m-1  p-[16px]"
                        : "w-[47.5%] hover:bg-white rounded-2xl m-1  p-[16px]"
                    }
                  >
                    Нет
                  </button>
                </div>
              </div>
              <div className="ml-[32px]">
                <label htmlFor="nameCompany" className="font-semibold">
                  Юридическое название компании
                </label>
                <br />
                <input
                  className={
                    mode
                      ? "bg-gray-800 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                      : "bg-gray-100 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                  }
                  type="text"
                  placeholder="Введите название"
                  id="nameCompany"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="adress" className="font-semibold">
                Юридический адрес
              </label>
              <br />
              <input
                className={
                  mode
                    ? "bg-gray-800 w-[730px] my-[16px] p-[19px] border-0 outline-none rounded-2xl"
                    : "bg-gray-100 w-[730px] my-[16px] p-[19px] border-0 outline-none rounded-2xl"
                }
                type="text"
                id="adress"
                placeholder="Город, район, улица, дом"
              />
            </div>
            <div className="flex mb-[16px]">
              <select
                name="country"
                className={
                  mode
                    ? "bg-gray-800 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                    : "bg-gray-100 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                }
              >
                <option value="UZB">Узбекистан</option>
                <option value="KZ">Казакистан</option>
                <option value="RU">Россия</option>
              </select>
              <input
                type="text"
                placeholder="Введите почтовый индекс"
                className={
                  mode
                    ? "bg-gray-800 w-[350px] ml-[32px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                    : "bg-gray-100 w-[350px] ml-[32px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                }
              />
            </div>
            <div>
              <label htmlFor="card" className="font-semibold">
                Банковский счет
              </label>
              <br />
              <Cleave
                className={
                  mode
                    ? "p-[16px] rounded-t-2xl outline-none border-b-2 mt-[16px] text-gray-500 w-[730px] bg-gray-800"
                    : "p-[16px] rounded-t-2xl outline-none border-b-2 mt-[16px] text-gray-500 w-[730px] bg-gray-100"
                }
                options={{ creditCard: true }}
                placeholder="Введите банковский счет"
              />
              <Cleave
                className={
                  mode
                    ? "p-[16px] rounded-b-2xl outline-none mb-[16px] text-gray-500 w-[730px] bg-gray-800"
                    : "p-[16px] rounded-b-2xl outline-none mb-[16px] text-gray-500 w-[730px] bg-gray-100"
                }
                options={{ creditCard: true }}
                placeholder="Название банка и филиал"
              />
              <button
                className={
                  mode
                    ? "p-[16px] rounded-2xl font-semibold outline-none text-gray-500 w-[730px] bg-gray-800"
                    : "p-[16px] rounded-2xl font-semibold outline-none text-gray-500 w-[730px] bg-gray-100"
                }
              >
                + Добавить еще один банковский счет
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-[32px]" />
    </>
  );
}
