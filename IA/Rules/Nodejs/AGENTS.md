# Reglas de Desarrollo para Agentes de IA

Este documento contiene las reglas de desarrollo obligatorias para este proyecto. Todos los agentes de IA deben seguir estas pautas estrictamente.
 
## Reglas Generales

- **Indentación**: El código debe ser indentado obligatoriamente con **4 espacios**.
- **Gestor de Paquetes**: Se debe usar exclusivamente `pnpm` (no usar `npm` ni `yarn`).
- **Interfaces**: Las interfaces siempre deben definirse en un archivo independiente con el nombre `I$nombreInterface.ts` (tanto en el frontend como en el backend), nunca dentro de otros archivos como `.model.ts`.
- **Respeto a Cambios Manuales**: Si el código actual en el archivo contiene modificaciones manuales realizadas por el programador (variables, parámetros, lógica, etc.), el agente de IA no debe borrarlas ni revertirlas a versiones previas. Se debe respetar el código como está y realizar los nuevos cambios basándose en el estado actual modificado por el usuario. 

## Reglas del Backend (back-agencia)

- **Arquitectura**: Arquitectura modular basada en características/funcionalidades.
- **Responsabilidades**:
  - Archivos `.model.ts`: Único punto de contacto con la base de datos (repositorios/consultas).
  - Archivos `.service.ts`: Contiene la lógica y validaciones del negocio.
- **Paso de Datos**: No se debe enviar el objeto `req.body` desestructurado de forma genérica (como `{ ...req.body }`) a los servicios. Se deben mapear y extraer las propiedades de forma explícita en el controlador para que el programador conozca con claridad qué campos se procesan.
- **Uso de Interfaces**: Se debe evitar el uso de tipos de utilidad como `Omit<Interface, 'prop'>` para representar payloads o datos de entrada. En su lugar, se debe crear una interfaz específica independiente (por ejemplo, `OperacionInput`).
- **Pruebas de API**: Cada carpeta de característica debe contener su propio archivo `.http` para probar y documentar las llamadas REST.
- **Formato de Respuestas de API**:
  - Toda respuesta de la API debe retornar un JSON con la estructura:

    ```json
    {
      "success": true, // o false en caso de error
      "message": "Mensaje informativo descriptivo",
      "result": null // Datos de la consulta u operación
    }
    ```

  - **Código de Estado HTTP**: Las respuestas exitosas deben usar los códigos HTTP adecuados (200 OK, 201 Created para creaciones). Las respuestas con errores deben usar códigos de error HTTP tradicionales (400 Bad Request para validaciones o errores del cliente, 401 Unauthorized para autenticación, 404 Not Found cuando no se encuentra el recurso, 500 Internal Server Error para fallas en el servidor o base de datos).

## Reglas de Base de Datos
- **Motor**: SQL Server.
- **Nomenclatura de Procedimientos Almacenados**: `sp_IA_<nombre_tabla>_<accion>` (ejemplo: `sp_IA_oficina_CRUD`).
- **Parámetro CRUD**: Para los SP que implementen un CRUD, se debe enviar un parámetro llamado `@crud` tipo `CHAR(1)` con los valores:
  - `'C'` (Create)
  - `'R'` (Read)
  - `'U'` (Update)
  - `'D'` (Delete)

- **Creación de Procedimientos Almacenados**: Cuando se solicite la creación de un procedimiento almacenado, no se debe intentar crear la tabla (ya existe en la base de datos). El agente debe verificar la estructura de la(s) tabla(s) en la base de datos y únicamente retornar el código del procedimiento en el chat para su verificación y ejecución manual por parte del usuario. Los scripts de los procedimientos no deben guardarse en la carpeta `database` del proyecto, ni en ninguna otra carpeta.