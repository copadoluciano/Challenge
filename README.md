# Proyecto Cypress

Este proyecto utiliza [Cypress](https://www.cypress.io/) para la automatización de pruebas end-to-end.

## Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu máquina.

## Instalación

1. Clona este repositorio:
   git clone https://github.com/tu-usuario/tu-proyecto-cypress.git

2. Ingresa al directorio del proyecto:
  cd tu-proyecto-cypress

3. Instala las dependencias:
  npm install

4. Ejecutar Pruebas
Ejecuta las pruebas Cypress con el siguiente comando:
npm run test

5. Desarrollo
Si deseas ejecutar Cypress en modo interactivo para el desarrollo, utiliza el siguiente comando:
  npx cypress open
  
Esto abrirá la interfaz de usuario de Cypress, donde podrás seleccionar y ejecutar pruebas de manera interactiva.

6. Ejecucion con Docker Compose
   npm run build_docker
   npm run docker_run
Esto levantara un contenedor donde se instalara todo lo necesario para correr las pruebas.

8. Estructura del Proyecto
cypress/e2e/Tests/Step_Definition: Contiene los archivos de prueba Cypress.
cypress/fixtures: Contiene datos de prueba.
cypress/support: Contiene archivos de soporte, como comandos personalizados y funciones de utilidad.
cypress.config.json: Archivo de configuración principal de Cypress.
