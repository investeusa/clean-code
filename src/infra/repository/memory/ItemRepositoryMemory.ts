import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class IntemRepositoryMemory implements ItemRepository {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, "Instumentos musicais", "Guitarra", 1000),
            new Item(2, "Instumentos musicais", "Amplificador", 5000),
            new Item(3, "Instumentos musicais", "Guitarra", 30)
        ]
    }



    getById(idItem: number): Item | undefined {
        return this.items.find(item => item.idItem === idItem);
    }

}