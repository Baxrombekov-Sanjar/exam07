import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";

export default function Goods() {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <div
      className={
        mode ? "h-screen flex bg-gray-900 text-white" : "h-screen flex"
      }
    >
      <SideBar />

      <h1 className="text-3xl text-center m-auto font-medium">Товары</h1>
    </div>
  );
}
