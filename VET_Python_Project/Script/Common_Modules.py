def Mod_Chrome_Open_Smartstore_Script():
    #The beginning of the Mod_Chrome_Open_Smartstore group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Chrome_Open_Smartstore", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #Launches the specified browser and opens the specified URL in it.
    Browsers.Item[btChrome].Run("https://bearstore-testsite.smartbear.com/")
    #Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize()
    #Posts an information message to the test log.
    Log.Message(Aliases.browser.FileVersionInfo, "")
    #Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.panelPhTitle6 object equals 'Welcome to our store.'.
    aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.panelPhTitle6, "contentText", cmpEqual, "Welcome to our store.")
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the Mod_Chrome_Open_Smartstore group

def Mod_Close_Browser_Script():
    #The beginning of the Mod_Close_Browser group
    #Closes the currently running browser
    #
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Close_Browser", "Closes the currently opened browser", pmNormal, Project.Variables.LogAtrribModTitle)
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Template")
    #Closes the browser.
    Aliases.browser.Close()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
    #The end of the Mod_Close_Browser group
