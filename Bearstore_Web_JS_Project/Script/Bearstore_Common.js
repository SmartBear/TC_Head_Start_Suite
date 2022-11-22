function Mod_Close_Browser()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Close_Browser");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Close_Browser", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Close_Browser group
  //Closes the specified Window object.
  Aliases.browser.Close();
  //Delays the test execution for the specified time period.
  Delay(2000, "Allow browser time to close");
  //The end of the Mod_Close_Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Contact_User()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Contact_User");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Contact_User", "This module loops through the contact form", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Loop through Excel Data group
  //This test may fail if the target environment does not have the needed data source driver installed or configured properly. --- KMJ 06292022
  //
  //To read data from Excel for data driven testing, make sure to install the 64-bit version of Microsoft Office 12.0 Access Database Engine OLE DB Provider. 
  //This is part of Microsoft Access Database Engine 2010 Redistributable. 
  //You can obtain it from the Microsoft website. Alternatively, you can try using the 32-bit version of TestExecute.
  //
  //Posts a warning to the test log.
  Log.Warning("If the needed data source driver for Excel is not installed or is not configured properly, this test will fail", "To read data, install the 64-bit version of Microsoft Office 12.0 Access Database Engine OLE DB Provider. \r\nIt is part of Microsoft Access Database Engine 2010 Redistributable. \r\nYou can find it on the Microsoft website. Alternatively, you can try using the 32-bit version of TestExecute.\r\n", pmNormal, Project.Variables.LogAtrribWarning);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.CurrentBrowser.Navigate("https://bearstore-testsite.smartbear.com/contactus");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'imageYourStoreName' control.
  Aliases.browser.pageContactus.header.link.imageYourStoreName.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageShop.Wait();
  Project.Variables.Contact_User1.Reset();
  var RecordIdx;
  for(RecordIdx = 1; RecordIdx < 5; RecordIdx++)
    Project.Variables.Contact_User1.Next();
  for(RecordIdx = 5; RecordIdx <= 8; RecordIdx++)
  {
    //Clicks the 'linkContactUs' link.
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageContactus.Wait();
    //Clicks the 'textboxYourName' control.
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.Click();
    //Sets the text KeywordTests.Mod_Contact_User.Variables.Contact_User("Name") in the 'textboxYourName' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.Contact_User1.Value("Name"));
    //Sets the text KeywordTests.Mod_Contact_User.Variables.Contact_User("Email") in the 'emailinputYourEmail' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.Contact_User1.Value("Email"));
    //Enters KeywordTests.Mod_Contact_User.Variables.Contact_User("Enquiry") in the 'textareaEnquiry' object.
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.Contact_User1.Value("Enquiry"));
    if(Aliases.browser.pageContactus.sectionContent.formYourName.labelYesIVeReadThe.Exists)
    {
      //Sets the state of the 'checkboxYesIVeReadThe' checkbox to True.
      Aliases.browser.pageContactus.sectionContent.formYourName.checkboxYesIVeReadThe.ClickChecked(true);
    }
    else
    {
      //Posts an information message to the test log.
      Log.Message("Privacy Checkbox did not display", "", pmNormal, Project.Variables.LogAtrribInformation);
    }
    //Clicks the 'buttonSendEmail' button.
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    //Delays the test execution for the specified time period.
    Delay(10000, "Long delay to ensure submit had completed");
    //Checks whether the 'contentText' property of the Aliases.browser.pageContactus.FindElement("//div[contains(text(), 'Your enquiry has been successfully sent to the store owner.')]") object equals 'Your enquiry has been successfully sent to the store owner.'.
    aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//div[contains(text(), 'Your enquiry has been successfully sent to the store owner.')]"), "contentText", cmpEqual, "Your enquiry has been successfully sent to the store owner.");
    Project.Variables.Contact_User1.Next();
  }
  //Checks whether the 'contentText' property of the Aliases.browser.pageContactus.FindElement("//div[contains(text(), 'Your enquiry has been successfully sent to the store owner.')]") object equals 'Your enquiry has been successfully sent to the store owner.'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//div[contains(text(), 'Your enquiry has been successfully sent to the store owner.')]"), "contentText", cmpEqual, "Your enquiry has been successfully sent to the store owner.");
  //The end of the Loop through Excel Data group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}


function Mod_Logout()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Logout");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Logout", "This is a module logs out of the Bearstore", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Logout group
  //This logs out of the Bearstore
  //Clicks the 'linkLogIn' control.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.Click();
  //Delays the test execution for the specified time period.
  Delay(2000, "2 second delay before clicking logout");
  //Clicks the 'textnodeLogOut' control.
  Aliases.browser.pageShop.header.navUsd.linkLogOut.textnodeLogOut.Click();
  //Delays the test execution for the specified time period.
  Delay(2000, "2 second delay before running Checkpoint");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.header.navUsd.linkLogIn object equals 'Log in'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.navUsd.linkLogIn, "contentText", cmpEqual, "Log in");
  //The end of the Mod_Logout group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Open_Chrome_Browser()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Open_Browser");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Open_Browser", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Open_Browser group
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://bearstore-testsite.smartbear.com/");
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageShop.header.link.imageYourStoreName.Click();
  //Checks whether the 'title' property of the Aliases.browser.pageShop.header.link.imageYourStoreName object equals 'SmartStore'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.link.imageYourStoreName, "title", cmpEqual, "SmartStore");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore, "contentText", cmpEqual, "Welcome to our store.");
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.pageShop.Picture(), "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation);
  //The end of the Mod_Open_Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

//@Seed
function Test_Login_Logout_Edge()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Test_Login_Logout_Edge");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Test_Login_Logout_Edge", "This is a test template to be used as a seed for new tests", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test Modules group
  //Runs script module routines
  Mod_Open_Edge_Browser();
  Mod_Login_Jack_Power();
  Mod_Logout()
  Mod_Close_Browser();
  //The end of the Test Modules group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

//@Debug
function Test_Contact_User()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Test_Template");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Test_Template", "This is a test template to be used as a seed for new tests", pmNormal, Project.Variables.LogAtrribTestTitle);
  //The beginning of the Test Modules group
  //Runs script module routines
  Mod_Open_Edge_Browser();
  Mod_Contact_User();
  Mod_Close_Browser();
  //The end of the Test Modules group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Open_Edge_Browser()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Open_Edge_Browser");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Open_Edge_Browser", "This test opens the Edge browser and and posts a picture of the Bearstore Page", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Open_Browser group
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://bearstore-testsite.smartbear.com/");
  //Checks whether the 'namePropStr' property of the Aliases.browser.pageShop.header.link.imageYourStoreName object equals 'company-logo.png'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.link.imageYourStoreName, "contentText", cmpEqual, "");
  //aqObject.CheckProperty(Aliases.browser.pageShop.header.link.imageYourStoreName, "namePropStr", cmpEqual, "company-logo.png");
  //Posts an image to the test log.
  Log.Picture(Aliases.browser.pageShop.Picture(), "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation);
  //The end of the Mod_Open_Browser group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Register_User(UserName, EMail, FirstName, LastName, Day, Month, Year)
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Register_User");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Register_User", "This test registers a user", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Mod_Register_User group
  //The beginning of the Navigate to the Register User Form group
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.CurrentBrowser.Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textnodeLogIn' control.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.textnodeLogIn.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Clicks the 'linkRegister' link.
  Aliases.browser.pageLogin.sectionContent.linkRegister.Click();
  //The end of the Navigate to the Register User Form group
  //The beginning of the Register_User group
  //The beginning of the Populate User Information group
  //Sets the text in the 'textboxFirstName' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.textboxFirstName.SetText(FirstName);
  //Sets the text in the 'textboxLastName' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.textboxLastName.SetText(LastName);
  //Selects the item of the 'selectDateOfBirth' combo box.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.selectDateOfBirth.ClickItem(Day);
  //Selects the item of the 'selectDateofbirthmonth' combo box.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.selectDateofbirthmonth.ClickItem(Month);
  //Selects the item of the 'selectDateofbirthyear' combo box.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.selectDateofbirthyear.ClickItem(Year);
  //Sets the text in the 'emailinputEmail' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.emailinputEmail.SetText(EMail);
  //Sets the text in the 'textboxUsername' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.textboxUsername.SetText(UserName);
  //Enters text in the text box.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPasswordundefined.passwordboxPassword.SetText("Power1!");
  //Sets the text 'Power1!' in the 'passwordboxConfirmPassword' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPasswordundefined.passwordboxConfirmPassword.SetText("Power1!");
  //Sets the text 'Sample Company Inc' in the 'textboxCompanyName' text editor.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetCompanyDetailsundefined.textboxCompanyName.SetText("Sample Company Inc");
  //Sets the state of the 'checkboxNewsletter' checkbox to True.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetOptionsundefined.checkboxNewsletter.ClickChecked(true);
  //The beginning of the Check for privacy statement checkbox group
  if(Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.checkboxYesIVeReadThe.Exists == true)
  {
    //Posts an information message to the test log.
    Log.Message("Privacy terms checkbox did display", "", pmNormal, Project.Variables.LogAtrribInformation);
    Aliases.browser.pageRegister.sectionContent.formRegisterForm.fieldsetYourPersonalDetailsundef.checkboxYesIVeReadThe.ClickChecked(true);
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message("Privacy terms checkbox did not display", "", pmNormal, Project.Variables.LogAtrribWarning);
  }
  //The end of the Check for privacy statement checkbox group
  //The end of the Populate User Information group
  //The beginning of the Submit Registration group
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.buttonRegisterButton.scrollIntoView();
  //Clicks the 'buttonRegisterButton' button.
  Aliases.browser.pageRegister.sectionContent.formRegisterForm.buttonRegisterButton.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageRegister.Wait();
  //The end of the Submit Registration group
  //The end of the Register_User group
  //The beginning of the Validate Registration group
  if(Aliases.browser.pageRegister.sectionContent.formRegisterForm.panelTheSpecifiedEmailAlready.Exists == true)
  {
    //Checks whether the 'contentText' property of the Aliases.browser.pageRegister.sectionContent.formRegisterForm.textnodeErrorExistingEMail object equals 'The specified email already exists'.
    aqObject.CheckProperty(Aliases.browser.pageRegister.sectionContent.formRegisterForm.textnodeErrorExistingEMail, "contentText", cmpEqual, "The specified email already exists");
    //Posts a warning to the test log.
    Log.Warning("Error Found - Registration Failed: User already exists", "", pmNormal, Project.Variables.LogAtrribWarning);
    //User already exists return to portal home
    //Clicks the 'imageYourStoreName' control.
    Aliases.browser.pageRegister.header.link.imageYourStoreName.Click();
    //Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore object equals 'Welcome to our store'.
    aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore, "contentText", cmpEqual, "Welcome to our store");
  }
  else
  {
    //Posts an information message to the test log.
    Log.Message("No error message appeared, continue registration", "", pmNormal, Project.Variables.LogAtrribInformation);
    //Checks whether the 'contentText' property of the Aliases.browser.pageRegister.FindElement("//p[contains(text(), 'Your registration completed')]") object equals 'Your registration completed'.
    aqObject.CheckProperty(Aliases.browser.pageRegister.FindElement("//p[contains(text(), 'Your registration completed')]"), "contentText", cmpEqual, "Your registration completed");
    //Clicks the 'linkContinue' link.
    Aliases.browser.pageRegister.sectionContent.linkContinue.Click();
    //Delays the test execution for the specified time period.
    Delay(5000);
    if(Aliases.browser.pageShop.header.navUsd.linkLogIn.ObjectLabel != "Log in")
    {
      //Runs a keyword test.
      KeywordTests.Mod_Logout.Run();
    }
  }
  //The end of the Validate Registration group
  //The end of the Mod_Register_User group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}

function Mod_Login_Jack_Power()
{
  //Replaces the current indicator text with the specified one.
  Indicator.PushText("Mod_Login_Jack_Power");
  //Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Mod_Login_Jack_Power", "This logs into the Bearstore as Jack Power", pmNormal, Project.Variables.LogAtrribModTitle);
  //The beginning of the Module_Routines group
  //These steps login and verifies that user is logged in
  //Clicks the 'linkLogIn' link.
  Aliases.browser.pageShop.header.navUsd.linkLogIn.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Clicks the 'textboxUsernameoremail' control.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.Click();
  //Sets the text 'JackPower001' in the 'textboxUsernameoremail' text editor.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("JackPower001");
  //Sets the text 'Power1!' in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText("Power1!");
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(10000, "10 second delay before running Checkpoint");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.header.navUsd.linkLogIn object equals 'JackPower001'.
  aqObject.CheckProperty(Aliases.browser.pageShop.header.navUsd.linkLogIn, "contentText", cmpEqual, "JackPower001");
  //The end of the Module_Routines group
  //Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder();
  //Restores the previous indicator text.
  Indicator.PopText();
}