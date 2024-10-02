//Sample (not headless)
function BearStoreTest_NotHeadless()
{
  Browsers.Item(btEdge).Run("https://bearstore-testsite.smartbear.com/");
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browser.BrowserWindow.Maximize();
  browser.pageShop.header.link.imageSmartstore.Click();
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//span[.='Log in']"), "contentText", cmpEqual, "Log in");
  aqObject.CheckProperty(Aliases.browser.pageShop.header.link.imageSmartstore, "title", cmpEqual, "SmartStore");
  browserWindow.Close();
}

function Simple_Test_Script()
{
  //The beginning of the Simple_Test group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Simple_Test", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Edge group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Open Close Edge", "", pmNormal, Project.Variables.LogAtrribModTitle);
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Posts an information message to the test log.
  Log.Message(Aliases.browser.FileVersionInfo, "");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.panelPhTitle6 object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.panelPhTitle6, "contentText", cmpEqual, "Welcome to our store.");
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Edge group
  //The beginning of the Mod_Login_SampleUser group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Login_SampleUser", "", pmNormal, Project.Variables.LogAtrribModTitle);
  //Posts an information message to the test log.
  Log.Message("Mod_Login_SampleUser", "");
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Login_SampleUser");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Simulates a user action over the area that contains the recognized text.
  OCR.Recognize(Aliases.browser.pageShop.header.navUsd).BlockByText("LOG IN").Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Enters text in the text box.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("SampleUser_001!");
  //Enters text in the text box.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText("SampleUser_001!");
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(3000);
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.pageShop.header.panelUsd.Picture(), "Header Bar", "");
  //Restores the previous indicator text.
  Indicator.PopText();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Mod_Login_SampleUser group
  //The beginning of the Mod_Logout_SampleUser group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Logout_SampleUser", "", pmNormal, Project.Variables.LogAtrribModTitle);
  //Posts an information message to the test log.
  Log.Message("Mod_Logout_SampleUser", "");
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Logout_SampleUser");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeSampleuser001' control.
  Aliases.browser.pageShop.header.navUsd.linkSampleuser001.textnodeSampleuser001.Click();
  //Clicks the 'textnodeLogOut' control.
  Aliases.browser.pageShop.header.navUsd.linkLogOut.textnodeLogOut.Click();
  //Delays the test execution for the specified time period.
  Delay(3000);
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.pageShop.header.panelUsd.Picture(), "Header Bar", "");
  //Restores the previous indicator text.
  Indicator.PopText();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Mod_Logout_SampleUser group
  //The beginning of the Mod_Close_Browser group
  //Closes the currently running browser
  //
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Close_Browser", "Closes the currently opened browser", pmNormal, Project.Variables.LogAtrribModTitle);
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Close_Browser");
  //Closes the browser.
  Aliases.browser.Close();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
  //The end of the Mod_Close_Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Simple_Test group
}

//@Debug
function Set_CLIParm_TestedApp_Script()
{
  var CLI_Var_String;
  CLI_Var_String = "--incognito";
  //The beginning of the Set_CLIParm_TestedApp group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Set_CLIParm_TestedApp", "");
  //The beginning of the Set Tested App Parm to Hardcoded Incognito  group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Set Tested App Parm to Hardcoded Incognito ", "");
  //Specifies command-line arguments for the tested application.
  TestedApps.chrome.Params.ActiveParams.CommandLineParameters = "--incognito";
  //Runs the "chrome" tested application.
  TestedApps.chrome.Run();
  //Posts an image to the test log.
  Log.Picture(Aliases.chrome.wndChrome_WidgetWin_1.Picture(), "Incognito Window", "Should be a screenshot of the Chrome Incognito Window", pmNormal, Project.Variables.LogAtrribInformation);
  //Closes the browser.
  Aliases.chrome.Close();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Set Tested App Parm to Hardcoded Incognito  group
  //The beginning of the Clear out Tested App Parm group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Clear out Tested App Parm", "");
  //Specifies command-line arguments for the tested application.
  TestedApps.chrome.Params.ActiveParams.CommandLineParameters = "";
  //Runs the "chrome" tested application.
  TestedApps.chrome.Run();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.BrowserWindow.Picture(), "Screenshot of Normal (Non-Incognito) Browser Window\r\n", "");
  //Closes the browser.
  Aliases.browser.Close();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Clear out Tested App Parm group
  //The beginning of the Set Tested App Parm to Incognito via Test Variable group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Set Tested App Parm to Incognito via Test Variable", "");
  //Specifies command-line arguments for the tested application.
  TestedApps.chrome.Params.ActiveParams.CommandLineParameters = CLI_Var_String;
  //Runs the "chrome" tested application.
  TestedApps.chrome.Run();
  //Posts an image to the test log.
  Log.Picture(Aliases.chrome.wndChrome_WidgetWin_1, "Screenshot of Normal (Non-Incognito) Browser Window\r\n", "");
  //Closes the browser.
  Aliases.chrome.Close();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Set Tested App Parm to Incognito via Test Variable group
  //The beginning of the Clear out Tested App Parm group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Clear out Tested App Parm", "");
  //Specifies command-line arguments for the tested application.
  TestedApps.chrome.Params.ActiveParams.CommandLineParameters = "";
  //Runs the "chrome" tested application.
  TestedApps.chrome.Run();
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.BrowserWindow.Picture(), "Screenshot of Normal (Non-Incognito) Browser Window\r\n", "");
  //Closes the browser.
  Aliases.browser.Close();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Clear out Tested App Parm group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Set_CLIParm_TestedApp group
}

function Basic_Test()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.chrome.wndChrome_WidgetWin_1.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore, "contentText", cmpEqual, "Welcome to our store.");
  //Closes the browser.
  Aliases.browser.Close();
}