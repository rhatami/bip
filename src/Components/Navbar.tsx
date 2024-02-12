import { Avatar, Flex, Text } from "@radix-ui/themes";
import "./Navbar.css";

interface NavMenue {
  title: string;
  address: string;
}

const Navbar = () => {
  const siteTitle = "مرجع اطلاعات بانکی";
  const menu: NavMenue[] = [
    { title: "صفحه اصلی", address: "Main" },
    { title: "انتقال وجه", address: "Transfer" },
    { title: "کارمزدها", address: "Commission" },
    { title: "سپرده ها", address: "Deposit" },
    { title: "تسهیلات", address: "Loan" },
    { title: "اطلاعات بانکی", address: "Information" },
    { title: "سامانه ها", address: "Systems" },
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
        gap="6"
        display={{ initial: "none", xs: "none", sm: "flex" }}
      >
        {menu.map((item) => (
          <Text
            as="span"
            size={{ xs: "2", sm: "3", md: "4" }}
            key={item.address}
            className="NavbarLink"
          >
            {item.title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
