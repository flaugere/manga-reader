import { Page } from "./page";

export interface Group {
    name: string;
    order: BigInteger;
    pages: Array<Page>
}