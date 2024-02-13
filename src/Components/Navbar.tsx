import { Avatar, Flex, Text } from "@radix-ui/themes";
import "./Navbar.css";
import { Pages } from "./Types";

interface NavMenue {
  id: Pages;
  title: string;
  address: string;
}

const Navbar = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}) => {
  const siteTitle = "مرجع اطلاعات بانکی";
  const menu: NavMenue[] = [
    { id: Pages.Main, title: "صفحه اصلی", address: "Main" },
    { id: Pages.Transfer, title: "انتقال وجه", address: "Transfer" },
    { id: Pages.Commission, title: "کارمزدها", address: "Commission" },
    { id: Pages.Deposit, title: "سپرده ها", address: "Deposit" },
    { id: Pages.Loan, title: "تسهیلات", address: "Loan" },
    { id: Pages.Information, title: "اطلاعات بانکی", address: "Information" },
    { id: Pages.Systems, title: "سامانه ها", address: "Systems" },
  ];

  return (
    <Flex gap="5" className="Navbar" key="Navbar">
      <Flex key="LogoFlex" className="LogoFlex" gap="5">
        <Avatar
          src="./logo.svg"
          fallback="Logo"
          size={{ xs: "1", md: "3" }}
          radius="none"
          id="Logo"
          key="Logo"
        />
        <Text id="SiteTitle" size={{ xs: "3", sm: "5", md: "7" }}>
          {siteTitle}
        </Text>
      </Flex>

      <Flex
        className="NavbarMenu"
        key="NavbarMenu"
        gap="6"
        display={{ initial: "none", xs: "none", sm: "flex" }}
      >
        {menu.map((item) => (
          <Text
            as="span"
            size={{ xs: "2", sm: "3", md: "4" }}
            className={
              "NavbarLink " + (item.id === currentPage && "CurrentPageLink")
            }
            key={item.id}
            onClick={() => {
              if (item.id !== currentPage) setCurrentPage(item.id);
            }}
          >
            {item.title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
