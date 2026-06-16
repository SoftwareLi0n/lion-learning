### Add icons
Propagar el icon and the splash
icon: 1024px * 1024px
splash: 2048px * 2048px

```bash
ns resources generate icons recursos_base/icon.png

ns resources generate splashes recursos_base/splash.png --background "#FFFFFF"
```

### Ajustar the name del package
Se ajusta en el archivo `nativescript.config.ts` 

### Configurate the name of app
D:\projects\projects-lion\mi_recibo_ns\App_Resources\Android\src\main\res\values\strings.xml
```xml
<resources>
    <string name="app_name">Mi recibo</string>
    <string name="title_activity_kimera">Mi recibo</string>
</resources>
```

D:\projects\projects-lion\mi_recibo_ns\App_Resources\iOS\Info.plist
```xml
<key>CFBundleDisplayName</key>
<string>Mi recibo</string>
...
<key>CFBundleName</key>
<string>Mi recibo</string>
```

### Generar el abb
**Aumentamos la versión de la app**
ruta: D:\projects\projects-lion\mi_recibo_ns\App_Resources\Android\app.gradle
```gragle
versionCode 85
versionName "1.85.0"
```

**Limpiamos el proyecto**
```bash
ns clean
```

Execute comando of compilation
```bash
ns build android --release --aab --key-store-path <ruta-a-tu-archivo.jks> --key-store-password "<tu-contraseña>" --key-store-alias "<tu-alias>" --key-store-alias-password "<contraseña-del-alias>"
```

## iOS
### Subir a producción
1. Actualizar versión
   Archivo: ios/App/App/Info.plist
```xml
//Aumentar 1.0.1 (cambios low), 1.1 (new funtion), 2 (change long)
<key>CFBundleShortVersionString</key> 
<string>1.0</string>

// contador
<key>CFBundleVersion</key>
<string>1</string>
```


1. Crear archivo codemagic.yaml