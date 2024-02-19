export function ThousandSeparator(num:number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export enum Pages {
    "Main",
    "Transfer",
    "Commission",
    "Deposit",
    "Loan",
    "Information",
    "Systems",
    "Search"
  }

// const IconsDir = "/bip/Icons/";
const IconsDir = "/Icons/";
export const MainIconsDir = IconsDir + "Main/";
export const TransferIconsDir = IconsDir + "Transfer/";

interface PicturedItem{
    title: string;
    img_src: string;
}

export interface MainItem extends PicturedItem {
    id:Pages;
    description: string;
}


export interface TransferItem extends PicturedItem {
    dakheli:string;
    sahab:string;
    satna:string;
    paya:string;
    pol:string;
}

interface MoneyItem{
    title: string;
    minAmount:number;
    minPeriod:number;
}

export interface DepositItem extends MoneyItem{
    rate: number;
    failureRate:string;
    expirationTime?:string;
}

export enum customerType {
    Real="حقیقی",
    Legal="حقوقی",
    LegalPersonel = "پرسنل حقوقی",
    Business = "صاحبان کسب و کار"
};

export interface LoanItem extends MoneyItem{
    description:string;
    maxPeriod:number;
    maxAmount:string;
    minRate : number;
    maxRate:number;
    customers : customerType[];
    payback:string;
}

export interface SystemItem {
    title:string;
    description:string;
    url:string;
}