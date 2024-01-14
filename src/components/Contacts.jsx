import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.uz";

export default function Contacts() {
  return (
    <>
      <section className="flex justify-between ml-8">
        <div className="w-1/5">
          <h3 className="text-gray-500 text-2xl font-bold">Контакты</h3>
        </div>
        <div className="w-3/4">
          <div>
            <label
              htmlFor="number"
              className="text-gray-500 font-semibold pb-[16px]"
            >
              Телефоны
            </label>
            <br />

            <Cleave
              options={{ phone: true, phoneRegionCode: "uz" }}
              placeholder="+xxx xx xxx xx xx"
              className={
                " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
              }
            />
            <Cleave
              options={{ phone: true, phoneRegionCode: "uz" }}
              placeholder="+xxx xx xxx xx xx"
              className={
                " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100 ml-[32px]"
              }
            />
            <button className="mt-[19px] w-[350px] bg-gray-100 text-blue-500 py-[16px] rounded-2xl">
              + Добавить телефон
            </button>
          </div>
          <div className="flex my-[32px]">
            <div>
              <label
                htmlFor="facebook"
                className="text-gray-500 font-semibold pb-[16px]"
              >
                Facebook
              </label>
              <br />
              <input
                className={
                  " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="Название страницы"
                id="facebook"
              />
            </div>
            <div>
              <label
                htmlFor="instagram"
                className="text-gray-500 font-semibold pb-[16px] ml-[32px]"
              >
                Instagram
              </label>
              <br />
              <input
                className={
                  " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100 ml-[32px]"
                }
                type="text"
                placeholder="@ Юзернейм"
                id="instagram"
              />
            </div>
          </div>
          <div className="flex mb-[32px]">
            <div>
              <label
                htmlFor="facebook"
                className="text-gray-500 font-semibold pb-[16px]"
              >
                Telegram
              </label>
              <br />
              <input
                className={
                  " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100"
                }
                type="text"
                placeholder="@ Юзернейм"
                id="facebook"
              />
            </div>
            <div>
              <label
                htmlFor="instagram"
                className="text-gray-500 font-semibold pb-[16px] ml-[32px]"
              >
                Сайт
              </label>
              <br />
              <input
                className={
                  " w-[350px]  outline-none h-14 rounded-2xl px-4 bg-gray-100 ml-[32px]"
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
