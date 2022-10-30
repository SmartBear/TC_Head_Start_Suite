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