Después que creas a user app_agencia, le das permiso para que pueda read las tables
```sql
ALTER ROLE db_datareader ADD MEMBER [app_agencia];
```

Permiso para crear procedimientos almacenados
```sql
GRANT CREATE PROCEDURE TO [app_agencia];
GRANT ALTER ON SCHEMA::dbo TO [app_agencia];
```

Permitir ejecutar procedimientos almacenados:
```sql
GRANT EXECUTE TO [app_agencia];
```

Evitar que se inserte valor duplicado en una columna
```sql
ALTER TABLE api_key
ADD CONSTRAINT UQ_ApiKey UNIQUE (llave); -- la columna se llama "llave"
```
