import "./App.css";
import { Container } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useState } from "react";

export enum Pages {
  "Main",
  "Transfer",
  "Commission",
  "Deposit",
  "Loan",
  "Information",
  "Systems",
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Main);
  const isCurrentPage = (page: Pages) => {
    return page === currentPage;
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Container key="AppContainer" id="AppContainer">
        {isCurrentPage(Pages.Main) && <Main />}
      </Container>
    </>
  );
};

export default App;
