import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
  const { user, token } = useStateContext();
  const onLogout = (ev) => {
    ev.preventDefault();
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex h-screen bg-base-200">
        <aside className="w-64 bg-base-100 shadow-lg p-4 flex flex-col gap-4">
          <h1 className="text-xl font-bold mb-4">LRFS</h1>
          <Link to="/dashboard" className="btn btn-ghost justify-start">
            Dashboard
          </Link>
          <Link to="/users" className="btn btn-ghost justify-start">
            Users
          </Link>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="bg-base-100 shadow-md p-4 flex justify-between items-center">
            <div className="text-lg font-semibold">Header</div>
            <div className="flex gap-4 items-center">
              <div className="text-sm text-white-600">{user.name}</div>
              <button onClick={onLogout} className="btn btn-ghost btn-sm">Logout</button>
            </div>
          </header>

          <main className="p-6 overflow-y-auto flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
