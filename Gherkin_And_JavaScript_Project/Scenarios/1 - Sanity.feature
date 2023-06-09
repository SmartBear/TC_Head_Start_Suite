Feature: 1 - Sanity
Scenarios that check the basic sanity of the application environment

          
  @1 @Sanity
  Scenario: A user can login to the application
    Given we can load our application
    When we enter valid credentials
    Then login is successful
  
  @1 @Sanity
  Scenario Outline: A user can login to the application
    Given we can load our application
    When we enter <Username> and <Password>
    Then login is successful
  
    Examples:
    | Username | Password |
    | Dermot | password |
    | Kevin | password |
    
