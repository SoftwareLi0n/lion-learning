
## S: Principio de responsabilidad única
- Cada componente debe hacer su función
- Ejemplo: controlador, el modelo, cada uno hace su trabajo, no deben hacer el trabajo del otro.
## O: Principio de abierto y cerrado
* Cerrado para modificarse, y abierto para extenderse
* Ejemplo: Si tienes un codigo para calcular el impuesto (solo igv), y luego quieres agregar el impuesto a la bolsa, en vez de modificar el codigo, creas una nueva clase.

## L: Principio de sustitución de Liskov
* La clase hijo debe poder remplazar al padre sin que explote
* Ejemplo: Clase padre "Ave" que tiene método volar y clase hijo "Paloma" y "Pingüino" si ambos heredan del padre, en el pingüino saldría error, tendría que existir otra clase "AveVoladora"

## I: Principio de segregación de interfaces 
* Es mejor tener **muchas interfaces pequeñas** que una sola interfaz gigante. No obligues a una clase a implementar métodos que no necesita.

## D: Principio de inversión de dependencias
* Las clases de alto nivel (tu lógica de negocio) no deben depender de herramientas de bajo nivel (bases de datos, APIs). Ambas deben depender de abstracciones (interfaces).