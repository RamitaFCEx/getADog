# GetADog

Creado por Ramiro Meza.
getADog es una plataforma que permite adoptar o dar en adopcion perros de manera rapida y sencilla.

# Seccion Home

El componente gad-home tiene un carrusel que obtiene informacion de un arreglo de objetos precargado, no usa ngFor porque rompia el carrusel de bootstrap.
Tiene un ngIf en caso de que ocurra un error y no se encuentre la informacion del carrusel.

# Seccion Shop

Utiliza tres componentes:
~gad-shop-table.
~gad-carro.
~gad-dog-form.

# gad-shop-table

Utiliza los servicios DogsApiService y CartServiceService.
Imprime en pantalla todos los perros que estan guardados en la API (utilizando un *ngFor y dos *ngIf).

# gad-carro

Muestra todos los perros seleccionados (creado con *ngFor) de la gad-shop-table mediante CartServiceService.
Permite adoptar los perros seleccionados mediante el boton "Adoptar!" (creado con *ngIf), borrando de la API dichos perros mediante DogsApiService.

# gad-dog-form

Crea el formulario que permite añadir perros a la API, utilizando el DogsApiService.

# DogsApiService

DogsApiService: obtiene la informacion de los perros cargados en la API. Borra de la API los perros que fueron seleccionados y adoptados por el usuario. Agrega a la API los perros que son cargados por el gad-dog-form.

# CartServiceService

CartServiceService: agrega al carro los perros que son seleccionados por el usuario. Borra del carro cualquier perro seleccionado cuando el usuario entra en la seccion shop.

