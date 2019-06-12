import { Cargo } from "../../../../interfaces/interfaces";

export class InvoiceGoodsItem {

    GoodsCode = '';
    GoodsDescription = '';
    GoodsQuantity = 0;
    MeasureUnitQualifierName = '';
    MeasureUnitQualifierCode = '';
    PlacesQuantity = 0;
    PlacesDescription = '';
    PlacesCode = '';
    GrossWeightQuantity = 0;
    kg = 'kg';
    kg2 = 'кг.';
    kgNetWeightQuantity = 0;
    Price = 0;
    TotalCost = 0;
    constructor() {



    }

    public populate(c: Cargo) {

        this.GoodsCode = c.tnved_code;
        this.GoodsDescription = c.description;
        this.GoodsQuantity = c.unit_quantity;
        this.MeasureUnitQualifierName = c.unit.name_short;
        this.MeasureUnitQualifierCode = c.unit.code;
        this.PlacesQuantity = c.package_quantity;
        this.PlacesDescription = c.package.print_name;
        this.PlacesCode = c.package.package_code;
        this.GrossWeightQuantity = c.gross_weight;
        this.kgNetWeightQuantity = c.nett_weight;
        this.Price = c.unit_price;
        this.TotalCost = c.total;
    }
}

