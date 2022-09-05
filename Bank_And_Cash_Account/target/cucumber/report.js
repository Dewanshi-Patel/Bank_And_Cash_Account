$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Bank\u0026CashLogin.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Bank\u0026CashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BCScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters accountTitle as \"\u003caccounttitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as \"\u003cinitialbalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters phoneNumber as \"\u003cphoneNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingUrl as \"\u003cinternetBankingUrl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User should be able to see validate new account created",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accounttitle",
        "description",
        "initialbalance",
        "accountNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingUrl"
      ],
      "line": 28,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking",
        "DewanshiPatel",
        "$32,253",
        "12345",
        "DewanshiPatel",
        "884-569-7894",
        "www.google.com"
      ],
      "line": 29,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3662366600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BCLoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 963753700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BCScenario1"
    },
    {
      "line": 1,
      "name": "@Bank\u0026CashFeature"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks newAccount",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters accountTitle as \"Checking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters description as \"DewanshiPatel\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as \"$32,253\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as \"12345\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as \"DewanshiPatel\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters phoneNumber as \"884-569-7894\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingUrl as \"www.google.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User should be able to see validate new account created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3140892900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3078574300,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 5211332600,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 19250900,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_clicks_on_bankCash_button()"
});
formatter.result({
  "duration": 3066300600,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_clicks_newAccount()"
});
formatter.result({
  "duration": 468519900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 29
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 109762900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DewanshiPatel",
      "offset": 28
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 90850900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$32,253",
      "offset": 31
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 91839200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 30
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 91025900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DewanshiPatel",
      "offset": 30
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 97499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "884-569-7894",
      "offset": 28
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_phoneNumber_as(String)"
});
formatter.result({
  "duration": 74403600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 35
    }
  ],
  "location": "BCLoginStepDefinition.user_enters_internetBankingUrl_as(String)"
});
formatter.result({
  "duration": 100635000,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 689395200,
  "status": "passed"
});
formatter.match({
  "location": "BCLoginStepDefinition.user_should_be_able_to_see_validate_new_account_created()"
});
formatter.result({
  "duration": 3320600,
  "status": "passed"
});
});