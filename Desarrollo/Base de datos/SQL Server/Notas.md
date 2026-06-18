# Notas rápidas

## Procedimientos almacenados
### Tracciones en SQL Server
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

### Obtenemos el último id registrado
```sql
SCOPE_IDENTITY();
```


### Curiosidades
Puedo saber el nuevo valor que tendrá @saldo_actual
```sql
declare @saldo_actual decimal(18, 2);

update oficina
set 
	@saldo_actual = dinero_caja = isnull(dinero_caja, 0) + @total
where id_oficina = @id_oficina_operacion;
```
## Agregar columna a una tabla

1. Agregar columna
```sql
ALTER TABLE planes 
ADD notificado BIT;
```

2. Eliminar columna
```sql
alter table planes 
drop column notificado;
```