1. Para que puedas usar los import en el package.json debes:
```json
"type": "module",
```

2. Comando que refresca el proyecto cuando hay cambios nuevos 
*(sin necesidad de instalar otro paquete)*
```bash
node --watch ./server/index.js
```