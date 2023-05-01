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
//@Seed
function Hello_World_Pass()
{
  //Posts an information message to the test log.
  Log.Message("Hello world (log message)", "");
}

function Hello_World_Warning()
{
  //Posts a warning to the test log.
  Log.Warning("Example of a Warning log message", "");
}

function Test_Close_Orders_App()
{
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
}

function Test_Menu_Navigation()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("View|List");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("View|Small Icons");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("View|Large Icons");
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
}

function Test_New_Function()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run(1, true);
  //Clicks the 'MSTaskListWClass' object.
  Aliases.explorer.wndShell_TrayWnd.ReBarWindow32.MSTaskSwWClass.MSTaskListWClass.Click(84, 63);
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|New");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Enters the text 'Jane Smith' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Jane Smith");
  //Clicks the 'OrderForm' object.
  Aliases.Orders.OrderForm.Click(371, 438);
  //Clicks the 'ButtonOK' object.
  Aliases.Orders.OrderForm.ButtonOK.Click(46, 1);
}

function Test_Open_Orders_App()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
}

//@Debug
function Test_Loop_Sample()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run(1, true);
  //The beginning of the More Operations group
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Enters the text 'Fake Name' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Fake Name");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //The end of the More Operations group
  //The beginning of the Windows Title Check group
  //This performs an if... then... else... loop to confirm the window title is as expected
  //
  if(Aliases.Orders.MainForm.WndCaption == "Orders - Untitled")
  {
    //Posts an information message to the test log.
    Log.Message("The window title is as expected", "");
    //Posts an information message to the test log.
    Log.Message(Aliases.Orders.MainForm.WndCaption, "This is the current window caption");
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message(Aliases.Orders.MainForm.WndCaption, "This is the current window caption");
    //Closes the 'MainForm' window.
    Aliases.Orders.MainForm.Close();
    //Stops running the project tests and posts the specified error string to the log.
    Log.Error("The window title is not as expected exiting test");
    Runner.Stop(true);
  }
  //The end of the Windows Title Check group
  //The beginning of the Change Window Title group
  //This performs a file save to change the window title
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save");
  //Enters the text 'SaveMe' in the 'ComboBox' text editor.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText("SaveMe");
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
  if(Aliases.Orders.dlgConfirmSaveAs.Exists)
  {
    //Posts an information message to the test log.
    Log.Message("Aliases.Orders.dlgConfirmSaveAs displayed", "");
    //Clicks the 'btnYes' button.
    Aliases.Orders.dlgConfirmSaveAs.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message("Aliases.Orders.dlgConfirmSaveAs did not display", "");
  }
  //Delays the test execution for the specified time period.
  Delay(5000, "Hard Coded 5 Second Delay to allow page to load");
  //The end of the Change Window Title group
  //The beginning of the Windows Title Check group
  //This performs an if... then... else... loop to confirm the window title is as expected
  //
  if(Aliases.Orders.MainForm.WndCaption == "Orders - Untitled")
  {
    //Posts an information message to the test log.
    Log.Message("The window title is as expected", "");
    //Posts an information message to the test log.
    Log.Message(Aliases.Orders.MainForm.WndCaption, "This is the current window caption");
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message(Aliases.Orders.MainForm.WndCaption, "This is the current window caption");
    //Closes the 'MainForm' window.
    Aliases.Orders.MainForm.Close();
    //Stops running the project tests and posts the specified error string to the log.
    Log.Error("The window title is not as expected exiting test");
    Runner.Stop(true);
  }
  //The end of the Windows Title Check group
  //The beginning of the More Operations group
  //Posts an information message to the test log.
  Log.Message("This operation should not be performed as the Windows Title Check has exited the keyword test", "");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(78, 13);
  //Enters the text 'Fake Name' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Fake Name");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //The end of the More Operations group
}