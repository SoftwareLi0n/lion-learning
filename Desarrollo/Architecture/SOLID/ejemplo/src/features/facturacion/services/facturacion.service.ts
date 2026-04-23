import { IComprobante } from '../interfaces/comprobante.interface';
import { IRepositorio } from '../../../core/interfaces/repositorio.interface';

export class FacturacionService {
    
    // 💉 Exigimos la inyección por el constructor
    constructor(private dbRepository: IRepositorio<any>) {}

    async procesarEmision(comprobante: IComprobante) {
        const total = comprobante.obtenerTotal();
        const tipo = comprobante.obtenerTipo();
        
        // Lógica de negocio (Ej: Impuestos)
        const igv = tipo === 'Factura' ? total * 0.18 : 0;
        const totalPagar = total + igv;

        const resumen = { tipo, subtotal: total, igv, totalPagar };

        // Delegamos a la herramienta inyectada
        const exito = await this.dbRepository.guardar(resumen);

        if (!exito) throw new Error("Fallo al guardar en BD");

        return resumen;
    }
}