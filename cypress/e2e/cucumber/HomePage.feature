Feature: I want to login into the site with valid data

  Background: Navegar hasta el sitio web
    Given el usuario se encuentra en la web application

  # Scenario Outline: Crear un item nuevo
  # When el usuario crea la pelicula <imagen> con descripcion <descripcion>
  # Then el item de la <imagen> y <descripcion> se posiciona ultimo en la lista
  # Examples:
  # | imagen | descripcion |
  # | gladiador.jpg | Gladiador |
  # | troya.jpg | Troya |


  # Scenario Outline: Editar un item existente
  #   When el usuario edita el item existente <item> con la imagen <imagen> y la descripcion <descripcion>
  #   Then se visualiza el cambio del item <item> con la imagen <imagen> y la descripcion <descripcion>

  #   Examples:
  #     | item | imagen  | descripcion |
  #     | 4    | 300.jpg | 300         |
  # | 5 | harrypotter.jpg|  HarryPotter |

  Scenario Outline: Eliminar un item ya creado
    When el usuario elimina el item de la posicion <posicion>
    Then el item de la posicion <posicion> desaparece de la lista

    Examples:
      | posicion |
      | 2       |


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



