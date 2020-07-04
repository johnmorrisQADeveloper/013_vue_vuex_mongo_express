Feature: Add a new todo

  I want to open a social network page
  
  Scenario: Opening a social network page
    Given I open todo app
    Then I see "todovuex" in the title

  Scenario: Create a new item
    Given I open todo app
    Then I click the new item
    Then I click the new  "wash clothes"
