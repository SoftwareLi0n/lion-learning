import { IRepositorio, INotificador } from './interfaces';

// 🟢 LETRA "S"

// BIEN: Single Responsibility. Solo sabe guardar en SQL. No sabe qué es una factura ni un email.
export class SqlServerRepositorio implements IRepositorio {
    guardar(datos: any): void {
        console.log(`[SQL Server] Guardando en tabla comprobantes:`, datos);
    }
}

// BIEN: Single Responsibility. Solo sabe enviar correos.
export class EmailNotificador implements INotificador {
    enviarMensaje(mensaje: string): void {
        console.log(`[Email] Enviando correo al cliente: ${mensaje}`);
    }
}