import { Item } from "./item";

export interface Market
{
    description: string;
    id: number;
    items: Item[];
    name: string;
    price: number;
    logo: string;

}