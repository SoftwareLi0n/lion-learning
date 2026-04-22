import { ICalculadoraImpuesto } from "./impuestos";
import { IComprobante, INotificador, IRepositorio } from "./interfaces";

// 🟢 LETRA "D"
//// BIEN: Dependency Inversion. El facturador no sabe qué base de datos ni qué correo usa.

export class ProcesadorFacturacion {
    constructor(
        private baseDeDatos: IRepositorio,
        private notificador: INotificador,
        private calculadoraImpuesto: ICalculadoraImpuesto
    ) {}

    procesar(comprobante: IComprobante): void {
        const total = comprobante.obtenerTotal();
        const impuesto = this.calculadoraImpuesto.calcular(total);
        const tipo = comprobante.obtenerTipo();

        const resumen = {
            tipo,
            total,
            impuesto,
            totalAPagar: total + impuesto
        };

        // Delegamos las responsabilidades
        this.baseDeDatos.guardar(resumen);
        this.notificador.enviarMensaje(`Su ${tipo} ha sido procesada con éxito.`);
    }
}