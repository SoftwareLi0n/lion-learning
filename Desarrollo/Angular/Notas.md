Apuntes de códigos importantes en Angular
### Notas importantes
* Si trabajas con módulos, y al abrir un componente hijo desde un modal, cuando se abre se omite el *`hijo.module.ts`*, pero si necesitas *`hijo.module.ts`* debes colocarlo en los imports del module del padre.

### Parámetros por URL
```typescript
// en la configuración de las rutas
{
	path: 'details/:id',
	loadChildren: () => import('./page/details.module').then(m => m.PageModule)
}


// Envío de parámetros
this.router.navigate([`/details/${id}`]);


// RECEPCIÓN DE PARÁMETRO
// Constructor
private route: ActivatedRoute

// ngOnInit
const id = this.route.snapshot.paramMap.get('id');
```

### Recibir parametros (modal componente)
```typescript
@Inject(MAT_DIALOG_DATA) public data: any // esto agregar en el constructor
```

### Parámetros de consulta
```ts
filtrarLista() { 
	this.router.navigate(['/proveedores'], { 
		queryParams: { categoria: 'agua', orden: 'ascendente' } 
	}); 
}

ngOnInit() { 
	// Nota que aquí usamos queryParamMap en lugar de paramMap 
	const categoria = this.route.snapshot.queryParamMap.get('categoria'); // "agua" 
}
```

### Componentes
* Los componentes hijos, no deben hacer llamadas a la base de datos (apis)
* 
```ts
// va el el componente hijo
// si el padre cambia una variable, se cambia en el hijo
ngOnChanges(){}
```