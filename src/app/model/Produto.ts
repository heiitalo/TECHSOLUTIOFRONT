import { Fornecedor } from "./Fornecedor";

export class Produto{
    public id: number;
    public produto: string;
    public valor: number;
    public fornecedor: Fornecedor;
}