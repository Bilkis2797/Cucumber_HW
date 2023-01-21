$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/AddBankAcc.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\" in the password field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003caccountTitle\u003e\" in the accountTitle field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cdescription\u003e\" in the description field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cinitialBalance\u003e\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003caccountNumber\u003e\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003ccontactPerson\u003e\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cPhone\u003e\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the internetBankingURL field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "CheckingAcc",
        "Account created by Bilkis",
        "10000",
        "123456",
        "Bilkis Akter",
        "2149944",
        "https://www.bankofamerica.com/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "SavingAcc",
        "Account created by Bilkis",
        "25000",
        "321456",
        "Bilkis Akter",
        "2149944",
        "https://www.chase.com/"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1914107200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"CheckingAcc\" in the accountTitle field in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Account created by Bilkis\" in the description field in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"10000\" in the initialBalance field in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"123456\" in the accountNumber field in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Bilkis Akter\" in the contactPerson field in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"2149944\" in the Phone field in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"https://www.bankofamerica.com/\" in the internetBankingURL field in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1530185300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "NewAccStepDefinition.user_enters_the_in_the_username_field(String)"
});
formatter.result({
  "duration": 2141753600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    }
  ],
  "location": "NewAccStepDefinition.user_enters_the_in_the_password_field(String)"
});
formatter.result({
  "duration": 2093070000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 2834875800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2011776600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 2088473900,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 2370995000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CheckingAcc",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_accountTitle_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2159706200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created by Bilkis",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_description_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2189953400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_initialBalance_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2138563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_accountNumber_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2160254800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bilkis Akter",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_contactPerson_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2161588300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2149944",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_Phone_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2122298900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.bankofamerica.com/",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_internetBankingURL_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2198585300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "duration": 782726200,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 2049561400,
  "status": "passed"
});
formatter.after({
  "duration": 633980800,
  "status": "passed"
});
formatter.before({
  "duration": 1322461900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"SavingAcc\" in the accountTitle field in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Account created by Bilkis\" in the description field in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"25000\" in the initialBalance field in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"321456\" in the accountNumber field in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Bilkis Akter\" in the contactPerson field in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"2149944\" in the Phone field in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"https://www.chase.com/\" in the internetBankingURL field in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewAccStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1614939400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "NewAccStepDefinition.user_enters_the_in_the_username_field(String)"
});
formatter.result({
  "duration": 2140380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    }
  ],
  "location": "NewAccStepDefinition.user_enters_the_in_the_password_field(String)"
});
formatter.result({
  "duration": 2094340800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 2791861300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2020200300,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 2084180700,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 2405833400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SavingAcc",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_accountTitle_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2159927500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created by Bilkis",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_description_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2208136900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_initialBalance_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2141194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "321456",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_accountNumber_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2162107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bilkis Akter",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_contactPerson_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2158339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2149944",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_Phone_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2157237500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 13
    }
  ],
  "location": "NewAccStepDefinition.user_enters_in_the_internetBankingURL_field_in_accounts_page(String)"
});
formatter.result({
  "duration": 2159766600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "duration": 715097600,
  "status": "passed"
});
formatter.match({
  "location": "NewAccStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 2052903700,
  "status": "passed"
});
formatter.after({
  "duration": 16838030500,
  "status": "passed"
});
});