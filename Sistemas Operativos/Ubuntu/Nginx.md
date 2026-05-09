El archivo de configuración para dominios está en:
```md
/etc/nginx/sites-available/`
```

Pero los sitios habilitados está en:
```txt
/etc/nginx/sites-enabled
```

Verificar si los cambios están correctos
```bash
nginx -t
```

```bash
sudo ln -s /etc/nginx/sites-available/lionapi.softwarelion.pe /etc/nginx/sites-enabled/lionapi.softwarelion.pe
```

```bash
sudo certbot --nginx -d lionapi.softwarelion.pe
```

Reiniciar nginx
```bash
sudo service nginx restart
```

Ver las ultimas 10 peticiones en vivo a mi servidor
```bash
sudo tail -f /var/log/nginx/access.log
```