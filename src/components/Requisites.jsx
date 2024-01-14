import Cleave from "cleave.js/react";

export default function Requisites() {
  return (
    <>
      <section className="flex ml-8 justify-between">
        <div className="w-1/5">
          <h3 className="text-gray-500 text-2xl font-bold">Реквизиты</h3>
        </div>
        <div className="w-3/4">
          <div className="flex">
            <div className="flex mb-[32px]">
              <div>
                <label className="font-semibold text-gray-500">
                  Магазин имеет уникальные реквизиты
                </label>
                <div className="w-[350px] overflow-hidden rounded-2xl bg-gray-100 mt-[16px]">
                  <button className="w-[47.5%] hover:bg-white rounded-2xl m-1  p-[16px]">
                    Да
                  </button>
                  <button className="w-[47.5%]  p-[16px]  hover:bg-white rounded-2xl m-1">
                    Нет
                  </button>
                </div>
              </div>
              <div className="ml-[32px]">
                <label
                  htmlFor="nameCompany"
                  className="font-semibold text-gray-500"
                >
                  Юридическое название компании
                </label>{" "}
                <br />
                <input
                  className="bg-gray-100 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
                  type="text"
                  placeholder="Введите название"
                  id="nameCompany"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="adress" className="font-semibold text-gray-500">
                Юридический адрес
              </label>
              <br />
              <input
                className="bg-gray-100 w-[730px] my-[16px] p-[19px] border-0 outline-none rounded-2xl"
                type="text"
                id="adress"
                placeholder="Город, район, улица, дом"
              />
            </div>
            <div className="flex mb-[16px]">
              <select
                name="country"
                className="bg-gray-100 w-[350px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
              >
                <option value="UZB">Узбекистан</option>
                <option value="KZ">Казакистан</option>
                <option value="RU">Россия</option>
              </select>
              <input
                type="text"
                placeholder="Введите почтовый индекс"
                className="bg-gray-100 w-[350px] ml-[32px] mt-[16px] p-[19px] border-0 outline-none rounded-2xl"
              />
            </div>
            <div>
              <label htmlFor="card" className="font-semibold text-gray-500">
                Банковский счет
              </label>
              <br />{" "}
              <Cleave
                className="p-[16px] rounded-t-2xl outline-none border-b-2 mt-[16px] text-gray-500 w-[730px] bg-gray-100"
                options={{ creditCard: true }}
                placeholder="Введите банковский счет"
              />
              <Cleave
                className="p-[16px] rounded-b-2xl outline-none text-gray-500 w-[730px] mb-[16px] bg-gray-100"
                options={{ creditCard: true }}
                placeholder="Название банка и филиал"
              />
              <button className="p-[16px] rounded-2xl font-semibold outline-none text-gray-500 w-[730px] bg-gray-100">
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
