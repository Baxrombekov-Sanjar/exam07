import check1 from "/Чек.png";
import check2 from "/Чек (1).png";
export default function Checks() {
  return (
    <section className="flex ml-8 justify-between">
      <div className="w-1/5">
        <h3 className="text-gray-500 text-2xl font-bold">Чек</h3>
      </div>
      <div className="w-3/4">
        <div>
          <input type="range" className="w-[730px]" />
          <div className="flex mt-[32px]">
            <div className="text-center">
              <input type="checkbox" />
              <p>Стандартный</p>
              <img src={check1} alt="check1" />
            </div>
            <div className="text-center">
              <input type="checkbox" />
              <p>Кастомный</p>
              <img src={check2} alt="check2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
