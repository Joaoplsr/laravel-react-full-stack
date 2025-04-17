import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
  const { token } = useStateContext()

  if (token) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline">Guest Layout</h1>
      <Outlet></Outlet>
    </>
  );
}