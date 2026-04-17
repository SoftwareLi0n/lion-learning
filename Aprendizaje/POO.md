
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

## Tiene 4 pilares:
1. **Encapsulamiento:** Es esconder las funciones o propiedades importastes, y creas métodos públicos para que puedan acceder a ellos.
```ts
class DocumentoTributario implements IExportable {
    // 'protected' -> Solo esta clase y sus hijas pueden acceder.
    // 'private' -> Solo esta clase puede acceder.

    protected idSerie: string;
    private montoBase: number;
    
    constructor(idSerie: string, montoBase: number) {
        this.idSerie = idSerie;
        this.montoBase = montoBase;
    }
  
    // Método público para acceder a datos privados (Getter)
    public getMontoBase(): number {
        return this.montoBase;
    }
```

2. **Herencia**: Creamos una clase padre, y las hijas heredas las propiedades de la clase padre, se suele usar la palabra "extends"
```ts
// Boleta hereda todo de DocumentoTributario
class Boleta extends DocumentoTributario {
    constructor(idSerie: string, montoBase: number) {
        super(idSerie, montoBase); // Llama al constructor de la clase padre
    }
    ...
```

3. **Polimorfismo**: Es cuando una clase padre tiene un método y la clase hijo el método con el mismo nombre porque lo hereda, sin embargo, puede cambiar el código del método. 
```ts
// Clase padre
class DocumentoTributario implements IExportable {
	calcularTotal(): number {
        return this.montoBase;
    }
}

// Clase hijo
class Factura extends DocumentoTributario {
	calcularTotal(): number {
        const impuesto = this.getMontoBase() * this.IGV;
        return impuesto;
    }
}
```

4. **Abstracción**: Es mostrarle lo que hace, pero no darle detalle de como lo hace, se suele usar la palabra implements (puedes usar contratos con interfaces o clases abstract)
*Ejemplo con interfaces*
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

Ejemplo con clase abstract
```ts
abstract class DocumentoTributario implements IExportable {
	abstract calcularTotal(): number;
}

class Factura extends DocumentoTributario {
	// Si o si debe existir este método
	calcularTotal(): number {
        const impuesto = this.getMontoBase() * this.IGV;
        return impuesto;
    }
}
```