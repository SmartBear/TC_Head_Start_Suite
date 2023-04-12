//@Sanity
//@Seed
function Test_Open_Close_Website()
{
  //**** This test opens the Zillow Website, confirms it has opened, then closes the browser session
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Test_Open_Close_Website");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Test_Open_Close_Website", "All tests should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test_Open_Close_Website group
  //Posts an information message to the test log.
  Log.Message("Test_Open_Close_Website", "**** This test opens the Zillow Website, confirms it has opened, then closes the browser session", pmNormal, Project.Variables.LogAtrribInformation);
  //Runs a keyword test.
  KeywordTests.Mod_Open_Zillow_Website.Run();
  //Runs a keyword test.
  KeywordTests.Mod_Close_Browser.Run();
  //The end of the Test_Open_Close_Website group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}