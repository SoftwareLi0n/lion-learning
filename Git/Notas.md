Elimina todos los archivos nuevos que están en rojo.
```bash
git clean -f
```

La próxima vez que se ingresa las credenciales se guardan
```bash
git config --global credential.helper store
```

Crea una rama limpia sin historial de commit
```bash
git checkout --orphan nueva-main
```

Renombrar una rama (nuevo nombre main)
```bash
git branch -m main
```