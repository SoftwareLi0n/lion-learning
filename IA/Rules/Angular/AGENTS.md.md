## Reglas del Frontend

- **Arquitectura**: Arquitectura modular basada en características/funcionalidades.

### Interfaces
-  **Creación de interfaces**: Las interfaces siempre crearlas en un archivo aparte que inicie con `I$nombreinterface.ts`.
- **Uso de any**: Usar `any` solo cuando sea muy complejo el objeto, luego siempre usar interfaces.

- **Visualización de Errores**: Cuando ocurra un error al consumir la API, la interfaz del frontend debe mostrar siempre el mensaje específico devuelto en la propiedad `message` del error/respuesta del servidor, en lugar de utilizar mensajes estáticos o genéricos.

- **Organización de CSS**: El archivo global `styles.css` solo se utiliza para estilos generales de la aplicación y clases que serán reutilizadas en múltiples componentes. Cualquier estilo o clase específica de un componente debe agregarse obligatoriamente en su propio archivo CSS del componente (ej. `nombre-componente.component.css`).

- **Uso de Modales**: Para mostrar ventanas emergentes o modales en la aplicación, se debe utilizar obligatoriamente el componente Dialog de Angular Material (`MatDialog` de `@angular/material/dialog`), asegurando un comportamiento estándar en accesibilidad, foco y manejo de overlays.

  

## Reglas Generales

- **Indentación**: El código debe ser indentado obligatoriamente con **4 espacios**.

- **Respeto a Cambios Manuales**: Si el código actual en el archivo contiene modificaciones manuales realizadas por el programador (variables, parámetros, lógica, etc.), el agente de IA no debe borrarlas ni revertirlas a versiones previas. Se debe respetar el código como está y realizar los nuevos cambios basándose en el estado actual modificado por el usuario.