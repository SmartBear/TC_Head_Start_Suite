def Script_Mod_Template():
    #**** Consider duplicating this text as comment inside of the keyword test
    #**** This can serve as a flowerbox description when converted to a script
    #**** KMJ 09122022
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Script_Mod_Template")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Script_Mod_Template", "All test script modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Template_Main_Operations_Group group
    #Posts an information message to the test log.
    Log.Message("Script Module Template Information Message", "Log entry in the Script_Mod_Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Template_Main_Operations_Group group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
    
def Test_Edge_Headless():
  server = "localhost"
  capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  }

  url = "https://bearstore-testsite.smartbear.com/"
  Browsers.RemoteItem[server, capabilities].Run(url)
  
  #Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']") object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']"), "contentText", cmpEqual, "Welcome to our store.")
  #Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click()
  #Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait()
  #Checks whether the 'contentText' property of the Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']") object equals 'Contact Us'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']"), "contentText", cmpEqual, "Contact Us")
  #Clicks the 'imageSmartstore' control.
  #Posts an image to the test log.
  Log.Picture(Aliases.browser.BrowserWindow.Picture(), "", "")
  Aliases.browser.pageContactus.header.link.imageSmartstore.Click()

def Test_Chrome_Headless():
  server = "localhost"
  capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080"
  }

  url = "https://bearstore-testsite.smartbear.com/"
  Browsers.RemoteItem[server, capabilities].Run(url)
  
  #Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']") object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']"), "contentText", cmpEqual, "Welcome to our store.")
  #Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click()
  #Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait()
  #Checks whether the 'contentText' property of the Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']") object equals 'Contact Us'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']"), "contentText", cmpEqual, "Contact Us")
  #Clicks the 'imageSmartstore' control.
  #Posts an image to the test log.
  Log.Picture(Aliases.browser.BrowserWindow.Picture(), "", "")
  Aliases.browser.pageContactus.header.link.imageSmartstore.Click()
  
def Test_Firefox_Headless():
  server = "localhost"
  capabilities = {
    "browserName": "firefox",
    "screenResolution": "1920x1080"
  }

  url = "https://bearstore-testsite.smartbear.com/"
  Browsers.RemoteItem[server, capabilities].Run(url)
  
  #Checks whether the 'contentText' property of the Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']") object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.FindElement("//h1[.='Welcome to our store.']"), "contentText", cmpEqual, "Welcome to our store.")
  #Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click()
  #Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait()
  #Checks whether the 'contentText' property of the Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']") object equals 'Contact Us'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//h1[.='Contact Us']"), "contentText", cmpEqual, "Contact Us")
  #Clicks the 'imageSmartstore' control.
  #Posts an image to the test log.
  Log.Picture(Aliases.browser.BrowserWindow.Picture(), "", "")
  Aliases.browser.pageContactus.header.link.imageSmartstore.Click()