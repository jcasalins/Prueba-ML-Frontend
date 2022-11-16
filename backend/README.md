# Backend

## Informacion

Este servidor es creado con [Node Js](https://nodejs.org/es/), [Express](https://expressjs.com/es/) y [axios](https://axios-http.com/)

## Instalación

```
npm install
```

## Comandos

Para poner en marcha el servidor ejecutamos el comando:

```shell
npm start
```
El servidor queda ejecutandose en el URL [localhost:3000](http://localhost:3000)

Para detectar errores usamos el comando: 

```shell
npm run lint
```

## Endpoints

El servidor posee unicamente dos endpoints que son: 

##### Lista de productos
`/api/items?q=:query`

devuelve los 4 primeros productos de la busqueda, con el siguiente formato :
###### Output
```json
{
    "author": {
        "name": String
        "lastname": String
    },  
    "categories": [String, String, String, ...],  
    "items": [
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
            "free_shipping": Boolean,
            "address": String
        },
        {...},
        {...},
        {...}
    ]
}
```
##### Detalle del producto
`/api/items/:id`

devuelve la informacion del producto con el siguiente formato :
###### Output
```json
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
    },
    "categories": [String, String, String, ...]
}
```

