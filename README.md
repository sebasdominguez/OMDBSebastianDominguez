# OMDB

* ATENCIÓN: Desarrollo en construcción. Ya se encuentra funcional, pero faltan algunos features y todo el trabajo de estilos-animaciones.

APP que utiliza la API de [OMDB](http://www.omdbapi.com/). 
Un servicio RESTFULL de películas al estilo [IMDB](http://www.imdb.com/), pero open source!

## Uso

La API usa la misma dirección de la pagina `https://www.omdbapi.com/` pero agrega un _query string_ para hacer una búsqueda en particular.

Este query esta definido en su documentación y tiene varias opciones, por ejemplo:

  * `s`: sirve para hacer un **search** que devuelve un arreglo de películas que pueden matchear con el valor.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&s=batman`

  * `t`: es para buscar por **title** que devuelve un objeto con la información puntual de una película.

    EJ: `https://www.omdbapi.com/?apikey=20dac387&t=batman`

## Alcance

Con la App podemos:

* Buscar películas y listarlas.
* Poder ver todos los detalles de una película en particular.
* Crear Usuarios.
* Logearse con un usuario.

## Techs:

* [Redux](https://redux.js.org/basics)

* [React-Redux](https://github.com/reactjs/react-redux)

* [Sequelize]

* [Postman]

* [Node]