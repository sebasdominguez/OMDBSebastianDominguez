# SD MOVIE FINDER

APP que utiliza la API de [OMDB](http://www.omdbapi.com/). 
Un servicio RESTFULL de películas al estilo [IMDB](http://www.imdb.com/), pero open source!

## Uso

La API usa la misma dirección de la pagina `https://www.omdbapi.com/` pero agrega _query string_ para hacer búsquedas en particular.

## Alcance

Con la App podemos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.
* Crear Usuarios.
* Logearse con un usuario.
* Agregar Series y Películas a Favoritos
* Buscar otros usuarios


## Techs:

* [Redux](https://redux.js.org/basics)

* [React-Redux](https://github.com/reactjs/react-redux)

* Sequelize

* Postman

* NodeJs

* React-Bootstrap

* Docker


### Start Point

* Forkeá y cloná este repo.
* Abrí 2 pestañas en la Terminal.
* Para simplificar el proceso, se encuentra Dockerizado.
* Asegurate de tener Docker corriendo en tu ordenador y en la terminar posicionado sobre el root, ejecuta `docker-compose build`. Vé por un café y volvé en 5 minutos...
* Finalizado el paso anterior, ejecutá `docker-compose up`.
* La app te espera en el browser: http://localhost:3000/


### Consideraciones Final

* Estilo: si bien no es de mi total agrado utilizar react-bootstrap, para proyectos sin participación de expertos en ux/ui/desing, es decir de libre diseño a cargo del desarrollador, creo que es una salida viable. Caso contrario, hubiese implementado styled-components para trabajar una réplica exacta de un diseño a perseguir.

* Componentes Funcionales vs. Componentes de Clase: existe un mix de ambos, simplemente para dejar registradas ambas posibilidades. Pude haber escito todo el código con los componentes funcionales y sus hooks respectivos.


