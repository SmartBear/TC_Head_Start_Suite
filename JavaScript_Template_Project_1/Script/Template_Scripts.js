function Script_Test_Template()
{
  //**** Consider duplicating this text as comment inside of the keyword test
  //**** This can serve as a flowerbox description when converted to a script
  //**** KMJ 09122022
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Script_Test_Template");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Script_Test_Template", "All tests should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test_Template_Module_Group group
  //Posts an information message to the test log.
  Log.Message("Test Template Information Message", "Log entry in the Test Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation);
  //Runs a keyword test.
  KeywordTests.Mod_Template.Run();
  //The end of the Test_Template_Module_Group group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}