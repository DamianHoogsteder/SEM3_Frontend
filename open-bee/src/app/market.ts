import { Item } from "./Item";

export interface Market
{
    id: number;
    name: string;
    description: string;
    price: number;
    items: Item[];
}