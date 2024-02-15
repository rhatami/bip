import InfoCard from "./InfoCard";
import { MainItem, MainIconsDir, Pages } from "./Types";
import { Grid } from "@radix-ui/themes";

const MainItems: MainItem[] = [
  {
    id: Pages.Transfer,
    title: "انتقال وجه",
    description: "اطلاعات سقف و کارمزد انتقال وجه",
    img_src: MainIconsDir + "transfer.svg",
  },
  {
    id: Pages.Commission,
    title: "کارمزدها",
    description: "اطلاعات کارمزدها و سر فصل ها",
    img_src: MainIconsDir + "commission.svg",
  },
  {
    id: Pages.Deposit,
    title: "سپرده ها",
    description: "اطلاعات سپرده ها و گواهی سپرده",
    img_src: MainIconsDir + "deposit.svg",
  },
  {
    id: Pages.Loan,
    title: "تسهیلات",
    description: "اطلاعات تسهیلات و طرح ها",
    img_src: MainIconsDir + "loan.svg",
  },
  {
    id: Pages.Information,
    title: "اطلاعات بانکی",
    description: "اطلاعات و تعاریف مورد نیاز",
    img_src: MainIconsDir + "information.svg",
  },
  {
    id: Pages.Systems,
    title: "سامانه ها",
    description: "جستجو و دسترسی به سامانه های مورد نیاز",
    img_src: MainIconsDir + "systems.svg",
  },
];

const Main = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: Pages) => void;
}) => {
  return (
    <Grid
      columns={{ xs: "1", sm: "2" }}
      gap="5"
      key="MainGrid"
      className="CardsGrid"
    >
      {MainItems.map((item) => (
        <section
          key={"CardContainer" + item.id}
          onClick={() => setCurrentPage(item.id)}
        >
          <InfoCard
            title={item.title}
            img_src={item.img_src}
            body={<>{item.description}</>}
          />
        </section>
      ))}
    </Grid>
  );
};

export default Main;
