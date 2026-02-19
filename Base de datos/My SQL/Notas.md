
## Manipular Base de datos
Buscar table por nombre
```mysql
select *
from information_schema.TABLES
where table_name like '%detraccion%'
```

## Manipulación de Tablas
Mira la tabla usuario desde comando
```mysql
DESCRIBE usuario;
```

Agregar una columna después de otra
```mysql
ALTER TABLE venta
ADD COLUMN forma_pago VARCHAR(50) AFTER direccion_id;
```

Modificar una columna
```mysql
alter table venta
MODIFY COLUMN venta_uuid char(36) DEFAULT (UUID()); /*Tipo dato y valor defecto*/
```

Modificar el nombre de una columna
```mysql
ALTER TABLE nombre_tabla 
CHANGE COLUMN nombre_viejo nombre_nuevo NUEVO_TIPO_DE_DATO [Restricciones];
```

Columna autoincremente
```mysql
COLUMN venta_detalle_id INT NOT NULL AUTO_INCREMENT;
```

### Restricciones para la tabla
1. Validar que no se inserten datos duplicados (tipo_comprobante_id, serie, numero)
```mysql
ALTER TABLE venta
ADD CONSTRAINT uk_venta_unica UNIQUE (tipo_comprobante_id, serie, numero);
```


## Procedimientos almacenados

Elimina un procedimiento si es que existe
```mysql
DROP PROCEDURE IF EXISTS sp_venta_guadar;
```

Declarar variable y asignarla
```mysql
DECLARE _numero VARCHAR(8); -- declarar variable

-- asignar valor
SELECT LPAD(numero, 8, '0') 
INTO _numero 
FROM establecimiento_talonario 
WHERE serie = p_serie;

SET _numero = (
	SELECT LPAD(numero, 8, '0') 
	FROM establecimiento_talonario 
	WHERE serie = p_serie -- no termina en ;
);
```


Poder borrar aun que esté relacionada
```bash
SET FOREIGN_KEY_CHECKS = 0; -- deshabilita la seguridad
SET FOREIGN_KEY_CHECKS = 1; -- habilita la seguridad
```