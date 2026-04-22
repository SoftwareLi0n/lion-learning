// 🟢 LETRA "I"
// Todos los comprobantes tienen montos
export interface IComprobante{
    obtenerTotal(): number;
    obtenerTipo(): string;
}

// Solo ALGUNOS comprobantes tienen detracción
export interface IConDetraccion {
    calcularDetraccion(): number;
}

// Interfaz para cualquier cosa que guarde datos (Base de datos)
export interface IRepositorio {
    guardar(datos: any): void;
}

// Interfaz para cualquier cosa que envíe mensajes (Email, SMS)
export interface INotificador {
    enviarMensaje(mensaje: string): void;
}