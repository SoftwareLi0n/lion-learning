# Reglas de Desarrollo para Agentes de IA

> **IMPORTANTE**: Estas reglas son OBLIGATORIAS. Todo código generado debe cumplirlas sin excepción.

---

## 1. Reglas Generales de Código

### 1.1 Formato
- Indentación: **4 espacios** (no tabs).
- Gestor de paquetes: **pnpm** exclusivamente. Nunca usar `npm` ni `yarn`.

### 1.2 Interfaces TypeScript
- **Archivo**: Toda interfaz debe definirse en un archivo independiente con extensión `.interfaces.ts`.
- **Prefijo obligatorio**: El nombre de la interfaz debe iniciar con la letra `I`.
- **No declarar interfaces inline** dentro de archivos `.model.ts`, `.service.ts` ni `.controller.ts`.
- **Uso de any**: Usar `any` solo cuando sea muy complejo el objeto (por ejemplo, en variables internas temporales), luego siempre usar interfaces. **PROHIBIDO EN RETORNOS**: El retorno de los métodos tiene prohibido retornar `any`. Siempre debe retornar de preferencia un `IResponse` (o equivalente), o el tipo de dato u objeto que más se adapte a las necesidades.

```
✅ Correcto:
   Archivo: cliente.interfaces.ts
   export interface ICliente { ... }
   export interface IClienteInput { ... }

❌ Incorrecto:
   Archivo: cliente.model.ts
   export interface Cliente { ... }  // No: está inline y sin prefijo I
```

### 1.3 Interfaces de Entrada (Input)
- No usar tipos de utilidad como `Omit<IEntidad, 'id'>` para representar datos de entrada.
- Crear una interfaz independiente específica (ej: `IClienteInput`, `IOperacionInput`).

```
✅ Correcto:  data: IClienteInput
❌ Incorrecto: data: Omit<ICliente, 'id_cliente'>
```

### 1.4 Respeto a Cambios Manuales
- Si el código actual contiene modificaciones manuales del programador, **no borrarlas ni revertirlas**.
- Trabajar siempre sobre el estado actual del archivo.
- **Verificación ante advertencias de herramientas de edición**: Si al usar una herramienta de edición (`replace_file_content` o `multi_replace_file_content`), el sistema advierte que el reemplazo se realizó con "imprecisiones" (inaccuracies) o aproximaciones, el agente DEBE ejecutar de inmediato una lectura del archivo (`view_file`) o control de cambios (`git diff`) para asegurarse de no haber revertido modificaciones manuales del programador.
- **Respeto a nombres lógicos nuevos ante errores de compilación**: Si tras un reemplazo la compilación falla con errores del tipo "Property X does not exist", no se debe asumir automáticamente que los archivos dependientes deben adaptarse al nombre antiguo. El agente debe verificar si el nombre fue cambiado a propósito por el programador y, de ser así, restaurar y respetar el nuevo nombre lógico en todo el flujo.

### 1.5 Formato de Parámetros en Métodos
- Cuando se cree un método, los parámetros no deben ir en formato vertical (uno por línea). Deben declararse de forma horizontal en la misma línea.

```typescript
✅ Correcto:  static async guardar(user: string, contrasenia: string, idUser: number, empresas: ISubUserEmpresa[]): Promise<interface> { ... }
❌ Incorrecto: 
   static async guardar(
       user: string,
       contrasenia: string,
       idUser: number,
       empresas: ISubUserEmpresa[]
   ): Promise<any> { ... }
```

### 1.6 Valores por Defecto
- **No asumir valores por defecto** (ej. en variables de entorno, configuraciones o cualquier otro código) si no existen o no fueron proporcionados.
- Es preferible que el sistema falle o que la variable quede como `undefined` antes que inyectar valores inventados.
