// 0 - Common

Given("Chrome is available", function (){
   KeywordTests.Mod_LaunchBrowser("Chrome");
});

When("we load the application url", function (){
    KeywordTests.Mod_LoadWebStore();
});

Then("the webStore loads", function (){
    KeywordTests.Mod_WebStoreLoads();
});

Given("Firefox is available", function (){
   KeywordTests.Mod_LaunchBrowser("Firefox");
});

Given("Edge is available", function (){
   KeywordTests.Mod_LaunchBrowser("Edge");
});


// 1 - Sanity

Given("we can load our application", function (){
    KeywordTests.Mod_LaunchBrowser("Firefox");
    KeywordTests.Mod_LoadWebStore();
    KeywordTests.Mod_WebStoreLoads();
});

When("we enter valid credentials", function (){
    KeywordTests.Mod_EnterCreds("dermotc",Project.Variables.DermotPassword);
});

Then("login is successful", function (){
    KeywordTests.Mod_SuccessfulLogin("dermotc");
});

When("we enter Dermot and password", function (){
    throw new NotImplementedError();
});

When("we enter Kevin and password", function (){
    throw new NotImplementedError();
});