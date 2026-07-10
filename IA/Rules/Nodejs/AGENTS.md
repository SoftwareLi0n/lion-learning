# Reglas de Desarrollo para Agentes de IA

> **IMPORTANTE**: Estas reglas son OBLIGATORIAS. Todo código generado debe cumplirlas sin excepción.

---


## 2. Arquitectura del Backend

### 2.1 Estructura de Carpetas

```
src/
├── config/              # Configuración (DB, variables de entorno, datos fijos)
│   ├── db.ts
│   └── settings.ts
├── features/            # Módulos organizados por entidad/funcionalidad
│   ├── routes.ts        # Registro central de rutas
│   └── <funcionalidad>/       # Carpeta por funcionalidad
│       ├── <entidad>.interfaces.ts   # Interfaces de la entidad
│       ├── <entidad>.model.ts        # Acceso a base de datos
│       ├── <entidad>.service.ts      # Lógica de negocio
│       ├── <entidad>.controller.ts   # Manejo de peticiones HTTP
│       ├── <entidad>.route.ts        # Definición de rutas
│       └── <entidad>.http            # Pruebas REST
└── shared/              # Código compartido entre módulos
    ├── interfaces/      # Interfaces globales
    └── middlewares/      # Middlewares
```

### 2.2 Responsabilidades por Archivo

| Archivo              | Responsabilidad                                | Qué NO debe hacer                          |
|----------------------|------------------------------------------------|--------------------------------------------|
| `.interfaces.ts`     | Definir interfaces (`IEntidad`, `IEntidadInput`) | Lógica, consultas, validaciones           |
| `.model.ts`          | Único punto de contacto con la base de datos    | Validaciones de negocio                    |
| `.service.ts`        | Lógica y validaciones de negocio                | Acceso directo a BD, manejo de `req`/`res` |
| `.controller.ts`     | Recibir peticiones HTTP, mapear datos, responder | Consultas a BD, lógica de negocio compleja |
| `.route.ts`          | Definir rutas y aplicar middlewares             | Lógica de ningún tipo                      |
| `.http`              | Documentar y probar endpoints REST              | —                                          |

### 2.3 Nomenclatura de Clases

| Nombre de Archivo | Nombre de la Clase        | Ejemplo de Clase                         |
| ----------------- | ------------------------- | ---------------------------------------- |
| `.model.ts`       | Nombre directo de entidad (sin sufijo "Model") | `Cliente`, `Oficina`, `User`             |
| `.service.ts`     | Entidad + `Service`       | `ClienteService`, `OficinaService`       |
| `.controller.ts`  | Entidad + `Controller`    | `ClienteController`, `OficinaController` |

```
✅ Correcto en modelo:    export class Cliente { static async getAll() { ... } }
❌ Incorrecto en modelo:  export class ClienteRepository { ... }  // No usar sufijo "Repository"
❌ Incorrecto en modelo:  export class ClienteModel { ... }       // No usar sufijo "Model"
```

### 2.4 Flujo de Datos (Controller → Service → Model)

El controller **debe mapear explícitamente** las propiedades del `req.body` antes de enviarlas al servicio. Nunca pasar `req.body` directamente ni con spread (`{ ...req.body }`).

```typescript
// ✅ Correcto
const data: IClienteInput = {
    codigo_tipo_documento,
    numero_documento,
    nombre,
    direccion,
    celular
};
const result = await clienteService.create(data);

// ❌ Incorrecto
const result = await clienteService.create(req.body);
const result = await clienteService.create({ ...req.body });
```

### 2.5 Formato de Respuestas API

Toda respuesta debe usar las funciones `successResponse()` y `errorResponse()` de `shared/interfaces/api-response.interfaces.ts`:

```json
{
    "success": true,
    "message": "Mensaje descriptivo",
    "result": null
}
```

### 2.6 Códigos de Estado HTTP

| Situación                 | Código |
|---------------------------|--------|
| Operación exitosa         | `200`  |
| Recurso creado            | `201`  |
| Error de validación/cliente | `400` |
| No autorizado             | `401`  |
| Recurso no encontrado     | `404`  |
| Error interno del servidor | `500` |

---

## 3. Reglas de Base de Datos

### 3.1 Motor
- **SQL Server** con el paquete `mssql`.

### 3.2 Nomenclatura de Procedimientos Almacenados
- Formato: `sp_IA_<nombre_tabla>_<accion>`
- Ejemplo: `sp_IA_oficina_CRUD`, `sp_IA_transaccion_operacion_guardar`

### 3.3 Parámetro CRUD
Los SP tipo CRUD reciben un parámetro `@crud CHAR(1)`:

| Valor | Acción |
|-------|--------|
| `'C'` | Create |
| `'R'` | Read   |
| `'U'` | Update |
| `'D'` | Delete |

### 3.4 Creación de Procedimientos Almacenados
- **No intentar crear tablas**: las tablas ya existen en la base de datos.
- Solo retornar el código SQL del procedimiento en el chat para verificación manual del usuario.
- **No guardar scripts SQL** en ninguna carpeta del proyecto.

### 3.5 Prohibición de Cambios Directos
- **Queda estrictamente prohibido** ejecutar cambios directos en la base de datos.
- Cualquier modificación necesaria debe comunicarse al usuario para ejecución manual.