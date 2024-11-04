function Sample_Wait_Loop()
{
  var Counter;
  Counter = 0;
  //**** Sample Demo of Waits - KMJ 
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Sample_Wait_Loop");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Sample_Wait_Loop", "**** Sample Demo of Wait Loop - KMJ ", pmNormal, Project.Variables.LogAtrribTestTitle);
  //Runs a keyword test.
  KeywordTests.Mod_Open_BearStore_Chrome.Run();
  //The beginning of the Wait Loop Sample group
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Sample Wait Loop", "");
  Counter = 0;
  while(Aliases.browser.pageShop.header.navUsd.linkLogIn.Exists == false && Counter < 3)
  {
    //Posts a warning to the test log.
    Log.Warning("Log In not found", "");
    Counter = Counter + 1;
  }
  if(Counter == 3)
  {
    //Posts an error to the test log.
    Log.Error("Log In not found and counter exceeded limit", "");
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message("Log In found and counter less than limit", "");
  }
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //The end of the Wait Loop Sample group
  //Runs a keyword test.
  KeywordTests.Mod_Close_Browser.Run();
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}