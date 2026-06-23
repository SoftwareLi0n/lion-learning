# Reglas del Frontend (Angular)

> **IMPORTANTE**: Estas reglas son específicas del proyecto frontend Angular. Las reglas generales de código (indentación, interfaces, gestor de paquetes, etc.) se encuentran en `rules/general/AGENTS.md` y también son de cumplimiento obligatorio.

---

## 1. Contexto del Proyecto

- **Framework**: Angular
- **Arquitectura**: Modular, organizada por características/funcionalidades (feature-based).

---

## 2. Modularidad de Vistas

Al crear vistas o páginas, se deben cumplir **obligatoriamente** los siguientes principios:

| Regla | Descripción |
|-------|-------------|
| **No monolitos** | Nunca colocar todo el código de una página en un solo archivo. |
| **División por responsabilidad** | Separar la vista principal en sub-elementos pequeños y manejables. |
| **Carpeta `components/`** | Si los elementos secundarios son exclusivos de esa vista (no reutilizables), crear una carpeta `components/` dentro del directorio de la vista padre. |
| **Aislamiento de archivos** | Cada sub-elemento debe tener su propio archivo `.ts`, `.html` y `.css`/`.scss`. |

```
✅ Correcto:
   transferencias-recibidas/
   ├── transferencias-recibidas.component.ts
   ├── transferencias-recibidas.component.html
   ├── transferencias-recibidas.component.css
   └── components/
       ├── detalle-transferencia/
       │   ├── detalle-transferencia.component.ts
       │   ├── detalle-transferencia.component.html
       │   └── detalle-transferencia.component.css

❌ Incorrecto:
   transferencias-recibidas/
   ├── transferencias-recibidas.component.ts  ← todo el código aquí (monolito)
```

---

## 3. Consumo de APIs

- **Mostrar errores al usuario**: Cuando una llamada a la API falle, se debe capturar el mensaje de error que retorna la API y mostrarlo al usuario de forma visible (por ejemplo, con un snackbar o alerta).
- **No silenciar errores**: Nunca usar `catch` vacíos ni ignorar respuestas de error.

---

## 4. Estilos CSS

| Alcance | Archivo | Uso permitido |
|---------|---------|---------------|
| **Global** | `styles.css` | Solo estilos generales de la aplicación y clases reutilizadas en múltiples componentes. |
| **Componente** | `nombre-componente.component.css` | Estilos y clases específicas de ese componente. |

- **Prohibido**: Agregar estilos específicos de un componente en `styles.css`.

---

## 5. Angular Material

- **Modales**: Utilizar `MatDialog` para ventanas modales.
- **Tablas**: Utilizar `MatTable` para la visualización de datos tabulares.
- Siempre preferir componentes de Angular Material cuando exista uno que cubra la necesidad.