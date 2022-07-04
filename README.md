# Challenge de Mercado Libre

La presente entrega corresponde al Challenge de Mercado Libre y cómo he resuelto la misma:

- [Challenge de Mercado Libre](#challenge-de-mercado-libre)
  - [Inicio](#inicio)
    - [Ejemplo del deploy](#ejemplo-del-deploy)
    - [Prueba local](#prueba-local)
    - [Prueba con docker](#prueba-con-docker)
  - [Arquitectura](#arquitectura)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Comunicación](#comunicación)
    - [API REST del Backend](#api-rest-del-backend)
  - [Principios orientadores pedidos](#principios-orientadores-pedidos)
    - [Usabilidad](#usabilidad)
      - [Responsive](#responsive)
      - [Navegabilidad](#navegabilidad)
      - [Accesibildad](#accesibildad)
      - [Experiencia del usuario](#experiencia-del-usuario)
    - [SEO](#seo)
      - [Robots](#robots)
      - [HTML semántico](#html-semántico)
      - [Open Graph](#open-graph)
        - [Internacionalización](#internacionalización)
    - [Performance](#performance)
      - [SSR](#ssr)
    - [Escalabilidad](#escalabilidad)
      - [Microservicios](#microservicios)
      - [Contenedores como recursos interconectables](#contenedores-como-recursos-interconectables)
      - [Comandos para CI/CD](#comandos-para-cicd)
      - [Configurables por entorno](#configurables-por-entorno)
      - [Portabilidad](#portabilidad)
      - [Logs](#logs)
    - [Tests unitarios](#tests-unitarios)
      - [Backend](#backend-1)
      - [Frontend](#frontend-1)
    - [Tests End To End](#tests-end-to-end)
  - [Otros principios seguidos](#otros-principios-seguidos)
    - [Calidad del código](#calidad-del-código)
      - [Clean code](#clean-code)
      - [Linting y estilos](#linting-y-estilos)
      - [Control de errores](#control-de-errores)
    - [Seguridad informática](#seguridad-informática)
      - [General](#general)
      - [SSL](#ssl)
      - [Cabeceras HTTP](#cabeceras-http)
  - [Posibles pasos a seguir:](#posibles-pasos-a-seguir)

## Inicio

### Ejemplo del deploy

Es posible ver el deploy de estos dos servicios en:

Español: [https://matiaspuig-challenge.com.ar](https://matiaspuig-challenge.com.ar)

Inglés: [https://matiaspuig-challenge.com.ar/en](https://matiaspuig-challenge.com.ar/en)

### Prueba local

Para probarlos localmente en entorno de desarrollo utilizar:

```bash
npm run install && npm run dev
```

Ambos están con la configuración de development por defecto. El backend levantará en el puerto 8080 y el frontend en el puerto 3000.
(No tuve tiempo de configurar algo como Lerna o workspaces).

Para utilizarlos en entorno de producción, configurar el archivo de entorno de producción (omitido en el repositorio, pero hay un "sample" en cada uno) y utilizar:

```bash
npm run install && npm run build && npm run start
```

### Prueba con docker

La configuración de ejemplo exportará a la versión en español en localhost:3000 y la versión en inglés en localhost:3001/en.

```bash
docker-compose up
```

## Arquitectura

![arquitectura](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/arquitectura.png?raw=true)

### Frontend

- React con Typescript en NextJS, utilizando SSR.
- SASS con CSS modularizado.
- Tests unitarios con jest.
- Tests E2E con cypress.

### Backend

- NodeJS con Typescript, utilizando express.
- Exposición de una API REST.
- No utiliza base de datos porque no hizo falta un estado.

### Comunicación

El usuario solo puede comunicarse con el frontend. El backend no debería tener un puerto expuesto fuera de la red local, y su único consumo debería ser hecho por el frontend (y comparten una API KEY para tal fin).

### API REST del Backend

Aunque la idea es que el backend no sea expuesto y solo sea consumido por el front, a fines de prueba se expuso en el servidor a la API como:

[https://matiaspuig-challenge.com.ar/api](https://matiaspuig-challenge.com.ar/api)

Se adjunto en la carpeta ["docs"](/docs) la colección de postman para importar y testear la misma.

**Nota**:

Se hicieron algunas modificaciones a la API para poder coincidir con los pedidos del frontend (por ejemplo, no devolver las categorías con formato String[], ya que si no, no es posible hacer los breadcrumbs). Se agregaron también los parámetros limit y offset en la búsqueda.

## Principios orientadores pedidos

### Usabilidad

#### Responsive

El challenge fue hecho de manera responsive, para que se adapte a todos los tamaños de dispositivo (utilizando el principio **mobile first**). Se probó que se adapte a todos los tamaños de dispositivo que ofrece Chrome DevTools.

#### Navegabilidad

El challenge fue probado sin utilizar el mouse, únicamente con el teclado utilizando la tabulación.

#### Accesibildad

El challenge fue probado con la aplicación mobile TalkBack de Android (no cuento con otras como VoiceOver o JAWS, por lo que no se probó en las mismas). Es posible utilizar y recorrer la aplicación sin mirar el dispositivo.

![lighthouse](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/lighthouse.png?raw=true)

**Nota:**

- La puntuación "Performance" varía según el estado de la red.
- En la vista de la aplicación del ítem específico, "Best practices" baja porque el componente del carrusel tiene una imagen oculta de 1x1...
- Para lograr una buena puntuación de "accessibilidad", se debió modificar la paleta de colores dada en los archivos de diseño, ya que estos entre sí no tenían suficiente contraste y podían perjudicar a una persona con problemas visuales. También se utilizaron los tags ARIA para diferenciar la funcionalidad de los lectores de ayuda visual (por ejemplo, para saltear el carrusel o para que en la descripción del precio diga "Pesos" en vez de "dólares".).

#### Experiencia del usuario

Para facilitar la navegación, se agregaron detalles al funcionamiento para hacerlo más user friendly. Por ejemplo, las URLs agregan un query param cuya única función es ser descripción:

[https://matiaspuig-challenge.com.ar/items/MLA1144571176?description=Alimento-Agility-Premium-Para-Gato-Adulto-Sabor-Mix-En-Bolsa-De-10-kg](https://matiaspuig-challenge.com.ar/items/MLA1144571176?description=Alimento-Agility-Premium-Para-Gato-Adulto-Sabor-Mix-En-Bolsa-De-10-kg)

Solo el id importa para obtener el resultado. Una posible mejora a futuro sería que la URL tuviera el formato "/[id]-[descripcion]" en vez de "/[id]?descripcion=[descripcion]". Esto también mejoraría la experiencia de los lectores de pantalla, al dar una URL con sentido en vez de solo un ID de MercadoLibre.

**Nota:**
La propuesta del challenge de hacer los breadcrumbs de los resultados de búsqueda a partir de la cantidad de resultados por categoría disponible genera experiencias raras. Por ejemplo, al buscar "moja", aparece como categoría "Ropa y accesorios", pero el primer resultado es una cerveza.

### SEO

#### Robots

Todas las páginas tienen indexación para el seguimiento de los robots. Las únicas que cuentan con un norobots y nofollow son las correspondientes a errores (404, 500, etc.).

#### HTML semántico

Para lograr este punto, se asignó, a cada elemento del HTML con un significado, una etiqueta correspondiente (se han utilizado los tags header, main, footer, nav, article, picture, etc.).

#### Open Graph

Se han colocado las cabeceras de Open Graph correspondientes para tener las diferentes previews de los microbrowsers.

Por ejemplo, el link [https://matiaspuig-challenge.com.ar/items/MLA1135447143?description=Alimento+Pedigree+Optima+Digestion+Etapa+2+Para+Perro+Adulto+Todos+Los+Tamanos+Sabor+Carne+Y+Vegetales+En+Bolsa+De+21+kg](https://matiaspuig-challenge.com.ar/items/MLA1135447143?description=Alimento+Pedigree+Optima+Digestion+Etapa+2+Para+Perro+Adulto+Todos+Los+Tamanos+Sabor+Carne+Y+Vegetales+En+Bolsa+De+21+kg) genera estos previews en Whatsapp y Telegram:

![SEO](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/seo1.jpeg?raw=true)

![SEO](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/seo2.jpeg?raw=true)

Otros resultados fueron chequeados con la aplicación web: [dnschecker](https://dnschecker.org/open-graph-preview-generate-metatags.php).

**Nota**: No probar con Whatsapp web, ya que el mismo no se encuentra funcionando correctamente para generar thumbnails.

##### Internacionalización

Si bien es posible con i18next hacer a la aplicación traducible según el dispositivo del cliente (obteniendo el idioma de los HTTP headers, del navegador, guardarlo en local storage, etc.), se decidió hacerlo a través de la URL para facilitar el SEO (por ejemplo, lang.pagina.com, o pagina.com/lang). El idioma se selecciona en el build time, de modo que debe ser asignado a través de variable de entorno en build time.

### Performance

#### SSR

Para mejor performance, se optó por side rendering con páginas estáticas precompiladas. Las dinámicas las genera el servidor según el request (a partir del getServerSideProps de NextJS). Los tiempos que afectan a la performance son principalmente los ocurridos entre el cliente y el servidor, y entre el servidor y el consumo de la API de MercadoLibre (se paralelizaron en el backend las consultas posibles para acelerar el tiempo de carga).

![lighthouse](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/lighthouse.png?raw=true)

### Escalabilidad

#### Microservicios

#### Contenedores como recursos interconectables

Tanto backend como frontend fueron planteados como microservicios. En el repositorio se encuentra el ejemplo para un deploy utilizando docker-compose. En el ejemplo, se deploya dos veces el frontend, una vez en español y otra en inglés, para ejemplificar la idea de contenedores interconectados a través de parametrización.

La paralelización conseguida permite escalar horizontalmente, ya que se pueden deployar varias instancias en paralelo y ponerlas detrás de un balanceador de carga.

#### Comandos para CI/CD

Se colocaron los comandos necesarios para administrar en una pipeline de CI/CD en ambos repositorios:

- **npm run lint**: aplica el linter al código para asegurar las buenas prácticas.
- **npm run format**: formatea la aplicación utilizando prettier.
- **npm run test_unit**: ejecuta los tests unitarios.
- **npm run test_e2e**: solo en front, ejecuta los tests e2e.
- **npm run build**: construye la aplicación para su ejecución.
- **npm run start**: inicia la aplicación.

El comando build también lintea y controla que no haya vulnerabilidades en los paquetes de npm.

#### Configurables por entorno

Se permitió configurar a ambos microservicios a partir de variables de entorno: qué versión de node utilizan, en qué puerto escuchan, el nivel de logs, la API KEY para comunicarse, etc. En el caso del frontend, permite agregar en qué URL escucha y en qué idioma está.

**Importante**:

En el caso del frontend, debido al precompliado que ocurre para optimizar la performance, algunas variables deben estar al momento de **construir** la imagen, y no al momento de correrla.
Si bien de esto se ocuparía la pipeline que se decida en DevOps, en el presente caso se resolvió con ARGs en docker:

```yml
frontend:
  container_name: frontend
  depends_on:
    - backend
  restart: unless-stopped
  build:
    context: ./frontend
    dockerfile: Dockerfile
    args:
      - NODE_VERSION=18-alpine
      - FRONTEND_URL=https://localhost:3000
      - LANGUAGE=es
      - LOGS_LEVEL=silly
      - BACKEND_BASE_URL=http://backend:8080
      - BACKEND_API_KEY=unsafe_api_key
```

Y son metidas en el dockerfile al momento de construcción:

```dockerfile
# Install the packages, copy the source code and compile it.
USER node
RUN npm install
COPY --chown=node:node . .

# Add environment variables before building.
ARG FRONTEND_URL
ARG LANGUAGE
ARG LOGS_LEVEL silly
ARG BACKEND_BASE_URL
ARG BACKEND_API_KEY
RUN echo "NEXT_PUBLIC_FRONTEND_BASE_URL=${FRONTEND_URL}" >> /home/node/app/.env \
    && echo "NEXT_PUBLIC_LANGUAGE=${LANGUAGE}" >> /home/node/app/.env \
    && echo "LOGS_LEVEL=${LOGS_LEVEL}" >> /home/node/app/.env \
    && echo "BACKEND_BASE_URL=${BACKEND_BASE_URL}" >> /home/node/app/.env \
    && echo "BACKEND_API_KEY=${BACKEND_API_KEY}" >> /home/node/app/.env \
    && echo ".env file for build time generated with docker arg_builds FRONTEND_URL, LANGUAGE, LOGS_LEVEL, BACKEND_BASE_URL y BACKEND_API_KEY"
RUN npm run next_build
```

#### Portabilidad

Los microservicios fueron pensados de manera portable. El frontend para serlo necesita saber su ubicación (dada por variable de entorno) dado que NextJS no funciona correctamente en un subpath para servir contenidos estáticos. Se deployó en inglés en el subpath "/en" para ejemplificar el correcto funcionamiento en ubicaciones diferentes.

#### Logs

Se platenó a ambos microservicios exponiendo sus logs en el mismo formato, dando información relevante como nombre de la aplicación, versión, entorno, etiqueta, timestamp, entre otras. La uniformidad facilitaría el mantenimiento y la escalabilidad al permitir utilizar más fácilmente herramientas como Logstash, ElasticSearch y Kibana.

### Tests unitarios

#### Backend

Los mismos fueron realizados utilizando Jest. Se mockeó el resultado de axios para el consumo de la API y se realizaron tests unitarios de las funcionalidades principales. (Se hizo un abordaje más sencillo dado que me pidieron ver más mis posibilidades en frontend).

#### Frontend

Los mismos se realizaron utilizando Jest.

Se priorizó el sentido y la calidad del test (que renderice y presente las partes más importantes, además de no presentar cambios en el pasado –con snapshots–), antes que la cantidad.

Se utilizó una estrategia bottom->top. Se realizó el testeo de un correcto renderizado de los componentes de más bajo nivel, y se "subió" hasta llegar a las capas más altas. A cada componente hijo se le asignò un "data-testid", y en el componente padre se verificó el renderizado solo con la presencia de este.

Parte del coverage alcanzado de tests unitarios en frontend:
![unit](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/unit.png?raw=true)

### Tests End To End

Los mismos fueron realizados en el frontend utilizando la herramienta Cypress. Se testearon los casos de uso principales (búsqueda, navegación y botón de compra).

Se utlizó como principio de testeo la accesibilidad de la página (buscar HTML semántico y ubicación, o botones o inputs a partir de su nombre), y no los tags. Los data-testid fueron evitados para el testeo E2E.

![e2e](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/e2e.png?raw=true)

**Importante**: Recordar que para probar los tests punta a punta es importante tener levantadas las instancias de front y back (o cambiarle la baseUrl en la configuración de cypress).

## Otros principios seguidos

### Calidad del código

#### Clean code

En todos los casos, se trató de seguir las propuestas de Clean Code para el código: funciones atómicas; poco nivel de anidación; modularización; variables, constantes y métodos con nombres semánticos; costumbres de la comunidad como el uso de camel case, etc.

El estilo del código elegido es funcional, y se han colocado los comentarios a las funciones y constantes exportadas a modo de documentación.

#### Linting y estilos

Se utilizó para ambos microservicios las herramientas prettier y eslint, con la configuración sugerida por AirBNB para [javascript](https://github.com/airbnb/javascript) y [React](https://airbnb.io/javascript/react/). En el caso del frontend, también se utilizó stylelint para el estilo de CSS.

#### Control de errores

EL backend utiliza nombres para los diferentes tipos de errores posibles (ítem inexistente, parámetros inválidos, etc.) cmo (API_INVALID_PARAMS, MERCADOLIBRE_ITEM_NOT_FOUND, etc.).

El frontend, en caso de tener error, devuelve al usuario la página personalizada de error 500 y loguea el mismo en el lado server con el mismo formato que el backend.

### Seguridad informática

#### General

EL challenge no tiene tantos frentes para ser vulnerable en seguridad informática (por ejemplo, no sería susceptible de SQL Injection, ataques CSRF, session riding, autenticación indebida, ataques a través de la API REST, etc.).

Se decidió pasar el control de muchas cuestiones de seguridad informática a la capa superior: cabeceras HTTP, forzar el uso de SSL, protección contra DOS, slowloris, etc. Se consideró que configurar las mismas en el microservicio, siendo que puede estar protegido por otra capa, genera confusión en la configuración (pro ejemplo, cabeceras HTTP repetidas, o un apache que no pide SSL pero un microservicio que sí). En este caso, la configuración del servidor deployado se encuentra en la carpeta [nginx.conf](/docs/nginx.conf)

Sí se ha colocado en el backend, a modo de ejemplo, una protección contra consultas repetidas (en algunos casos, es correcto que el microservicio decida cuándo fallar).

#### SSL

Se probó que la aplicación funciona correctamente utilizando SSL. La misma en el ejemplo deployado fue preparada para puntuar A+ en SSL Labs:

[https://www.ssllabs.com/ssltest/analyze.html?d=www.matiaspuig-challenge.com.ar](https://www.ssllabs.com/ssltest/analyze.html?d=www.matiaspuig-challenge.com.ar)

![ssl](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/ssl.png?raw=true)

Se verificó que la aplicación no tuviera fallas por servir contenido seguro y no seguro a la vez.

#### Cabeceras HTTP

La aplicación de ejemplo dr deployó puntuando como B+ en el observatorio de mozilla:
[https://observatory.mozilla.org/analyze/matiaspuig-challenge.com.ar](https://observatory.mozilla.org/analyze/matiaspuig-challenge.com.ar)

![headers](https://github.com/matipuig/challenge-mercadolibre/blob/main/docs/imgs/headers.png?raw=true)

Se consideró improtante verificar que la misma funciona detrás de una correcta configuración (que no haya errores de contenido de iframe, por ejemplo.).

**Importante**:

En este caso, la aplicación no funciona correctamente si se establece el header CSP, debido a que NextJS utiliza "unsafes-inlines" en sí mismo para el contenido pre renderizado. La solución correcta para puntuar como A+ sería agregar un nonce para evitar ataques XSS, pero perjudicaría a la performance. Ambas opciones son posibles, pero en el presente challenge se priorizó la performance.

## Posibles pasos a seguir:

1. Agregar más tests unitarios al backend (buscar un coverage similar a frontend).
1. Agregar los presets de babel para jest en Backend, así el comando npm run test_unit_coverage no muestra logs incómodos.
1. Hacer que los tests unitarios tarden menos. Principalmente hay unos de front que tardan muchas veces más de 5 segundos.
1. Documentar la API con Swagger (surgió en la entrevista).
1. Agregar funcionalidades al frontend (por ejemplo, una paginación, que utilice los query params offset y limit que ya están disponibles).
1. Agregar esos cambios a tests unitarios y de integración.
1. Agregar ejemplos del manejo de estado (la app tiene un ejemplo con API Context, aunque prefiero redux toolkit). Pero no tengo grandes casos de uso para el estado...
1. Describir el gitflow..
1. ¿Sugerir alguna herramienta de health check como Prometheus?
