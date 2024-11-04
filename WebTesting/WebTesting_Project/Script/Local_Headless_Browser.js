//Sample (headless)
function Test_Chrome_Headless()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
 }
 
//Sample (headless)
function Test_Edge_Headless()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };
  Log.Message("Test_Edge_Headless", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
  browser.BrowserWindow.Maximize();
  browser.pageShop.header.link.imageSmartstore.Click();
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//span[.='Log in']"), "contentText", cmpEqual, "Log in");
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//img[@title='SmartStore']"), "title", cmpEqual, "SmartStore");
  Log.Picture(browser.pageShop.Picture(), "Picture of Page","Detailed description");
  browserWindow.Close();
 }

//Sample (headless)
function Test_FireFox_Headless()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "firefox",
    "screenResolution": "1920x1080"
  };
  Log.Message("Test_FireFox_Headless", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
 
  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  var searchBar = page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/input");
  searchBar.click();
  searchBar.value = "Ball";
  page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/button").click();
  Log.Picture(page.Picture(), "","");
 }
  
//Sample (headless)
function HeadlessEdge()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };
  Log.Message("HeadlessEdge", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);

  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  var searchBar = page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/input");
  searchBar.click();
  searchBar.value = "Ball";
  page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/button").click();
  page.Wait(5000);
  
  aqObject.CheckProperty(page.FindElement("//h1[contains(text(), 'Search result for')]"), "contentText", cmpEqual, "Search result for\nBall");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  
}

//Sample (headless)
function HeadlessFireFox()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "firefox",
    "screenResolution": "1920x1080"
  };
  
  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
  
  Log.Message("HeadlessFirefox", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
    
  var LoginBtn = page.FindElement("//a[contains(., 'Log in')]");
  LoginBtn.click();
  page.Wait(5000);
  
  aqObject.CheckProperty(page.FindElement("//h1[.='Sign In']"), "contentText", cmpEqual, "Sign In");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  
  var UName = page.FindElement("#UsernameOrEmail");
  var PWord = page.FindElement("#Password")
  UName.value = "OldSailor1960";  
  PWord.value = "Smartbear1!";
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  page.FindElement("//button[contains(text(), 'Log in')]").click();
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
}

//Sample (headless)
function HeadlessChrome()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
  
  Log.Message("HeadlessChrome", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
    
  var LoginBtn = page.FindElement("//a[contains(., 'Log in')]");
  LoginBtn.click();
  page.Wait(5000);
  
  aqObject.CheckProperty(page.FindElement("//h1[.='Sign In']"), "contentText", cmpEqual, "Sign In");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  
  var UName = page.FindElement("#UsernameOrEmail");
  var PWord = page.FindElement("#Password")
  UName.value = "OldSailor1960";  
  PWord.value = "Smartbear1!";
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  page.FindElement("//button[contains(text(), 'Log in')]").click();
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
}

function Simple_Test_Script_Headless_Edge()
{
  //The beginning of the Simple_Test group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Simple_Test", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Edge group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Open Close Edge", "", pmNormal, Project.Variables.LogAtrribModTitle);
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };
  Log.Message("HeadlessEdge", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.RemoteItem(server, capabilities).Run(url);
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

function Simple_Test_Script_Headless_Chrome()
{
  //The beginning of the Simple_Test group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Simple_Test", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Edge group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Open Close Edge", "", pmNormal, Project.Variables.LogAtrribModTitle);
  var server = "localhost";
  var capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080"
  };
  Log.Message("HeadlessEdge", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.RemoteItem(server, capabilities).Run(url);
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

function Simple_Test_Script_Headless_FireFox()
{
  //The beginning of the Simple_Test group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Simple_Test", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Edge group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Open Close Edge", "", pmNormal, Project.Variables.LogAtrribModTitle);
  var server = "localhost";
  var capabilities = {
    "browserName": "firefox",
    "screenResolution": "1920x1080"
  };
  Log.Message("HeadlessEdge", "Log TestName", pmNormal, Project.Variables.LogAtrribInformation); 
  var url = "https://bearstore-testsite.smartbear.com/";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.RemoteItem(server, capabilities).Run(url);
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