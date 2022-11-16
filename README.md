## Desafío:
La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

Tenés que usar el siguiente stack tecnológico para construir la aplicación:

- **Cliente:**
  - HTML 
  - JS (Deseable utilizar React o Backbone)
  - CSS (Deseable utilizar Sass)
- **Servidor:**
  - Node >= 6
  - Express

### Para resolverlo, te pedimos que tengas en cuenta:

- [x] Usabilidad
- [x] SEO
- [x] Performance
- [x] Escalabilidad

### Te pedimos:

En base a los diseños dados, construir las siguientes tres vistas:

1. Caja de búsqueda
2. Resultados de la búsqueda
3. Detalle del producto

Las vistas son navegables de manera independiente y cuentan con su propia url:

1. Caja de Búsqueda: ​`/`
2. Resultados de la búsqueda: `/items?search=`
3. Detalle del producto: `/items/:id`

Construir los siguientes endpoints para ser utilizados desde las vistas:

`/api/items?q=​:query`

Debe consultar el siguiente endpoint: 
https://api.mercadolibre.com/sites/MLA/search?q=​:query

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String
        "lastname": String
    },  
    categories: [String, String, String, ...],  
    items: [
        {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean
        },
        {...},
        {...},
        {...}
    ]
}
````

`/api/items/​:id`

Debe consultar los siguientes endpoints:

1. https://api.mercadolibre.com/items/​:id
2. https://api.mercadolibre.com/items/​:id​/description

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String,
        "lastname": String
    },
    "item": {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity": Number,
        "description": String
    }
}
````

### Descripción funcional de la aplicación

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego, al hacer clic sobre uno de ellos, debería navegar a la vista de Detalle de Producto.
- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.