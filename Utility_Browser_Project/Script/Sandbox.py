#@Debug
def Mod_Open_Brower_Chrome_RunOptions_Incognito():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_Chrome_RunOptions_Incognito")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_Chrome_RunOptions_Incognito", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_Chrome_RunOptions_Incognito group
    #Specifies the browser's command-line arguments.
    Browsers.Item("chrome").RunOptions = "--incognito"
    #Launches the specified browser and opens the specified URL in it.
    Browsers.Item[btChrome].Run("https://bearstore-testsite.smartbear.com/")
    #Delays the test execution for the specified time period.
    Delay(500)
    #Checks whether the 'CommandLine' property of the Aliases.browser object contains '--incognito'.
    aqObject.CheckProperty(Aliases.browser, "CommandLine", cmpContains, "--incognito")
    #Check whether '*Incognito*' matches the text optically recognized in the image Aliases.browser.BrowserWindow.
    OCR.Recognize(Aliases.browser.BrowserWindow).CheckText("*Incognito*")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_Chrome_RunOptions_Incognito group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()

def Mod_Open_Brower_Edge_RunOptions_In_Private():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_Edge_RunOptions_In_Private")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_Edge_RunOptions_In_Private", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_Edge_RunOptions_In_Private group
    #Specifies the browser's command-line arguments.
    Browsers.Item("edge").RunOptions = "-inprivate"
    #Launches the specified browser and opens the specified URL in it.
    Browsers.Item[btEdge].Run("https://bearstore-testsite.smartbear.com/")
    #Checks whether the 'title' property of the Aliases.browser.pageShop2.header.link.imageCompanyLogoPng object equals 'SmartStore'.
    aqObject.CheckProperty(Aliases.browser.pageShop2.header.link.imageCompanyLogoPng, "title", cmpEqual, "SmartStore")
    #Checks whether the 'CommandLine' property of the Aliases.browser object contains '-inprivate'.
    aqObject.CheckProperty(Aliases.browser, "CommandLine", cmpContains, "-inprivate")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_Edge_RunOptions_In_Private group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()

def Mod_Open_Brower_Firefox_RunOptions_Private():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_Firefox_RunOptions_Private_Window")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_Firefox_RunOptions_Private_Window", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_Firefox_RunOptions_Private_Window group
    #Specifies the browser's command-line arguments.
    Browsers.Item("firefox").RunOptions = "-private-window"
    #Launches the specified browser and opens the specified URL in it.
    Browsers.Item[btFirefox].Run("https://bearstore-testsite.smartbear.com/")
    #Checks whether the 'title' property of the Aliases.browser.pageShop2.header.link.imageCompanyLogoPng object equals 'SmartStore'.
    aqObject.CheckProperty(Aliases.browser.pageShop2.header.link.imageCompanyLogoPng, "title", cmpEqual, "SmartStore")
    #Checks whether the 'WndCaption' property of the Aliases.browser.BrowserWindow object contains 'Private Browsing'.
    aqObject.CheckProperty(Aliases.browser.BrowserWindow, "WndCaption", cmpContains, "Private Browsing")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_Firefox_RunOptions_Private_Window group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
