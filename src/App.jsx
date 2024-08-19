import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />

      {/* <Main /> */}
      <main className="page" style={{ marginTop: "150px" }}>
        <div className="container">
          <h1>Hello world!!</h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
