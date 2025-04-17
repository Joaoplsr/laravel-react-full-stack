import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
  const { user, token } = useStateContext()

  if (!token) {
    return (
      <Navigate to="/login" />
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Default Layout</h1>
      <Outlet></Outlet>
    </>
  );
}