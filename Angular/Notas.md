Apuntes de códigos importantes en Angular

1. Parámetros por URL
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

