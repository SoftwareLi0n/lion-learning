// 🟢 LETRA "L"

import { IComprobante } from '../interfaces/comprobante.interface';

export class Factura implements IComprobante {
    constructor(private total: number, private ruc: string) {}

    obtenerTotal(): number { return this.total; }
    obtenerTipo(): string { return 'Factura'; }
    obtenerRuc(): string { return this.ruc; }
}

export class Boleta implements IComprobante {
    constructor(private total: number, private dni: string) {}

    obtenerTotal(): number { return this.total; }
    obtenerTipo(): string { return 'Boleta'; }
}