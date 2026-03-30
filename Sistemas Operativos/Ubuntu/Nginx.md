El archivo de configuración para dominios está en:
/etc/nginx/sites-available/

Pero los sitios habilitados está en:
/etc/nginx/sites-enabled

Verificar si los cambios están correctos
```bash
nginx -t
```

Reiniciar nginx
```bash
sudo service nginx restart
```