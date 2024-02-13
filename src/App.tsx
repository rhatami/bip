import "./App.css";
import { Container } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useState } from "react";
import Transfer from "./Components/Transfer";
import { Pages } from "./Components/Types";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Main);
  const isCurrentPage = (page: Pages) => {
    return page === currentPage;
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Container key="AppContainer" id="AppContainer">
        {isCurrentPage(Pages.Main) && <Main setCurrentPage={setCurrentPage} />}
        {isCurrentPage(Pages.Transfer) && <Transfer />}
      </Container>
    </>
  );
};

export default App;
