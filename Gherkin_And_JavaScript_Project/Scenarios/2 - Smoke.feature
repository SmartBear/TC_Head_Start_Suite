Feature: 2 - Smoke
Various Scenarios that test the happy path functionality of our application

  @2 @Smoke
  Scenario: Purchase a Product
    Given we login to our application
    When we click to purchase an item
    Then the item is in our cart

  @3 @Debug
  Scenario: Purchase a Wireless Controller
    Given we login to our application
    When we click to purchase a Wireless Controller
    Then the item is in our cart