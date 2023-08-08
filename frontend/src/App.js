import { Container } from "react-bootstrap";
import Header from "./components/com/Header";
import "./css/App.css";
import Footer from "./components/com/Footer";
import { Home } from "./components/screens/Home";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>ecom 2023</h1>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
