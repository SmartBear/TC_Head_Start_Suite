#@Seed
#@InfinitePass
#@Smoke
def Passing_Test():
    #Posts an information message to the test log.
    Log.Message("This is simply a test to demonstrate passing execution", "", pmNormal, Project.Variables.LogAtrribInformation)
    #Posts an event to the test log.
    Log.Event("Today is the first of the rest of your life", "More information to get started", pmNormal, Project.Variables.LogAtrribInformation)
    #Launches the specified browser and opens the specified URL in it.
    Browsers.Item[btChrome].Run("https://bearstore-testsite.smartbear.com/")
    #Clicks the 'linkLogIn' link.
    Aliases.browser.pageShop.header.navUsd.navMenubarMyAccount.linkLogIn.Click()
    #Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageLogin.Wait()
    #Clicks the 'textboxUsernameoremail' control.
    Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.Click()
    #Delays the test execution for the specified time period.
    Delay(5000, "I am waiting for five seconds")
    TimeoutValue = Options.Run.Timeout
    Options.Run.Timeout = 60000
    #Sets the text 'FakeUser' in the 'textboxUsernameoremail' text editor.
    Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("FakeUser")
    Options.Run.Timeout = TimeoutValue
    #Enters '[Tab]' in the 'textboxUsernameoremail' object.
    Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.Keys("[Tab]")
    #Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
    Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1)
    #Clicks the 'buttonLogIn' button.
    Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton()
    #Checks whether the 'contentText' property of the Aliases.browser.pageLogin.FindElement("//li[.='The credentials provided are incorrect']") object equals 'The credentials provided are incorrect'.
    aqObject.CheckProperty(Aliases.browser.pageLogin.FindElement("//li[.='The credentials provided are incorrect']"), "contentText", cmpEqual, "The credentials provided are incorrect")
    #Simple comment
    #Clicks the 'BrowserWindow' object.
    Aliases.browser.BrowserWindow.Click(981, 101)
    #Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close()

@given("Open Broser URL")
def step_impl():
  raise NotImplementedError

@when("Login is visible")
def step_impl():
  raise NotImplementedError

@then("Login and Validate")
def step_impl():
  raise NotImplementedError

#@Seed
#@InfinitePass
#@Smoke
def Passing_Test_2():
  #Posts an information message to the test log.
  Log.Message("This is simply a test to demonstrate passing execution", "", pmNormal, Project.Variables.LogAtrribInformation)
  #Posts an event to the test log.
  Log.Event("Today is the first of the rest of your life", "More information to get started", pmNormal, Project.Variables.LogAtrribInformation)
  #Launches the specified browser and opens the specified URL in it.
  Browsers.Item[btChrome].Run("https://bearstore-testsite.smartbear.com/")
  #Clicks the 'linkLogIn' link.
  Aliases.browser.pageShop.header.navUsd.navMenubarMyAccount.linkLogIn.Click()
  #Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait()
  #Clicks the 'textboxUsernameoremail' control.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.Click()
  #Delays the test execution for the specified time period.
  Delay(5000, "I am waiting for five seconds")
  TimeoutValue = Options.Run.Timeout
  Options.Run.Timeout = 60000
  #Sets the text 'FakeUser' in the 'textboxUsernameoremail' text editor.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.SetText("FakeUser")
  Options.Run.Timeout = TimeoutValue
  #Enters '[Tab]' in the 'textboxUsernameoremail' object.
  Aliases.browser.pageLogin.sectionContent.textboxUsernameoremail.Keys("[Tab]")
  #Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1)
  #Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton()
  #Posts an image to the test log.
  Log.Picture(Aliases.opera.wndChrome_WidgetWin_1.Chrome_RenderWidgetHostHWND.Picture(), "", "")
  #Posts an image to the test log.
  Log.Picture(Aliases.browser.pageShop.sectionContent.articleBasketball.linkBasketball.imagePictureForCategoryBasketbal.Picture(), "", "")
  
  #Checks whether the 'contentText' property of the Aliases.browser.pageLogin.FindElement("//li[.='The credentials provided are incorrect']") object equals 'The credentials provided are incorrect'.
  aqObject.CheckProperty(Aliases.browser.pageLogin.FindElement("//li[.='The credentials provided are incorrect']"), "contentText", cmpEqual, "The credentials provided are incorrect")
  #Simple comment
  #Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(981, 101)
  #Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close()
