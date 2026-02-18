Eliminar proceso
```bash
pm2 delete mi-api
# O puedes usar el ID: pm2 delete 0
```

Para ver el log de errores
```bash
pm2 logs 0 --lines 50 --err
```

