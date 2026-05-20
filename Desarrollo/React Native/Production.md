### Add icons
Propagar el icon and the splash
icon: 1024px * 1024px
splash: 2048px * 2048px

```bash
ns resources generate icons recursos_base/icon.png

ns resources generate splashes assets/splash.png --background "#FFFFFF"
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

