
## Contexto
- **Arquitectura**: Arquitectura modular basada en características/funcionalidades.
## Reglas del Frontend
### Modularidad de Vistas
Al generar código para crear vistas o páginas, se deben aplicar estrictamente los siguientes principios:
  1. **Prohibido crear archivos monolíticos**: Nunca generes todo el código de una página en un solo archivo.
  2. **División por responsabilidad**: Divide la vista principal en sub-elementos más pequeños y manejables.
  3. **Estructura de carpetas para hijos**: Si los elementos visuales secundarios pertenecen únicamente a esa página y no se reutilizarán en otras partes del sistema, debes crear una carpeta llamada `components` dentro del directorio de la vista padre.
  4. **Aislamiento de código**: Coloca cada elemento secundario dentro de esa carpeta `components`, asegurando que cada uno tenga su propio archivo TypeScript, plantilla HTML y hoja de estilos para evitar archivos gigantes y garantizar el mantenimiento escalable.
### Interfaces
-  **Creación de interfaces**: Las interfaces siempre crearlas en un archivo aparte que inicie con `I$nombreinterface.ts`.
- **Uso de any**: Usar `any` solo cuando sea muy complejo el objeto, luego siempre usar interfaces.

**Ejemplo de interfaces:**
Archivo: `IUsuario.ts`
Contenido:
```typescript
export interface IUsuario {
  id: number;
  nombres: string;
  correo: string;

}
```

- **Visualización de Errores**: Cuando ocurra un error al consumir la API, la interfaz del frontend debe mostrar siempre el mensaje específico devuelto en la propiedad `message` del error/respuesta del servidor, en lugar de utilizar mensajes estáticos o genéricos.

- **Organización de CSS**: El archivo global `styles.css` solo se utiliza para estilos generales de la aplicación y clases que serán reutilizadas en múltiples componentes. Cualquier estilo o clase específica de un componente debe agregarse obligatoriamente en su propio archivo CSS del componente (ej. `nombre-componente.component.css`).

- **Uso de Modales**: Para mostrar ventanas emergentes o modales en la aplicación, se debe utilizar obligatoriamente el componente Dialog de Angular Material (`MatDialog` de `@angular/material/dialog`), asegurando un comportamiento estándar en accesibilidad, foco y manejo de overlays.

  

## Reglas Generales

- **Indentación**: El código debe ser indentado obligatoriamente con **4 espacios**.

- **Respeto a Cambios Manuales**: Si el código actual en el archivo contiene modificaciones manuales realizadas por el programador (variables, parámetros, lógica, etc.), el agente de IA no debe borrarlas ni revertirlas a versiones previas. Se debe respetar el código como está y realizar los nuevos cambios basándose en el estado actual modificado por el usuario.