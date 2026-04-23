// 🟢 LETRA "O"
// BIEN: Open/Closed. Si sale un nuevo impuesto, creamos una nueva clase, NO modificamos estas.

export interface ICalculadoraImpuesto {
    calcular(montoBase: number): number;
}

export class IgvNacional implements ICalculadoraImpuesto {
    calcular(montoBase: number): number {
        return montoBase * 0.18;
    }
}

export class ExoneradoSelva implements ICalculadoraImpuesto {
    calcular(montoBase: number): number {
        return 0; // Sin impuesto
    }
}