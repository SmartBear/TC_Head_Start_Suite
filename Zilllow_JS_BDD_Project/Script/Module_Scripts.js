function Mod_Template_Scripted()
{
  //**** Consider duplicating this text as comment inside of the keyword test
  //**** This can serve as a flowerbox description when converted to a script
  //**** KMJ 09122022
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Template");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Template", "All test modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Template_Main_Operations_Group group
  //Posts an information message to the test log.
  Log.Message("Module Template Information Message", "Log entry in the Mod_Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation);
  //The end of the Mod_Template_Main_Operations_Group group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Open_Zillow_Website()
{
  //Mod_Open_Zillow_Website
  //Opens the Zillow Website in the Edge browser in Incognito mode
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Open_Zillow_Website");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Open_Zillow_Website", "All test modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Open_Zillow_Website group
  //Posts an information message to the test log.
  Log.Message("Mod_Open_Zillow_Website", "", pmNormal, Project.Variables.LogAtrribModTitle);
  //Specifies the browser's command-line arguments.
  Browsers.Item("edge").RunOptions = "-inprivate";
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://www.zillow.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'imageZillowLogo' control.
  Aliases.browser.pageZillowRealEstateApartmentsMo.headerBuy.navMain.linkZillowRealEstate.imageZillowLogo.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageZillowRealEstateApartmentsMo.Wait();
  //Clicks the 'linkRent' control.
  Aliases.browser.pageZillowRealEstateApartmentsMo.headerBuy.navMain.textnodeRent.linkRent.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageWwwZillowComHomesForRent.Wait();
  //The end of the Mod_Open_Zillow_Website group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Close_Browser()
{
  //Mod_Close_Browser
  //Closes the browser
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Close_Browser");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Close_Browser", "Closes the browser", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Close_Browser group
  //Posts an information message to the test log.
  Log.Message("Mod_Close_Browser", "", pmNormal, Project.Variables.LogAtrribModTitle);
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
  //The end of the Mod_Close_Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}