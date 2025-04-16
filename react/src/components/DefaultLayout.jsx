import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Default Layout</h1>
      <Outlet></Outlet>
    </>
  );
}