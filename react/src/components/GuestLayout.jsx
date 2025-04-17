import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { motion } from "framer-motion"

export default function GuestLayout() {
  const { token } = useStateContext()

  if (token) {
    return (
      <Navigate to="/" />
    )
  }
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}