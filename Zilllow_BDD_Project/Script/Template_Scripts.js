//USEUNIT Module_Scripts
//@Seed
//@Smoke
function Test_Template_Scripted()
{
  //**** Consider duplicating this text as comment inside of the keyword test
  //**** This can serve as a flowerbox description when converted to a script
  //**** KMJ 09122022
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Test_Template");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Test_Template", "All tests should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test_Template_Module_Group group
  //Posts an information message to the test log.
  Log.Message("Test Template Information Message", "Log entry in the Test Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation);
  //Runs a keyword test.
  KeywordTests.Mod_Template.Run();
  //Runs a script routine.
  Mod_Template_Scripted();
  //The end of the Test_Template_Module_Group group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Open_Zillow_Website_Scripted()
{
  //Specifies the browser's command-line arguments.
  Browsers.Item("edge").RunOptions = "-inprivate";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://www.zillow.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'BrowserWindow' control.
  Aliases.browser.BrowserWindow.Click();
  //Clicks the 'imageZillowLogo' control.
  Aliases.browser.pageZillowRealEstateApartmentsMo.headerBuy.navMain.linkZillowRealEstate.imageZillowLogo.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageZillowRealEstateApartmentsMo.Wait();
}