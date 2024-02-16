import "./Systems.css";
import { Card, Flex, Link, Table } from "@radix-ui/themes";
import { SystemItem } from "./Types";
import { useState } from "react";
import SearchBox from "./SearchBox";

const SystemItems: SystemItem[] = [
  {
    title: "سامانه یکپارچه مدیریت کاربران",
    description: "احراز هویت و دسترسی یکپارچه به سامانه ها",
    url: "http://account.bsi.net.ir",
  },
  {
    title: "سطوح ده گانه و رده بندی مشتریان",
    description: "مشاهده و رصد رده بندی مشتریان در سطوح ده گانه",
    url: "http://matrix.bsi.ir",
  },
  {
    title: "هزینه فایده مشتریان",
    description: "مشاهده سوددهی یا زیان مشتریان و جزئیات مربوطه",
    url: "http://benefit.bsi.ir",
  },
  {
    title: "پروفایل مشتریان ",
    description: "مشاهده حساب ها و جزئیات مربوط به هر مشتری",
    url: "http://profile.bsi.ir",
  },
  {
    title: "مشاهده امتیاز پذیرندگان",
    description: "مشاهده امتیاز پذیرندگان POS و IPG",
    url: "http://pos.bsi.ir",
  },
  {
    title: "حساب های راکد",
    description: "مشاهده و مدیریت حساب های راکد و فعال",
    url: "http://raked.bsi.ir",
  },
  {
    title: "قانون 50",
    description: "اعمال یا حذف قانون 50 بر روی حساب",
    url: "http://rule.bsi.ir",
  },
  {
    title: "ساتکاپ",
    description: "مدیریت کاربران سیستم سپهر",
    url: "http://sutcup.bsi.ir",
  },
  {
    title: "شهاب نهاب",
    description: "گزارش اطلاعات هویتی در سامانه شهاب نهاب",
    url: "http://shahab.bsi.ir",
  },
  {
    title: "نظام پیشنهادات",
    description: "ثبت و مشاهده پیشنهادات ارائه شده کارکنان بانک",
    url: "http://suggestion.bsi.ir",
  },
];

function FilterSearch(searchText: string) {
  if (!searchText) return SystemItems;
  return SystemItems.filter(
    (system) =>
      system.title.includes(searchText) ||
      system.description.includes(searchText) ||
      system.url.includes(searchText)
  );
}

const Systems = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Card key="SystemsTableCard" className="Card SystemsTableCard">
      <Flex
        key="SystemsFlex"
        className="SystemsFlex"
        direction="column"
        gap="3"
      >
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
        <Table.Root
          variant="surface"
          key="SystemsTable"
          className="SystemsTable"
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>نام سامانه</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>شرح سامانه</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>لینک سامانه</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {FilterSearch(searchText).map((system) => (
              <Table.Row className="SystemTableRow">
                <Table.RowHeaderCell className="SystemTableCell SystemTitle">
                  {system.title}
                </Table.RowHeaderCell>
                <Table.Cell className="SystemTableCell SystemDescription">
                  {system.description}
                </Table.Cell>
                <Table.Cell className="SystemTableCell SystemLink">
                  <Link href={system.url} target="_blank">
                    ورود به سامانه
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </Card>
  );
};

export default Systems;
