## -----------------------

## Endpoints de productos:

## -----------------------

GET /api/products
pasar como parámetros las siguientes opciones:

- [x] limit
- [x] page
- [ ] query ------ !!!!! no pude hacer funcionar el filtro como parámetro ¡¡¡¡¡
- [x] sort

## -----------------------

## Endpoints del carrito:

## -----------------------

DELETE api/carts/:cid/products/:pid

- [x] Elimina del carrito el producto indicado

PUT api/carts/:cid

- [x] Actualiza el carrito con un arreglo enviado en req.body

PUT api/carts/:cid/products/:pid

- [x] Actualiza cantidad de acuerdo a la cantidad enviada en req.body

DELETE api/carts/:cid

- [x] Elimina todos los productos del carrito

GET api/carts/:cid

- [x] Debe traer toda la info de los productos (usar populate)

## -----------------------

## VISTAS:

## -----------------------

GET/products

- [x] Debe traer todos los productos con paginación
- [x] Debe tener un botón para agregar al carrito ------ !!!!! no pude hacer que no se redirija la página cuando se agrega el producto al carrito ¡¡¡¡¡

GET /carts/:cid ------ !!!!! el id del carrito fue hard-codeado ya que no supe cómo obtenerlo de la sesión ¡¡¡¡¡

- [x] Listar solo los producto del carrito indicado
