# Prueba técnica JS Dinbeat

Developer: Berenguer Pou

(Tiempo máximo: 120 minutos)
Partiendo del material dado, añade en el archivo “js/main.js” el Código (javascript / ECMAscript) que consideres necesario para conseguir el resultado mostrado más abajo.
Se pide que mediante la API de Star Wars proporcionada, se listen por un lado el total de naves (starships) y por otro se agrupen por clase (starship_class), listando las clases de nave existentes y cuantas hay de cada clase.

Ampliación sobre el requerimento de la prueba: __se realizará la app en React y con TS.__

**Posibles mejoras después del MVP requerido:** 
- añadir más tests unitarios y modularizar el código JSX que devuelve el componente principal app.tsx en subcomponentes: por ejemplo--> StarshipsList y StarshipItem-
- extraer en módulos del tipo utils/helper las funciones que hacen las llamadas a la API swapi.dev. (para mejorar el testeo y potencialmente ampliar/escalar la app)
- realizar las requests a la páginas 2 y siguientes con la web API PromiseAll para lanzar las requests a la API swapi en paralelo y optimizar el tiempo de carga de los resultados.

## Planteamiento del desarrollo:

1. Toma de requirements del cliente descritos más arriba.
2. Inspección de la API swapi.dev:
- Resultados:
- Se observa que existe un endpoint '/api/starships' que nos ofrece el listado de datos que necesitamos para la app.
- Se observa que la API devuelve un listado con paginación de 10 resultados por página.
- La API ofrece una propiedad 'count' con el número total de items 'Starship'.
- La API despliega la paginación de resultados con un procedimento standard que nos ofrece los endpoints 'previous' y 'next' en cada llamada (para los 10 resultados anteriores o posteriores a la current request, respectivamente).
3. Definición del stack que usaré en la app:
- Definiré un proyecto React con TS inicializando la app con la utilidad CRA añadiendo la configuración para Typescript.
- Se incluirán los estilos CSS proporcionados en los estilos globlaes de la app.
4. Puntos básicos del desarrollo / lógica
- Se describirán dos interfaces para los tipos de datos 'Starship' y 'StarShipClass'. 
- Se gestionarán los datos en hooks useState de React para almacenar un array de Starships, del que sólo necesitaré su length para mostrar en la UI el número total de Starships, y otra variable de estado 'starshipClasses' para almacenar los datos principales de clases de tipos de starship y sus cantidades, que también se debarán mostrar dinámicamente en la UI.
- Se implementará dentro de un hook useEffect la gestión asíncrona de la petición de datos a la API.
- Para la obtención de todos los resultados, optaré por llamadas asíncronas en secuencia (para cada página de resultados) mediante la API 'fetch'. Se programará una iteración mediante un loop while hasta que el endpoint 'next' retorne null, lo que nos indicará que no existen más resultados y que el listado ya ha sido obtenido en su totalidad.
- Posteriormente, a partir de los datos almacenados en un array 'starships', se van a almacenar los datos de las clases de naves y las cantidades rellenado el array starshipClasses con objetos del tipo {name, quantity}. Se puede proceder con un forEach y búsqueda de clases de nave ya existentes y acumular, o bien con un reducer sobre el array starships.

A continuación, descripción de los scripts habituales de React para lanzar la aplicación en desarrollo, testear y hacer una build:

**IMPORTANTE**: para lanzar el proyecto en local hay que crear un archivo .env (que he se ha ignorado lógicamente en el repositorio aunque sólo contenga la API URL de swapi.dev) en la root del proyecto con la siguiente var de entorno:
`REACT_APP_STARWARS_API_URL=https://swapi.dev/api/starships`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
