# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

- Para el apartado 7, se ha implementado que solo se obtengan del servidor los datos de la página seleccionada puesto que si el usuario no cambia de página se estarían realizando llamadas innecesarias a servidor y almacenando información que el usuario no va a visualizar en ningún momento si no cambia de página. Con esto reducimos el número de llamadas al servidor y en un momento de concurrencia de usuarios podemos liberar de saturación al servidor.
- Otra posible mejora sería reducir el modelo de datos de las naves que devuelve la llamada para liberar de sobrecarga de información la llamada.
- Se ha realizado una revisión para mejorar el rendimiento de la aplicación y solucionar errores de consistencia de la aplicación a través de la implementación de buenas prácticas de programación.
- Se ha implementado 'trackby strategy' para el ngFor que recorre el listado de las naves, con esta implementación evitamos que el ngFor vuelva a renderizar los items que ya estuviesen visualizándose antes de refrescar la información del listado de naves.
- Se han declarado constantes numéricas para evitar los 'magic numbers' y se ha incluido en el tslint.json la restricción para la revisión de código que marque estos errores.
- Se ha revisado y mejorado la utilización de scopes en funciones, variables y definición de retornos tipados para facilitar la implementación de test y la revisión de posibles bugs.
- Se ha eliminado la carpeta 'presentation' que no era necesaria en este caso práctico y podía dar lugar a equivocación y a la utilización de la carpeta 'share'. De esta manera, el módulo 'auth'y el módulo 'main' pasan a ser hijos directos del módulo 'app'.
- Se han corregido algunos errores en el naming de algunos componentes, así como de las hojas de estilos, para estandarizar todo el naming de los componentes en inglés y la estandarización del sistema de nomenclatura SCSS BEM.
- Se han eliminado constructores vacíos e implementaciones vacías de ngOnInit para la mejora de rendimiento en tiempos de carga de la aplicación.
- Se ha implementado 'pre-loading' a la hora de cargar los módulos de forma 'lazy-load'.
- Se ha añadido la librería 'ngx-translate' para incluir la posibilidad de hacer la web multidioma utilizando el método i18n para modificar el idioma de los textos literales de la aplicación a través de un selector de idioma añadido en la barra superior del componente 'main'.

