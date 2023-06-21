// Hooks

AfterScenario(function (scenario){
  // Perform some action after executing a scenario, for example:
  Log.Message("The " + scenario.Name + " scenario has been executed");
    Aliases.browser.Close();
})


// 0 - Common

Given("Chrome is available", function (){
   KeywordTests.Mod_LaunchBrowser.Run("Chrome");
});

When("we load the application url", function (){
    KeywordTests.Mod_LoadWebStore.Run();
});

Then("the webStore loads", function (){
    KeywordTests.Mod_WebStoreLoads.Run();
});

Given("Firefox is available", function (){
   KeywordTests.Mod_LaunchBrowser.Run("Firefox");
});

Given("Edge is available", function (){
   KeywordTests.Mod_LaunchBrowser.Run("Edge");
});


// 1 - Sanity

Given("we can load our application", function (){
    KeywordTests.Mod_LaunchBrowser.Run("Firefox");
    KeywordTests.Mod_LoadWebStore.Run();
    KeywordTests.Mod_WebStoreLoads.Run();
});

When("we enter valid credentials", function (){
    KeywordTests.Mod_EnterCreds.Run("dermotc",Project.Variables.DermotPassword);
    Project.Variables.tempUsername = "dermotc";
});

Then("login is successful", function (){
    KeywordTests.Mod_SuccessfulLogin.Run(Project.Variables.tempUsername);
});

When("we enter {arg} and {arg}", function (user, pass){
   KeywordTests.Mod_EnterCreds.Run(user,pass);
   Project.Variables.tempUsername = user;
});
