//@Debug
//USEUNIT Bearstore_Common
function Test_Bearstore_Register()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Test_Bearstore_Register");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Test_Bearstore_Register", "This is a test template to be used as a seed for new tests", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test Modules group
  //Runs script module routines
  Mod_Register_User("JaneRezner001", "JaneRezner@Null.Org", "Jane", "Reznerr", 1, "May", "1990");
  Mod_Close_Browser();
  //The end of the Test Modules group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}
