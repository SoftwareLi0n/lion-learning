import { IRepositorio } from '../../../core/interfaces/repositorio.interface';

// Esta clase SOLO sabe hacer INSERTs en SQL Server
export class SqlFacturacionRepository implements IRepositorio<any> {
    async guardar(datos: any): Promise<boolean> {
        // Aquí iría tu: await SQL.ejecutar_procedimiento('sp_guardar', datos)
        console.log(`[SQL Server] Guardado exitoso:`, datos);
        return true;
    }
}