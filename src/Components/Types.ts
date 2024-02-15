export enum Pages {
    "Main",
    "Transfer",
    "Commission",
    "Deposit",
    "Loan",
    "Information",
    "Systems",
  }

const IconsDir = "/Icons/";
export const MainIconsDir = IconsDir + "Main/";
export const TransferIconsDir = IconsDir + "Transfer/";

interface Item{
    title: string;
    img_src: string;
}

export interface MainItem extends Item {
    id:Pages;
    description: string;
}


export interface TransferItem extends Item {
    dakheli:string;
    sahab:string;
    satna:string;
    paya:string;
    pol:string;
}

export interface DepositItem extends Item{
    minAmount:number;
    rate:number;
    failureRate:string;
    minPeriod:number;
    expirationTime?:string;
}

