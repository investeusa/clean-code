import Item from "./Item";

export default interface IntemRepository {
    getById(idItem: number): Item | undefined;
}