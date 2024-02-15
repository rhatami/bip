import "./Deposit.css";
import { Badge, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { DepositItem } from "./Types";

const Deposits: DepositItem[] = [
  {
    title: "کوتاه مدت عادی",
    img_src: "",
    minAmount: 100_000,
    rate: 5,
    failureRate: "0",
    minPeriod: 1,
  },
  {
    title: "کوتاه مدت امید",
    img_src: "",
    minAmount: 100_000,
    rate: 10,
    failureRate: "0",
    minPeriod: 1,
  },
  {
    title: "بلند مدت یکساله",
    img_src: "",
    minAmount: 100_000_000,
    rate: 20.5,
    failureRate: "پس از یک ماه برگشت سود ندارد",
    minPeriod: 1,
  },
  {
    title: "بلند مدت دو ساله",
    img_src: "",
    minAmount: 100_000_000,
    rate: 21.5,
    failureRate: "پس از دو ماه برگشت سود ندارد",
    minPeriod: 2,
  },
  {
    title: "بلند مدت سه ساله",
    img_src: "",
    minAmount: 100_000_000,
    rate: 22.5,
    failureRate: "پس از سه ماه برگشت سود ندارد",
    minPeriod: 3,
  },
];

const GavahiSeporde: DepositItem[] = [
  {
    title: "طرح 3400 مرحله 32",
    img_src: "",
    minAmount: 10_000_000,
    rate: 20.5,
    failureRate: "10%",
    minPeriod: 12,
    expirationTime: "15 مهرماه",
  },
  {
    title: "طرح 3400 مرحله 33",
    img_src: "",
    minAmount: 10_000_000,
    rate: 20.5,
    failureRate: "10%",
    minPeriod: 12,
    expirationTime: "25 بهمن ماه",
  },
  {
    title: "طرح 3400 مرحله 33",
    img_src: "",
    minAmount: 10_000_000,
    rate: 20.5,
    failureRate: "10%",
    minPeriod: 12,
    expirationTime: "28 بهمن ماه",
  },
  {
    title: "طرح 3400 مرحله 45",
    img_src: "",
    minAmount: 10_000_000,
    rate: 18,
    failureRate: "10%",
    minPeriod: 1,
    expirationTime: "29 ام هرماه",
  },
];

const getDepositBody = (item: DepositItem) => {
  return (
    <ul className="DepositBody" key={"List" + item.title}>
      <li className="DepositItem">حداقل مبلغ سپرده : {item.minAmount} ریال</li>
      <li className="DepositItem">نرخ شکست : {item.failureRate}</li>
      <li className="DepositItem">حداقل مدت سپرده : {item.minPeriod} ماه</li>
    </ul>
  );
};

const getGavahiBody = (item: DepositItem) => {
  return (
    <ul className="DepositBody" key={"List" + item.title}>
      <li className="DepositItem">حداقل مبلغ سپرده : {item.minAmount} ریال</li>
      <li className="DepositItem">نرخ شکست : {item.failureRate}</li>
      <li className="DepositItem">مدت سپرده : {item.minPeriod} ماه</li>
      <li className="DepositItem">تاریخ سررسید : {item.expirationTime}</li>
    </ul>
  );
};

const DepositCard = ({
  title,
  rate,
  body,
}: {
  title: string;
  rate: number;
  body: JSX.Element;
}) => {
  return (
    <Card key={title} className="Card">
      <Flex direction="column" className="CardFlex" key={"CardFlex" + title}>
        <Flex className="CardHeader" justify="between">
          <Text
            as="p"
            size={{ xs: "2", sm: "5", md: "6" }}
            className="CardTitle"
            key={"CardTitle" + title}
          >
            {title}
          </Text>
          <Badge
            color="blue"
            key={"CardBadge" + title}
            className="CardBadge"
            radius="medium"
          >
            {rate} %
          </Badge>
        </Flex>
        <article key={"CardBody" + title} className="CardBody">
          {body}
        </article>
      </Flex>
    </Card>
  );
};

const Deposit = () => {
  return (
    <Flex direction="column" gap="2">
      <Text className="DeposiSepordeTitle">سپرده ها</Text>
      <Grid
        columns={{ xs: "1", sm: "2", md: "3" }}
        gap="5"
        key="DepositGrid"
        className="CardsGrid"
      >
        {Deposits.map((item) => (
          <DepositCard
            key={item.title}
            title={item.title}
            rate={item.rate}
            body={getDepositBody(item)}
          />
        ))}
      </Grid>

      <Text className="DepositGavahiTitle">گواهی سپرده</Text>
      <Grid
        columns={{ xs: "1", sm: "2", md: "3" }}
        gap="5"
        key="DepositGrid"
        className="CardsGrid"
      >
        {GavahiSeporde.map((item) => (
          <DepositCard
            key={item.title}
            title={item.title}
            rate={item.rate}
            body={getGavahiBody(item)}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Deposit;
