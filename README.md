- [Challenge de Mercado Libre](#challenge-de-mercado-libre)
  - [Inicio](#inicio)
    - [Ejemplo del deploy](#ejemplo-del-deploy)
    - [Prueba local](#prueba-local)
    - [Prueba con docker](#prueba-con-docker)
  - [Arquitectura](#arquitectura)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Comunicación](#comunicación)
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
      - [Configurables por entorno](#configurables-por-entorno)
      - [Logs](#logs)
    - [Tests unitarios](#tests-unitarios)
      - [Backend](#backend-1)
      - [Frontend](#frontend-1)
    - [Tests End To End](#tests-end-to-end)
  - [Otros principios seguidos](#otros-principios-seguidos)
    - [Calidad del código](#calidad-del-código)
      - [Clean code](#clean-code)
      - [Linting y estilos](#linting-y-estilos)
    - [Seguridad informática](#seguridad-informática)
      - [General](#general)
      - [SSL](#ssl)
      - [Cabeceras HTTP](#cabeceras-http)

# Challenge de Mercado Libre

## Inicio

### Ejemplo del deploy

Es posible ver el deploy de estos dos servicios en:

Español: [https://matiaspuig-challenge.com.ar](https://matiaspuig-challenge.com.ar)

Inglés: [https://matiaspuig-challenge.com.ar/en](https://matiaspuig-challenge.com.ar/en)

### Prueba local

Para probarlos localmente es posible utilizar en ambos servicios:

```bash
npm run dev
```

Ambos están con la configuración de development por defecto, así que el backend levantará en el puerto 8080 y el frontend ne el puerto 3000.
(No tuve tiempo de configurar algo como Lerna o workspaces).

### Prueba con docker

La configuración de ejemplo exportará a la versión en español en localhost:3000 y la versión en inglés en localhost:3001/en.

```bash
docker-compose up
```

## Arquitectura

( TODO: IMAGEN ARQUITECTURA )

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

## Principios orientadores pedidos

### Usabilidad

#### Responsive

El challenge fue hecho de manera responsive, para que se adapte a todos los tamaños de dispositivo (utilizando el principio **mobile first**). Se adapta cómodamente a todos los tamaños de dispositivo que ofrece Chrome DevTools.

#### Navegabilidad

El challenge fue probado sin utilizar el mouse, únicamente con el teclado utilizando la tabulación.

#### Accesibildad

El challenge fue probado con la aplicación mobile TalkBack de Android (no cuento con otras como VoiceOver o JAWS, por lo que desconozco si funciona correctamente en las mismas). Es posible utilizar y recorrer la aplicación sin mirar el dispositivo.

( TODO: IMAGEN LIGHTHOUSE )

**Nota**:

Para lograr esto, tuve que modificar la paleta de colores dada en los archivos de diseño, ya que los colores entre sí no tenían suficiente contraste y podían perjudicar a una persona con problemas visuales.

Se utilizaron los tags ARIA para diferenciar la funcionalidad de los lectores de ayuda visual (por ejemplo, para saltear el carrusel o para que en la descripción del precio diga "Pesos" en vez de "dólares".).

#### Experiencia del usuario

Para facilitar la navegación se agregaron detalles al funcionamiento para hacerlo más user friendly. Por ejemplo, las URLs agregan un query param cuya única función es ser descripción:

[https://matiaspuig-challenge.com.ar/items/MLA1144571176?description=Alimento+Agility+Premium+Para+Gato+Adulto+Sabor+Mix+En+Bolsa+De+10+kg](https://matiaspuig-challenge.com.ar/items/MLA1144571176?description=Alimento+Agility+Premium+Para+Gato+Adulto+Sabor+Mix+En+Bolsa+De+10+kg)

Solo el itemId importa para obtener el resultado. Una posible mejora a futuro sería que la URL tuviera el formato "/[id]-[descripcion]" en vez de "/[id]?descripcion=[descripcion]". Esto también mejoraría la experiencia de los lectores de pantalla, al dar una URL con sentido en vez de solo un ID de MercadoLibre.

**Nota:**
La propuesta del challenge de hacer los breadcrumbs de los resultados de búsqueda a partir de la cantidad de resultados por categoría disponible genera experiencias raras. Por ejemplo, al buscar "moja", aparece como categoría "Ropa y accesorios", pero el primer resultado es una cerveza.

## SEO

### Robots

Todas las páginas tienen indexación para el seguimiento de los robots. Las únicas que cuentan con un norobots y nofollow son las correspondientes a errores (404, 500, etc.).

### HTML semántico

Para lograr este punto, cada elemento del HTML con un significado tiene una etiqueta correspondiente (se han utilizado los tags header, main, footer, nav, article, picture, etc.).

### Open Graph

Se han colocado las cabeceras de Open Graph correspondientes para tener las diferentes previews de los microbrowsers.

Por ejemplo, el link [https://matiaspuig-challenge.com.ar/items/MLA1135447143?description=Alimento+Pedigree+Optima+Digestion+Etapa+2+Para+Perro+Adulto+Todos+Los+Tamanos+Sabor+Carne+Y+Vegetales+En+Bolsa+De+21+kg](https://matiaspuig-challenge.com.ar/items/MLA1135447143?description=Alimento+Pedigree+Optima+Digestion+Etapa+2+Para+Perro+Adulto+Todos+Los+Tamanos+Sabor+Carne+Y+Vegetales+En+Bolsa+De+21+kg) genera el siguiente preview:

( TODO: IMAGEN TELEGRAM, IMAGEN WHATSAPP ).

Los resultados fueron chequeados con la aplicación web: [dnschecker](https://dnschecker.org/open-graph-preview-generate-metatags.php).

**Nota**: No probar con Whatsapp web, ya que el mismo no se encuentra funcionando correctamente para generar thumbnails.

### Internacionalización

Si bien es posible con i18next hacer a la aplicación traducible en el cliente, se decidió hacerlo por variable de entorno para obligar exponer la aplicación en una URL distinta. Esto favorece al SEO al tener URLs que siempre ofrecen el mismo resultado.

## Performance

### SSR

El server side rendering permite tener páginas estáticas precompiladas. Las dinámicas las genera en el servidor previo a enviarlas al usuario (a partir del getServerSideProps de NextJS).

( TODO :IMAGEN LIGHTHOUSE )

### Escalabilidad

#### Microservicios

#### Contenedores como recursos interconectables

Tanto backend como frontend están planteados como microservicios (fue sencillo siendo que no tienen estado...). En el repositorio se encuentra el ejemplo para un deploy utilizando docker-compose y docker. En el ejemplo, se deploya dos veces el frontend, una vez en español y otra en inglés, para mostrar la idea de contenedores interconectados a través de parametrización.

La paralelización conseguida permite escalar horizontalmente cuanto haga falta, ya que se pueden deployar varias instancias en paralelo y ponerlas detrás de un balanceador de carga.

#### Configurables por entorno

Las variables de entorno permiten configurar cuestiones base de los microservicios: qué versión de node utilizan, en qué puerto escuchan, el nivel de logs, la API KEY para comunicarse, etc. En el caso del frontend, permite agregar en qué URL escucha y en qué idioma está.

**Importante**:

En el caso del frontend, debido al precompliado que ocurre para optimizar la performance, algunas variables deben estar al momento de **construir** la imagen, y no al momento de correr la imagen.
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

#### Logs

Ambos microservicios exponen sus logs en el mismo formato, dando información relevante como nombre de la aplicación, versión, entorno, etiqueta, entre otras. La idea de uniformidad entre distintos microservicios facilita el mantenimiento y la escalabilidad al permitir utilizar más fácilmente herramientas como Logstash, ElasticSearch y Kibana.

### Tests unitarios

#### Backend

Los mismos fueron realizados utilizando Jest. Se mockeó el resultado de axios para el consumo de la API y se realizaron tests unitarios de las funcionalidades principales. (Se hizo un abordaje más integral dado que me pidieron ver más mis posibilidades en frontend).

#### Frontend

Los mismos se realizaron utilizando Jest.

La estrategia utilizada para los tests unitarios fue una bottom->top. Se realiza el testeo de un correcto renderizado de los componentes, y se empieza a "subir" hasta llegar a las capas más altas. De esta forma, se testea el componente, se le asigna un "data-testid", y en el componente padre solo se verifique que haya renderizado un hijo con ese identificador.

( TODO: IMAGEN DE TESTS UNITARIOS )

### Tests End To End

Los mismos fueron realizados en el frontend utilizando la herramienta Cypress. Se testearon los casos de uso principales (búsqueda, navegación y botón de compra).

Se utlizó como principio utilizar la accesibilidad de la página (buscar HTML semántico y ubicación, o botones o inputs a partir de su nombre), y no los tags. Los data-testid fueron evitados para el testeo E2E.
( TODO: IMAGEN DE RESLUTADO D CYPRESS )

## Otros principios seguidos

### Calidad del código

#### Clean code

En todos los casos, traté de seguir las propuestas de Clean Code para la generación del código: funciones atómicas; poco nivel de anidación; modularización; variables, constantes y métodos con nombres semánticos; guías de la comunidad como el camel case, etc.

#### Linting y estilos

Se utilizó para ambos microservicios las herramientas prettier y eslint, con la configuración sugerida por AirBNB para [javascript](https://github.com/airbnb/javascript) y [React](https://airbnb.io/javascript/react/).

### Seguridad informática

#### General

EL challenge no tiene tantos frentes para ser vulnerable en seguridad informática (por ejemplo, no sería susceptible de SQL Injection, ataques CSRF, session riding, autenticación indebida, ataques a través de la API REST, etc.).

Sobre las vulnerabilidades que sí podría presentar, no todas se han colocado en el microservicio. El establecimiento de cabeceras HTTP, forzar la conexión mediante SSL, protección contra DDOS, slowloris, etc., se delega a la otra capa (nginx, apache, etc.). Configurar esto en ambos lados genera confusiones de configuración, y disminuye la portabilidad del contenedor. En este caso, la configuración del servidor deployado se encuentra en la carpeta [nginx.conf](/others/nginx.conf)

Sí se ha colocado en el backend, a modo de ejemplo, una protección contra consultas repetidas.

#### SSL

La aplicación en línea funciona atrás de un nginx con la configuración de SSL preparada para puntuar A+.

En SSL Labs puntúa como A+: [https://www.ssllabs.com/ssltest/analyze.html?d=www.matiaspuig-challenge.com.ar](https://www.ssllabs.com/ssltest/analyze.html?d=www.matiaspuig-challenge.com.ar)

( TODO: IMAGEN SSLABS).

Era importante probar que la aplicación funciona correctamente detrás de SSL (principalmente, que no haya URLs mal colocadas, o intente servir contenido seguro y no seguro a la vez).

#### Cabeceras HTTP

La aplicación deployada de ejemplo puntúa como B+ en el observatorio de mozilla:
[https://observatory.mozilla.org/analyze/matiaspuig-challenge.com.ar](https://observatory.mozilla.org/analyze/matiaspuig-challenge.com.ar)

( TODO: IMAGEN )

**Importante**:

En este caso, la aplicación no funciona correctamente si se establece el header CSP, debido a que NextJS utiliza "unsafes-inlines" en sí mismo. La solución correcta sería agregar un nonce para evitar ataques XSS, pero iría en contra de la performance.
