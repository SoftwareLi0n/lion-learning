Para consumir apis con el hppt, se debe importar HttpClientModule en los imports de app.module.ts

didDismiss se ejecuta cuando se cierra el modal, ya sea desde el hardware (botón atras) o desde el software (botón de la app)  
```ts
<ion-modal [isOpen]="modal_filtro" (didDismiss)="modal_filtro = false">
```

## LiveReload
1. Cargamos aplicación para que pueda ser accedido desde otros dispositivos.
```bash
# Inicia tu servidor de desarrollo en tu IP local 
ionic serve --external
```

2. Edita capacitor.config.ts
```ts
const config: CapacitorConfig = { 
	... 
	server: { 
		url: 'http://192.168.1.10:8100', // ⬅️ Tu IP local 
		... 
	}, 
	... 
};
```

3. Sincroniza y ejecuta en tu celular
```bash
npx cap sync android
npx cap run android
```

## Generar apk
```bash
ionic build
npm install @capacitor/android
npx cap add android
npx cap sync android
```