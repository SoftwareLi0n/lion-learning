Después que creas a user app_agencia, le das permiso para que pueda read las tables
```sql
ALTER ROLE db_datareader ADD MEMBER [app_agencia];
```

Permiso para crear procedimientos almacenados
```sql
GRANT CREATE PROCEDURE TO [app_agencia];
GRANT ALTER ON SCHEMA::dbo TO [app_agencia];
```