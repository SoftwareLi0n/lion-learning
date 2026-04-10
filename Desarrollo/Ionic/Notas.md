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

## Problema de los CORS
En el archivo de capacitor.config.ts agregar CapacitorHttp, convierte las peticiones del webview en nativas.
```ts
	plugins: {
        CapacitorHttp: {
            enabled: true
        }
    }
```
## Generar apk
```bash
ionic build
npm install @capacitor/android
npx cap add android
npx cap sync android
```

## Build para iOS
```bash
ionic build
npm install @capacitor/ios
npx cap add ios
```

### Conseguir certificado
* El certificado se puede reutilizar
* El Identifiers & Profiles deben ser únicos por app

Datos de Identifiers
* Description: Nombre descriptivo (Mi Recibo)
* Bundle ID: appId del archivo capacitor.config (com.softwarelion.mirecibo)

Datos:
Distribution: App Store Connect
Provisioning Profile Name: (Perfil Mi Recibo)

### Crear App - App Store
* SKU: Codigo interno (MiRecibo)
  
### Generar build - AppFlow
* Name: Nombre descriptivo
* Apple ID: Correo de tu cuenta dev
* App-specific password: Es la contraseñas de aplicación
  https://account.apple.com/account/manage
* App Apple ID: Es el "ID de Apple" de la aplicación, lo encuentras en "Información de la app"

### Subir actualización
* Cambiar de versión a la app y al build
Archivo: ios/App/App/Info.plist
```xml
//La Versión Pública
<key>CFBundleShortVersionString</key> 
<string>1.0</string>

// Nro build: Este es que no se puede subir igual
<key>CFBundleVersion</key>
<string>1</string>
```