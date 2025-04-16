import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Guest Layout</h1>
      <Outlet></Outlet>
    </>
  );
}