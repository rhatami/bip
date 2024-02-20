import "./Systems.css";
import { Card, Flex, Table } from "@radix-ui/themes";
import { CommissionItem, ThousandSeparator } from "./Types";
import { useState } from "react";
import SearchBox from "./SearchBox";

const systemChapter = "سیستمی";
const CommissionItems: CommissionItem[] = [
  {
    title: "صدور هر فقره چک بانکی یا بین بانکی",
    price: 72_000,
    chapter: systemChapter,
  },
  {
    title:
      "تقاضای عدم پرداخت چک (به دلیل مفقودی، سرقت ، کلاهبرداری و ...) هر برگ",
    price: 144_000,
    chapter: systemChapter,
  },
  {
    title: "انتقال حساب جاری به شعبه دیگر در هر شهری",
    price: 432_000,
    chapter: "CH15",
  },
  {
    title: "ابطال چک جاری اشخاص به در خواست مشتری هر برگ",
    price: 11_000,
    chapter: systemChapter,
  },
  {
    title: "نگه داری امانی چک های با سررسید بیش از 30 روز به ازای هر برگ چک",
    price: 6_000,
    chapter: systemChapter,
  },
  {
    title: "ثبت ، انتقال یا استعلام چک در سامانه صیاد",
    price: 50_000,
    chapter: "CH98",
  },
  {
    title: "افتتاح حساب جاری موقت برای شرکت در شرف تاسیس",
    price: 60_000,
    chapter: "CH70",
  },
  { title: "صدور هرگونه گواهی حساب", price: 100_800, chapter: "CH74" },
  {
    title: "پرداخت نقدی از حساب قرض الحسنه پس انداز یا کوتاه مدت",
    price: 0,
    chapter: "-",
  },
  { title: "تایید اصالت وکالت نامه", price: 60_000, chapter: "CH87" },
];

function FilterSearch(searchText: string) {
  if (!searchText) return CommissionItems;
  return CommissionItems.filter(
    (commission) =>
      commission.title.includes(searchText) ||
      commission.chapter.includes(searchText)
  );
}

const Commission = () => {
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
              <Table.ColumnHeaderCell>عنوان کارمزد</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>مبلغ کارمزد</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>سرفصل واریزی</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {FilterSearch(searchText).map((commission) => (
              <Table.Row className="SystemTableRow">
                <Table.RowHeaderCell className="SystemTableCell SystemTitle">
                  {commission.title}
                </Table.RowHeaderCell>
                <Table.Cell className="SystemTableCell SystemDescription">
                  {ThousandSeparator(commission.price) + " ریال"}
                </Table.Cell>
                <Table.Cell className="SystemTableCell SystemDescription">
                  {commission.chapter}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Flex>
    </Card>
  );
};

export default Commission;
