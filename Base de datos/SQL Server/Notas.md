# Notas rápidas

## Tracciones en SQL Server
```sql
CREATE PROCEDURE nombre_procedimiento
(
	@parametros
)
AS
BEGIN
	-- Evita mensajes de "X filas afectadas" para mejorar rendimiento
	SET NOCOUNT ON;
	
	BEGIN TRY
		BEGIN TRANSACTION;
		-- Consultas y lógica
		COMMIT TRANSACTION;
		
		-- Retornamos éxito al usuario
		SELECT 1 AS success, 'Operación correcta' AS message;
	END TRY
	BEGIN CATCH
		-- Si hay una transacción abierta, la deshacemos (Rollback)
		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION;
		
		-- Retornamos el error exacto para saber qué pasó (útil para debugging)
		SELECT 0 AS success, ERROR_MESSAGE() AS message;
	END CATCH
END
```

## Evitar que se inserte valor duplicado en una columna
```sql
ALTER TABLE api_key
ADD CONSTRAINT UQ_ApiKey UNIQUE (llave); -- la columna se llama "llave"
```