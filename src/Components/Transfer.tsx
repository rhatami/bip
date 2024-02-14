import "./Transfer.css";
import { Flex, Grid, RadioGroup, Text } from "@radix-ui/themes";
import { TransferItem, TransferIconsDir } from "./Types";
import InfoCard from "./InfoCard";

const unlimited = "بدون سقف";

const TransferItems: TransferItem[] = [
  {
    title: "سقف ماهیانه",
    img_src: TransferIconsDir + "MonthlyLimit.svg",
    dakheli: unlimited,
    sahab: "150,000,000 ریال",
    satna: unlimited,
    paya: "1,000,000,000 ریال",
    pol: "150,000,000 ریال",
  },
  {
    title: "دستگاه کارتخوان",
    img_src: TransferIconsDir + "POS.svg",
    dakheli: unlimited,
    sahab: "150,000,000 ریال",
    satna: unlimited,
    paya: "1,000,000,000 ریال",
    pol: "150,000,000 ریال",
  },
  {
    title: "شعبه",
    img_src: TransferIconsDir + "Branch.svg",
    dakheli: unlimited,
    sahab: "150,000,000 ریال",
    satna: unlimited,
    paya: "1,000,000,000 ریال",
    pol: "150,000,000 ریال",
  },
  {
    title: "خودپرداز",
    img_src: TransferIconsDir + "ATM.svg",
    dakheli: "100,000,000 ریال",
    sahab: "100,000,000 ریال",
    satna: "ندارد",
    paya: "ندارد",
    pol: "ندارد",
  },
  {
    title: "اینترنت بانک",

    img_src: TransferIconsDir + "IB.svg",
    dakheli: "1,000,000,000 ریال",
    sahab: "100,000,000 ریال",
    satna: "1,000,000,000 ریال",
    paya: "1,000,000,000 ریال",
    pol: "100,000,000 ریال",
  },
  {
    title: "همراه بانک",
    img_src: TransferIconsDir + "MB.svg",
    dakheli: "1,000,000,000 ریال",
    sahab: "100,000,000 ریال",
    satna: "1,000,000,000 ریال",
    paya: "1,000,000,000 ریال",
    pol: "100,000,000 ریال",
  },
  {
    title: "پرداخت یار",
    img_src: TransferIconsDir + "Payco.svg",
    dakheli: "ندارد",
    sahab: "30,000,000 ریال",
    satna: "ندارد",
    paya: "ندارد",
    pol: "ندارد",
  },
];

const getDescriptionList = (item: TransferItem) => {
  return (
    <ul className="DescriptionList">
      <li className="DescriptionItem">داخلی : {item.dakheli}</li>
      <li className="DescriptionItem">کارت به کارت : {item.sahab}</li>
      <li className="DescriptionItem">ساتنا : {item.satna}</li>
      <li className="DescriptionItem">پایا : {item.paya}</li>
      <li className="DescriptionItem">پل : {item.pol}</li>
    </ul>
  );
};

const Accounts = [
  { value: "underage", label: "محجور" },
  { value: "foreign", label: "اتباع" },
  { value: "legal", label: "حقوقی" },
  { value: "business", label: "تجاری" },
  { value: "real", label: "حقیقی" },
];

const Transfer = () => {
  return (
    <>
      <Flex
        gap="3"
        justify="center"
        className="TransferRadioFlex Card"
        key="TransferRadioFlex"
      >
        <Text
          as="label"
          size={{ initial: "2", md: "5" }}
          id="TransferRadioTitle"
        >
          نوع حساب :
        </Text>
        <RadioGroup.Root
          defaultValue={(Accounts.length - 1).toString()}
          className="RadioButtons"
        >
          <Flex gap="4" id="RadioButtonsFlex">
            {Accounts.map((account) => (
              <Text as="label" size={{ initial: "2", md: "5" }}>
                <Flex gap="1" className="TransferRadioItem">
                  <RadioGroup.Item
                    className="TransferRadioButton"
                    value={account.value}
                  />
                  {account.label}
                </Flex>
              </Text>
            ))}
          </Flex>
        </RadioGroup.Root>
      </Flex>

      <Grid
        columns={{ xs: "1", sm: "2" }}
        gap="5"
        key="TransferGrid"
        className="CardsGrid"
      >
        {TransferItems.map((item) => (
          <InfoCard
            title={item.title}
            img_src={item.img_src}
            body={getDescriptionList(item)}
          />
        ))}
      </Grid>
    </>
  );
};

export default Transfer;
