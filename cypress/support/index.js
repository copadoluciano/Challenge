import './commands'
import './home'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Hacer lo que quieras con la excepción no capturada
    // Por ejemplo, puedes imprimir el error en la consola de Cypress
    console.error('Uncaught Exception:', err.message);
    
    // Retorna false para evitar que la excepción no capturada falle la prueba
    return false;
  });