function Hello_World_Fail()
{
  //Posts an error to the test log.
  Log.Error("Hello world (log message)", "");
  //Runs the "Orders" tested application.
  //TestedApps.Orders.Run();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  //Aliases.Orders.MainForm.MainMenu.Click("View|List");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  //Aliases.Orders.MainForm.MainMenu.Click("View|Small Icons");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  //Aliases.Orders.MainForm.MainMenu.Click("View|Large Icons");
  //Closes the 'MainForm' window.
  //Aliases.Orders.MainForm.Close();
}

//@Smoke
function Hello_World_Pass()
{
  //Posts an information message to the test log.
  Log.Message("Hello world (log message)", "");
}

