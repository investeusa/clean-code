import Dimension from "./Dimension";

export default class Item {
    dimension: Dimension | undefined

    constructor(
        readonly idItem: number,
        readonly category: string,
        readonly description: string,
        readonly price: number,
        readonly heigth?: number,
        readonly lenght?: number,
        readonly width?: number,
    ) {
        if (heigth && lenght && width) {
            this.dimension = new Dimension(width, heigth, lenght)
        }
    }

    getVolume() {
        if (this.dimension) return this.dimension.getVolume()
    }
}