import { IComprobante, IConDetraccion } from './interfaces';

// 🟢 LETRA "L"

export class Boleta implements IComprobante {
    constructor(private total: number) { }

    obtenerTotal(): number { return this.total; }
    obtenerTipo(): string { return 'Boleta de Venta'; }
}

// La Factura implementa DOS interfaces porque sí tiene detracción
export class Factura implements IComprobante, IConDetraccion {
    constructor(private total: number) { }

    obtenerTotal(): number { return this.total; }
    obtenerTipo(): string { return 'Factura'; }

    calcularDetraccion(): number {
        return this.total * 0.10; // 10% de detracción
    }
}