import "./App.css";
import { Container } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const App = () => {
  return (
    <>
      <Navbar />
      <Container key="AppContainer" id="AppContainer">
        <Main />
      </Container>
    </>
  );
};

export default App;
