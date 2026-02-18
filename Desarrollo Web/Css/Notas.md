
Asignar styles cuando un elemento está bloqueado
```css
.btn-mas:disabled{
	//estylos
}
```

Media query 
```css
/* Estilos solo para PC */
@media (min-width: 992px) {
  .tu-clase {
    background-color: blue;
    padding: 20px;
  }
}

/* Estilos solo para MÓVIL */
@media (max-width: 767px) {
	padding: 2px;
}

```