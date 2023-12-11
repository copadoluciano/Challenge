Feature: I want to login into the site with valid data

  Background: Navegar hasta el sitio web
    Given el usuario se encuentra en la web application

  Scenario Outline: Crear un item nuevo
  When el usuario crea la pelicula <pelicula> con descripcion <descripcion>
  Then el item se posiciona ultimo en la lista
  Examples:
  | pelicula | descripcion |
  | gladiador.jpg | Gladiador |
  # | troya.jpg | Troya |
   

  # Scenario: Editar un item existente
  # When el usuario edita un item existente
  # Then se visualiza el cambio de forma inmediata

  # Scenario: Eliminar un item ya creado
  # When el usuario elimina un item ya creado
  # Then el item desaparece de la lista

  # Scenario Outline: Chequear la longitud maxima en la descripcion
  # Then el usuario chequea el maximo de <longitud> caracteres disponibles
  # Examples:
  # | longitud |
  # | 300 |

  # Scenario Outline: Validar que exista un texto especifico
  # Then el usuario valida que exista el texto <string>
  # Examples:
  # | string|
  # | Creators: Matt Duffer, Ross Duffer|

  

