import { Container } from "react-bootstrap";
import Header from "./components/com/Header";
import "./css/App.css";
import Footer from "./components/com/Footer";
import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>proShop 2023</h1>
          <Outlet />
          {/*print the router outlet instead of homeScreen*/}
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
