# MeanStack Proyect - Game Haven

Este es un proyecto MeanStack ya que estamos usando framewords como Angular y Express, aparte tambien usamos servicios como Mongo Atlas y Nodejs, para poder hacer un proyecto totalmente completo, pero en este repositorio solo encontraremos la parte del Frontend, en la cual estamos haciendo uso de la creacion de componentes, servicios, intefaces y Guards, se manejo una fuerte logica para que el proyecto este en optimas condiciones para que el usuario no tenga problemas al visitar nuestro sitio, aparte se manejo estilos llamativos y para los que quieran ver o esten interesados en nuestro codigo esta totalemente organizado y ni tiene pierde.

## Requisitos De Inicio Del Proyecto

-  Tener el cli de Angular
-  Iniciar el proyecto Angular
-  Tener un Backend funcional, con una variedad de endpoints
-  Se hizo uso de Bootstrap
   -  Se lo puede implementar de dos maneras:
      -  En el archivo index poner el link y el script que nos ofrecen en la documentacion.
      -  Instalarlo como una libreria y agregar lineas en el archivo angular.json
-  Uso de componentes
-  Uso de servicios
-  Tener en claro el comando ng serve.

## Proceso

1. Crear un repositorio en GitHub y enlazarlo con el repositorio local en el que estamos trabajando.
2. Iniciar un proyecto Angular con el comando `npm new` + `nombre de la carpeta` donde va a estar alojado todo nuestro proyecto.
3. Instala las dependencias con el comando `npm install` mas el nombre de la dependencia.
4. El anterior paso se lo hace porque se crea un archivo `.gitignore` automatico y no sube las librerias.
5. Siempre se trabaja en la carpeta `Src` rara vez se hace algun cambio afuera de esta carpeta.
6. En `Src` encontraremos archivos y carpetas como:
   -  index.html
   -  main.ts
   -  styles.css
   -  app - Carpeta
   -  assets - Carpeta
7. En index y en main no se hacen muchos cambios, en css podemos poner estilos que se podran usar global, en app tendremos en conjunto la mayoria de nuestro trabajo y en assets podemos poner toda la multimedia que queremos usar.
8. Comenzaremos a crear nuestros componentes con el comando `ng generate component` o con el mas corto `ng g c`, podremos agregar el nombre de la carpeta components y se parado con un backslash el nombre del componente para asi poder llevar un orden.
9. Los servicios que vamos a utilizar de igual manera que los componentes tenemos que utilizar un comando `ng generate service` o mas corto `ng g s`.
10.   los comandos para las interfaces es `ng generate interface` o `ng g i`.
11.   Por ultimo el comando para los guards es `ng generate guard` o `ng g g`.
12.   Teniendo esto en cuenta podemos empezar a maquetar nuestro proyecto Angular.

## Componentes y enrutamiento

1. Los componentes estan estructurados de la siguiente manera:

   -  Html
   -  Css
   -  Ts

2. Para componentes como Header, Nav y Footer podemos importar su archivo ts en el archivo app.component.ts, para poder usar una etiqueta y que esos componentes sean visibles en todos los demas componentes.

3. para los demas componentes tenemos un archivo app.routes.ts que es nuestro archivo principal para hacer que se pueda navegar en nuestros componentes a traves de un router, ahi se importa cada archivo ts de cada componente, se le da un path para poder darle una ruta, se le puede dar un titulo y se puede hacer un resguardo de la ruta a traves de un guard.

## Servicios

Los servicios son los que nos ayudaran a hacer peticiones a nuestro Backend, aqui podemos hacer logica de lo que queremos traer de nuestro backend o lo que queremos enviar.

## Importaciones

Las importaciones se pueden manejar de diferente manera, haciendolo de manera un poco ams global en el archivo app.component.ts o se puede hacer en cada uno de los archivos ts de cada componente.

Que podemos importar:

-  Nuestros Componentes
-  Nuestros Servicios
-  Propiedades de Angular
-  Propiedades de librerias externas

## Estructura de la carpeta Src

-  index.html
-  main.ts
-  styles.css
-  facivon.ico
-  assets - Carpeta
   -  multimedia - Carpeta
   -  .gitkeep
-  app - Carpeta
   -  app.routes.ts
   -  app.config.ts
   -  app.component.ts
   -  app.component.html
   -  app.component.css
   -  services - Carpeta
   -  interfaces - Carpeta
   -  guards - Carpeta
   -  Components - Carpeta

## Contenido Components

1. community
2. explore
3. footer
4. game-store
5. home
6. login
7. nav
8. not-found
9. shopcar
10.   sing-up
11.   support
12.   trailers

## Contenido services

1. favicon
2. library
3. login
4. post
5. register
6. shopcar
7. store
8. support

## Contacto

-  Autores:

   -  Andres Rangel Peña
   -  Naomy Restrepo

-  GitHub
   -  https://github.com/andrespeco0987?tab=repositories
   -  https://github.com/Naomy97?tab=repositories
