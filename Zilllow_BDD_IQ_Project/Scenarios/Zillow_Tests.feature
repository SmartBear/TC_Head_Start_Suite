Feature: Zillow_Tests

  Scenario: Open Zillow and search for apartments in Boston
    Given Open Zillow in Edge
    When Filtered Rentals in Somerville MA
    Then Validate Search Results
    Then Zoom Map
    Then Hover over bubble
    Then Save data from bubble
    Then Click on bubble
    Then Close Edge
    