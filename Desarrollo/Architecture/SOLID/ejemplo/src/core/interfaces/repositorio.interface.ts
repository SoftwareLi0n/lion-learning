export interface IRepositorio<T> {
    guardar(datos: T): Promise<boolean>;
}