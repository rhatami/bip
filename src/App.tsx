import "./App.css";
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Text,
} from "@radix-ui/themes";

interface card {
  title: string;
  description: string;
  img_src: string;
}

const App = () => {
  const icons_folder = "/Icons/";
  const cards: card[] = [
    {
      title: "انتقال وجه",
      description: "اطلاعات سقف و کارمزد انتقال وجه",
      img_src: icons_folder + "transfer.svg",
    },
    {
      title: "کارمزدها",
      description: "اطلاعات کارمزدها و سر فصل ها",
      img_src: icons_folder + "commission.svg",
    },
    {
      title: "سپرده ها",
      description: "اطلاعات سپرده ها و گواهی سپرده",
      img_src: icons_folder + "deposit.svg",
    },
    {
      title: "تسهیلات",
      description: "اطلاعات تسهیلات و طرح ها",
      img_src: icons_folder + "loan.svg",
    },
    {
      title: "اطلاعات بانکی",
      description: "اطلاعات و تعاریف مورد نیاز",
      img_src: icons_folder + "information.svg",
    },
    {
      title: "سامانه ها",
      description: "جستجو و دسترسی به سامانه های مورد نیاز",
      img_src: icons_folder + "systems.svg",
    },
  ];
  return (
    <>
      <Container key="AppContainer" id="AppContainer">
        <Grid
          columns={{ xs: "1", sm: "2" }}
          gap="5"
          justify="between"
          key="MainGrid"
          id="MainGrid"
        >
          {cards.map((card) => (
            <Card key={card.title} className="MainCard">
              <Flex className="CardFlex">
                <Avatar
                  className="CardAvatar"
                  src={card.img_src}
                  size="6"
                  fallback="BSI"
                  radius="medium"
                />
                <Box className="CardBox">
                  <Text as="p" className="CardTitle">
                    {card.title}
                  </Text>
                  <Text as="p" className="CardDescription">
                    {card.description}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
