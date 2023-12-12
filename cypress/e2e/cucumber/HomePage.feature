Feature: Home Test Cases

  Background: Navigate to website
    Given the user is in the web application

  Scenario Outline: Create a new item
    When the user creates the movie <picture> with description <description>
    Then the image <imagen> and description <description> is positioned last in the list
    Examples:
      | picture       | description |
      | gladiador.jpg | Gladiador   |



  Scenario Outline: Edit an existing item
    When the user edits an existing item <position> with the image <picture> and the description <description>
    Then the change of the item <position> is displayed with the image <image> and the description <description>

    Examples:
      | position | picture      | description       |
      | 4        | stranger.jpg | "Stranger Things" |


  Scenario Outline: Delete an item already created
    When the user deletes the item from position <position>
    Then the item at position <position> disappears from the list

    Examples:
      | position |
      | 10        |


  Scenario Outline: Check the maximum length in the description field
    Then user checks maximum character <length>
    Examples:
      | length |
      | 300    |

  Scenario Outline: Validate that a specific text exists
    Then the user validates that the text <string> exists
    Examples:
      | string                               |
      | "Creators: Matt Duffer, Ross Duffer" |



