Eliminar contenedor
```bash
sudo docker rm -f servidor-sql
```

Monitorear tus contenedores
```bash
sudo docker stats servidor-sql
```

Mover archivos de la pc a un contenedor
```bash
sudo docker cp tu_base.bak servidor-sql:/var/opt/mssql/tu_base.bak
```

Ejecutar scrips en el contenedor
```bash
sudo docker exec servidor-sql bash -c "rm /var/opt/mssql/*.bak"
```