import "./Loan.css";
import { Badge, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { LoanItem, ThousandSeparator, customerType } from "./Types";

const RealMaxLoan = "3,000,000,000 ریال";
const MaxLoan = "مطابق سیاست ها و ضوابط بسته اعتباری";

const Loans: LoanItem[] = [
  {
    title: "سنا 2",
    description: "تسهیلات معادل مبلغ سپرده",
    minRate: 15,
    maxRate: 23,
    minAmount: 100_000_000,
    maxAmount: RealMaxLoan,
    minPeriod: 2,
    maxPeriod: 10,
    customers: [customerType.Real, customerType.LegalPersonel],
    payback: "اقساطی بین 18 تا 60 ماه",
  },
  {
    title: "میثاق حقیقی 2",
    description: "تسهیلات با نرخ ترجیحی",
    minRate: 14,
    maxRate: 16,
    minAmount: 80_000_000,
    maxAmount: RealMaxLoan,
    minPeriod: 3,
    maxPeriod: 12,
    customers: [customerType.Real, customerType.LegalPersonel],
    payback: "اقساطی بین 9 تا 36 ماه",
  },
  {
    title: "جاری طلایی 2",
    description: "تسهیلات ارزان قیمت",
    minRate: 2,
    maxRate: 18,
    minAmount: 60_000_000,
    maxAmount: RealMaxLoan,
    minPeriod: 3,
    maxPeriod: 12,
    customers: [customerType.Real, customerType.LegalPersonel],
    payback: "اقساطی بین 12 تا 36 ماه",
  },
  {
    title: "سپاس",
    description: "وام قرض الحسنه 4 درصد",
    minRate: 4,
    maxRate: 4,
    minAmount: 100_000_000,
    maxAmount: "10,000,000,000 ریال",
    minPeriod: 2,
    maxPeriod: 12,
    customers: [
      customerType.Real,
      customerType.Business,
      customerType.LegalPersonel,
    ],
    payback: "اقساطی بین 4 تا 36 ماه",
  },
  {
    title: "سنا کسب و کار",
    description: "تسهیلات مناسب کسب و کار",
    minRate: 15,
    maxRate: 23,
    minAmount: 100_000_000,
    maxAmount: "50,000,000 ریال",
    minPeriod: 2,
    maxPeriod: 10,
    customers: [customerType.Business, customerType.Legal],
    payback: "اقساطی و یکجا سررسید 3 تا 18 ماه",
  },
  {
    title: "میثاق حقوقی 2",
    description: "تسهیلات اقساطی برای اشخاص حقوقی",
    minRate: 12,
    maxRate: 21,
    minAmount: 100_000_000,
    maxAmount: MaxLoan,
    minPeriod: 3,
    maxPeriod: 12,
    customers: [customerType.Business, customerType.Legal],
    payback: "اقساطی بین 12 تا 24 ماه",
  },
  {
    title: "جاری طلایی کسب و کار",
    description: "تسهیلات ارزان قیمت برای صاحبان کسب و کار",
    minRate: 2,
    maxRate: 18,
    minAmount: 3_000_000_000,
    maxAmount: "50,000,000,000 ریال",
    minPeriod: 3,
    maxPeriod: 9,
    customers: [customerType.Business, customerType.Legal],
    payback: "اقساطی بین 12 تا 24 ماه",
  },
  {
    title: "تیمچه",
    description: "تسهیلات دفعی مناسب اصناف",
    minRate: 23,
    maxRate: 23,
    minAmount: 100_000_000,
    maxAmount: "30,000,000,000 ریال",
    minPeriod: 3,
    maxPeriod: 12,
    customers: [customerType.Business, customerType.Legal],
    payback: "یکجا سررسید بین 2 تا 6 ماه",
  },
  {
    title: "صبای سپهر",
    description: "تسهیلات بر اساس رسوب پایانه فروش",
    minRate: 0.5,
    maxRate: 18,
    minAmount: 100_000_000,
    maxAmount: MaxLoan,
    minPeriod: 3,
    maxPeriod: 12,
    customers: [customerType.Real, customerType.Business, customerType.Legal],
    payback: "اقساطی 12 تا 36 ماهه",
  },
];

function getLoanBody(loan: LoanItem) {
  return (
    <ul className="LoanList">
      <li className="LoanItem">
        حداقل تسهیلات : {ThousandSeparator(loan.minAmount)} ریال
      </li>
      <li className="LoanItem">حداکثر تسهیلات : {loan.maxAmount}</li>
      <li className="LoanItem">
        حداقل مدت سپرده گذاری {loan.minPeriod} ماه و حداکثر {loan.maxPeriod} ماه
      </li>
      <li className="LoanItem">بازپرداخت {loan.payback}</li>
    </ul>
  );
}

const LoanCard = ({ loan }: { loan: LoanItem }) => {
  return (
    <Card key={loan.title} className="Card">
      <Flex
        direction="column"
        className="CardFlex"
        key={"CardFlex" + loan.title}
        gap="2"
      >
        <Flex className="CardHeader" justify="between">
          <Flex
            className="TitleFlex"
            key={"TitleFlex" + loan.title}
            direction="column"
          >
            <Text
              as="p"
              size={{ xs: "2", sm: "5", md: "6" }}
              className="CardTitle"
              key={"CardTitle" + loan.title}
            >
              {loan.title}
            </Text>
            <Text
              as="p"
              size={{ initial: "3", xs: "4", sm: "5" }}
              className="CardDescription"
              key={"CardDescription" + loan.title}
              mt="-1"
              mr="3"
            >
              {loan.description}
            </Text>
          </Flex>
          <Flex
            key={"LoanRateFlex" + loan.title}
            className="LoanRateFlex"
            direction="column"
            gap="2"
          >
            <Badge
              color="green"
              key={"CardBadge" + loan.title}
              className="CardBadge RateBadge"
              radius="medium"
            >
              {loan.minRate} %{" "}
            </Badge>

            {loan.minRate != loan.maxRate && (
              <Badge
                color="red"
                key={"CardBadge" + loan.title}
                className="CardBadge RateBadge"
                radius="medium"
              >
                {loan.maxRate} %
              </Badge>
            )}
          </Flex>
        </Flex>
        <Flex
          key={"LoanCustomers" + loan.title}
          className="LoanCustomers"
          gap="3"
        >
          {loan.customers.map((customer) => (
            <Badge
              color="blue"
              className="CardBadge CustomerBadge"
              key={"CustomerBadge" + customer}
              radius="medium"
            >
              {customer}
            </Badge>
          ))}
        </Flex>

        <article key={"CardBody" + loan.title} className="CardBody">
          {getLoanBody(loan)}
        </article>
      </Flex>
    </Card>
  );
};

const Loan = () => {
  return (
    <>
      <Text as="div" className="LoanTarhTitle SectionHeader">
        طرح های تسهیلاتی
      </Text>
      <Grid
        columns={{ xs: "1", sm: "2", md: "3" }}
        gap="5"
        key="LoanGrid"
        className="CardsGrid"
      >
        {Loans.map((item) => (
          <LoanCard key={item.title} loan={item} />
        ))}
      </Grid>
    </>
  );
};

export default Loan;
