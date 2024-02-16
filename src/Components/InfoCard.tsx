import "./InfoCard.css";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

const InfoCard = ({
  title,
  img_src,
  body,
}: {
  title: string;
  img_src: string;
  body: JSX.Element;
}) => {
  return (
    <Card key={title} className="Card">
      <Flex direction={{ initial: "column", sm: "row" }} className="CardFlex">
        <Avatar
          className="CardAvatar"
          src={img_src}
          size={{ xs: "4", sm: "5", md: "6" }}
          fallback="BSI"
          radius="medium"
        />
        <Box className="CardBox">
          <Text
            as="p"
            size={{ xs: "4", sm: "5", md: "6" }}
            className="CardTitle"
          >
            {title}
          </Text>
          <article className="CardBody">{body}</article>
        </Box>
      </Flex>
    </Card>
  );
};

export default InfoCard;
