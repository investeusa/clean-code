import Item from "../entity/Item";

export default interface IntemRepository {
    getById(idItem: number): Promise<Item | undefined>;
}