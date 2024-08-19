import { Outlet } from "react-router-dom";

import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";

export function App() {

  return (
    <div className="wrapper">
      <Header />

      <main className="page" style={{ marginTop: "150px" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
