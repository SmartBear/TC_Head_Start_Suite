//@Visual
function Visual_Demo_Script()
{
  //The beginning of the Visual Demo group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Visual Demo", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //Runs a keyword test.
  KeywordTests.Mod_Open_BearStore_Chrome.Run();
  //The beginning of the Visual Test Steps group
  //Evaluates the visual fidelity of user interface.
  var testRun, testRun1, testRun2;
  testRun = VisualTest.CreateRun("DefaultFS");
  testRun.SetAllowedFails(0);
  testRun.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun1 = VisualTest.CreateRun("DefaultVP");
  testRun1.SetAllowedFails(0);
  testRun1.Capture(Aliases.browser.pageShop, "pageShop Viewport Default", testRun1.Viewport, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun2 = VisualTest.CreateRun("RunElement");
  testRun2.SetAllowedFails(0);
  testRun2.Capture(Aliases.browser.pageShop.header.navUsd.linkLogIn, "pageShop Login Button", testRun2.Element, 0, true);
  //The end of the Visual Test Steps group
  //The beginning of the Close Browser group
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //Runs a keyword test.
  //KeywordTests.Mod_Close_Browser.Run();
  //The end of the Close Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Visual Demo group
}

//@Visual
function Visual_Demo_2_Script()
{
  //The beginning of the Visual Demo 2 group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Visual Demo 2", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Open Smartstore and Login group
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn object equals 'Log in'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn, "contentText", cmpEqual, "Log in");
  //Check whether '*LOG IN*' matches the text optically recognized in the image Aliases.browser.pageShop.header.navUsd.
  OCR.Recognize(Aliases.browser.pageShop.header.navUsd).CheckText("*LOG IN*");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLogIn' link.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Sets the text 'OldSailor1960' in the 'textboxUsernameoremail' text editor.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("OldSailor1960");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1);
  //Sets the state of the 'checkboxRememberMe' checkbox to True.
  Aliases.browser.pageLogin.sectionContent.checkboxRememberMe.ClickChecked(true);
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//a[contains(., 'OldSailor1960')]") object equals 'OldSailor1960'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//a[contains(., 'OldSailor1960')]"), "contentText", cmpEqual, "OldSailor1960");
  //The end of the Open Smartstore and Login group
  //The beginning of the Visual Test Steps group
  //Evaluates the visual fidelity of user interface.
  var testRun, testRun1, testRun2;
  testRun = VisualTest.CreateRun("DefaultFS");
  testRun.SetAllowedFails(0);
  testRun.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun1 = VisualTest.CreateRun("DefaultVP");
  testRun1.SetAllowedFails(0);
  testRun1.Capture(Aliases.browser.pageShop, "pageShop Viewport Default", testRun1.Viewport, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun2 = VisualTest.CreateRun("RunElement");
  testRun2.SetAllowedFails(0);
  testRun2.Capture(Aliases.browser.pageShop.header.navUsd.linkLogIn, "pageShop Login Button", testRun2.Element, 0, true);
  //The end of the Visual Test Steps group
  //The beginning of the Close Browser group
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //The end of the Close Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Visual Demo 2 group
}

function Visual_Demo_3_Script()
{
  //The beginning of the Visual Demo 3 group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Visual Demo 3", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //Runs a keyword test.
  KeywordTests.Mod_Open_BearStore_Chrome.Run();
  //The beginning of the Visual Test Steps group
  //Evaluates the visual fidelity of user interface.
  var testRun, testRun1, testRun2, testRun3, testRun4, testRun5, testRun6, testRun7;
  testRun = VisualTest.CreateRun("DefaultFS");
  testRun.SetAllowedFails(0);
  testRun.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun1 = VisualTest.CreateRun("DefaultFS");
  testRun1.SetAllowedFails(5);
  testRun1.SetComparisonMode(testRun1.Layout, testRun1.Medium);
  testRun1.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun1.Fullpage, 3, true);
  //Evaluates the visual fidelity of user interface.
  testRun2 = VisualTest.CreateRun("DefaultFS");
  testRun2.SetAllowedFails(5);
  testRun2.SetComparisonMode(testRun2.Layout, testRun2.Low);
  testRun2.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun2.Fullpage, 3, true);
  //Evaluates the visual fidelity of user interface.
  testRun3 = VisualTest.CreateRun("LayoutFS");
  testRun3.SetAllowedFails(0);
  testRun3.SetComparisonMode(testRun3.Layout, testRun3.High);
  testRun3.Capture(Aliases.browser.pageShop, "pageShop FullScreen Layout", testRun3.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun4 = VisualTest.CreateRun("DetailedFS");
  testRun4.SetAllowedFails(0);
  testRun4.SetComparisonMode(testRun4.Detailed, testRun4.High);
  testRun4.Capture(Aliases.browser.pageShop, "pageShop FullScreen Detailed", testRun4.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun5 = VisualTest.CreateRun("DefaultVP");
  testRun5.SetAllowedFails(0);
  testRun5.Capture(Aliases.browser.pageShop, "pageShop Viewport Default", testRun5.Viewport, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun6 = VisualTest.CreateRun("LayoutVP");
  testRun6.SetAllowedFails(0);
  testRun6.SetComparisonMode(testRun6.Layout, testRun6.High);
  testRun6.Capture(Aliases.browser.pageShop, "pageShop Viewport Layout", testRun6.Viewport, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun7 = VisualTest.CreateRun("DetailedVP");
  testRun7.SetAllowedFails(0);
  testRun7.SetComparisonMode(testRun7.Detailed, testRun7.High);
  testRun7.Capture(Aliases.browser.pageShop, "pageShop Viewport Default", testRun7.Viewport, 0, true);
  //The end of the Visual Test Steps group
  //The beginning of the Close Browser group
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //The end of the Close Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Visual Demo 3 group
}

function Visual_Test_4_Script()
{
  //The beginning of the Visual Demo 4 group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Visual Demo 4", "", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Open Smartstore and Login group
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn object equals 'Log in'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn, "contentText", cmpEqual, "Log in");
  //Check whether '*LOG IN*' matches the text optically recognized in the image Aliases.browser.pageShop.header.navUsd.
  OCR.Recognize(Aliases.browser.pageShop.header.navUsd).CheckText("*LOG IN*");
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkLogIn' link.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Sets the text 'OldSailor1960' in the 'textboxUsernameoremail' text editor.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("OldSailor1960");
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1);
  //Sets the state of the 'checkboxRememberMe' checkbox to True.
  Aliases.browser.pageLogin.sectionContent.checkboxRememberMe.ClickChecked(true);
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//a[contains(., 'OldSailor1960')]") object equals 'OldSailor1960'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//a[contains(., 'OldSailor1960')]"), "contentText", cmpEqual, "OldSailor1960");
  //The end of the Open Smartstore and Login group
  //The beginning of the Visual Test Steps group
  //Evaluates the visual fidelity of user interface.
  var testRun;
  testRun = VisualTest.CreateRun("DefaultFS");
  testRun.SetAllowedFails(0);
  testRun.AddIgnoredElement("Aliases.browser.pageShop.FindElement(\"//a[contains(., 'OldSailor1960')]\")");
  testRun.Capture(Aliases.browser.pageShop, "pageShop FullScreen Default", testRun.Fullpage, 0, true);
  //The end of the Visual Test Steps group
  //The beginning of the Close Browser group
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //The end of the Close Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Visual Demo 4 group
}