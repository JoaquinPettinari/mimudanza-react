import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <section>
      <header className="header background">
        <h1>¡Vendemos todo!</h1>
      </header>
      <main className="max-w-7xl m-auto">
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
