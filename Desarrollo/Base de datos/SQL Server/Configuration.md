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

Create user with permiso de SOLO lectura
```SQL
-- 1. Create Login in the server with password
CREATE LOGIN [mcp_user] WITH PASSWORD=N'TuPasswordSeguro123!', CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF;
GO

-- 2. Create User in the database Bot and grant read permissions Only
USE [Bot];
GO
CREATE USER [mcp_user] FOR LOGIN [mcp_user];
GO
ALTER ROLE [db_datareader] ADD MEMBER [mcp_user];
GO
-- Permiso para que read store procedure
GRANT VIEW DEFINITION TO [mcp_user];
GO
```

Create user with only constrains read (onle store procedure)
```
-- 1. Create the Login
CREATE LOGIN MiRecibo_User WITH PASSWORD = 'password', CHECK_POLICY = ON, CHECK_EXPIRATION = OFF;

-- 2. Create the User in the database específica
USE MiRecibo;
CREATE USER MiRecibo_User FOR LOGIN MiRecibo_User;

-- Instead of db_datareader/db_datawriter:
GRANT EXECUTE TO MiRecibo_User;

-- 4. 🔑 DENEGAR the vista of all the databases
USE master;
DENY VIEW ANY DATABASE TO MiRecibo_User;

ALTER LOGIN MiRecibo_User WITH DEFAULT_DATABASE = MiRecibo;
```