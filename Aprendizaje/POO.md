
* La clases en la plantilla
```ts
class Boleta extends DocumentoTributario {
    constructor(idSerie: string, montoBase: number) {
        super(idSerie, montoBase); // Llama al constructor de la clase padre
    }

    calcularTotal(): number {
        return this.getMontoBase();
    }
}
```
* **El Objeto:** Es la instancia
```ts
const miBoleta = new Boleta("B001-00001", 100);
```

* **Clase abstract:** Es una clase genérica que no puede ser instanciada, pero si heredada, por ejemplo un DocumentoTributario sería una clase abstract, y hereda a un Boleta que sería una clase normal que si puede ser instanciada.

Tiene 4 pilares:
1. **Encapsulamiento:** Es esconder las funciones o propiedades importastes, y creas métodos públicos para que puedan acceder a ellos.
```ts

```
1. **Herencia**: Creamos una clase padre, y las hijas heredas las propiedades de la clase padre, se suele usar la palabra "extends"
2. Polimorfismo
3. **Abstracción**: Es mostrarle lo que hace, pero no darle detalle de como lo hace, se suele usar la palabra implements 
```ts
// se crea un contrato
export interface IExportable {
    generarResumen(): string;
}

// y se lo implementa "implements"
abstract class DocumentoTributario implements IExportable {
	generarResumen(): string {
        return `Doc: ${this.idSerie} | Subtotal: S/${this.montoBase.toFixed(2)}`;
    }
}
```

