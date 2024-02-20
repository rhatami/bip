import { DirectionProvider } from "@radix-ui/react-direction";
import { Container } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useState } from "react";
import Transfer from "./Components/Transfer";
import { Pages } from "./Components/Types";
import Deposit from "./Components/Deposit";
import Loan from "./Components/Loan";
import Systems from "./Components/Systems";
import Search from "./Components/Search";
import Commission from "./Components/Commission";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Main);
  const isCurrentPage = (page: Pages) => {
    return page === currentPage;
  };

  return (
    <>
      <DirectionProvider dir="rtl">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Container key="AppContainer" id="AppContainer">
          {isCurrentPage(Pages.Main) && (
            <Main setCurrentPage={setCurrentPage} />
          )}
          {isCurrentPage(Pages.Transfer) && <Transfer />}
          {isCurrentPage(Pages.Deposit) && <Deposit />}
          {isCurrentPage(Pages.Loan) && <Loan />}
          {isCurrentPage(Pages.Systems) && <Systems />}
          {isCurrentPage(Pages.Search) && <Search />}
          {isCurrentPage(Pages.Commission) && <Commission />}
        </Container>
      </DirectionProvider>
    </>
  );
};

export default App;
