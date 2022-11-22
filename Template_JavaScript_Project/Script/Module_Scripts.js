function Script_Mod_Template()
{
  //**** Consider duplicating this text as comment inside of the keyword test
  //**** This can serve as a flowerbox description when converted to a script
  //**** KMJ 09122022
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Script_Mod_Template");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Script_Mod_Template", "All test modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Template_Main_Operations_Group group
  //Posts an information message to the test log.
  Log.Message("Module Template Information Message", "Log entry in the Mod_Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation);
  //The end of the Mod_Template_Main_Operations_Group group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}