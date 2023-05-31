Feature: 0 - Common
Common functionality for all Test Levels


  @0 @Common
  Scenario: Our Application Loads in Chrome
    Given Chrome is available
    When we load the application url
    Then the webStore loads
 
  @0 @Common
  Scenario: Our Application Loads in Firefox
    Given Firefox is available
    When we load the application url
    Then the webStore loads    

  @0 @Common
  Scenario: Our Application Loads in Edge
    Given Edge is available
    When we load the application url
    Then the webStore loads
 
  @0 @Common
  Scenario: Our Application Loads in Headless Browser
    Given Browser is available
    When we load the application url
    Then the webStore loads       