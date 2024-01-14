import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NewShop({ shop }) {
  return (
    <Link
      to={"/stors"}
      className="mb-3 mx-8 items-center text-gray-400 py-3 px-4 flex justify-between bg-gray-100 rounded-2xl"
    >
      <p className="text-blue-600 font-medium">{shop.title}</p>
      <p className="pr-24">1</p>
      <div className="mr-28 w-10 h-10 rounded-2xl flex justify-center items-center  cursor-pointer bg-red-600">
        <IoIosCloseCircle className="text-red-600 bg-white rounded-full" />
      </div>
    </Link>
  );
}
