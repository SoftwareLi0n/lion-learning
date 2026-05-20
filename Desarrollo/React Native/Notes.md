Run in android
```bash
ns run android
```

Cuando se modifican recursos nativos
```bash
ns run android --clean

# o

ns clean
ns run android
```

Arquitectura
```
App_Resources: Carpeta de "producto prefinal"
platforms: Carpeta de producto final, se genera a partir de App_Resources
```

Publicación

Propagar el icon and the splash
```bash
ns resources generate icons recursos_base/icon.png

ns resources generate splashes assets/splash.png --background "#FFFFFF"
```