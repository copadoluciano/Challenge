## Proyecto Cypress

Este proyecto utiliza [Cypress](https://www.cypress.io/) para la automatización de pruebas end-to-end.

## Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu máquina.

### Instalación

 ● Clona este repositorio:
 
 git clone https://github.com/copadoluciano/Challenge

 ● Ingresa al directorio del proyecto:
 
  cd tu-proyecto-cypress

 ● Instala las dependencias:
 
  npm install

### Ejecución

 ● Ejecuta las pruebas por consola
 
npm run test

 ● Desarrollo
Ejecuta las pruebas por UI

  npx cypress open
  
Esto abrirá la interfaz de usuario de Cypress, donde podrás seleccionar y ejecutar pruebas de manera interactiva.

 ● Ejecucion con Docker Compose
 
   npm run build_docker
   
   npm run docker_run
   
Esto levantara un contenedor donde se instalara todo lo necesario para correr las pruebas.

### Estructura
   
cypress/e2e/Tests/Step_Definition: Contiene los archivos de prueba Cypress.

cypress/fixtures: Contiene datos de prueba.

cypress/support: Contiene archivos de soporte, como comandos personalizados y funciones de utilidad.

cypress.config.json: Archivo de configuración principal de Cypress.
