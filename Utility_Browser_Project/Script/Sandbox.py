def Mod_Open_Brower_Chrome_TestApp_Incognito():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_Chrome_TestApp_Incognito")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_Chrome_TestApp_Incognito", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_Chrome_TestApp_Incognito group
    #Runs the "chrome" tested application.
    TestedApps.Chrome.Run()
    #Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize()
    #Opens the specified URL in a running instance of the specified browser.
    Browsers.Item[btChrome].Navigate("https://bearstore-testsite.smartbear.com/")
    #Delays the test execution for the specified time period.
    Delay(500)
    #Check whether '*Incognito*' matches the text optically recognized in the image Aliases.browser.BrowserWindow.
    OCR.Recognize(Aliases.browser.BrowserWindow).CheckText("*Incognito*")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_Chrome_TestApp_Incognito group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()

def Mod_Open_Brower_Edge_TestApp_In_Private():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_Edge_TestApp_In_Private")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_Edge_TestApp_In_Private", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_Edge_TestApp_In_Private group
    #Runs the "msedge" tested application.
    TestedApps.MSEdge.Run()
    #Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize()
    #Opens the specified URL in a running instance of the specified browser.
    Browsers.Item[btEdge].Navigate("https://bearstore-testsite.smartbear.com/")
    #Delays the test execution for the specified time period.
    Delay(500)
    #Checks whether the 'title' property of the Aliases.browser.pageShop2.header.link.imageCompanyLogoPng object equals 'SmartStore'.
    aqObject.CheckProperty(Aliases.browser.pageShop2.header.link.imageCompanyLogoPng, "title", cmpEqual, "SmartStore")
    #Checks whether the 'CommandLine' property of the Aliases.browser object contains '-inprivate'.
    aqObject.CheckProperty(Aliases.browser, "CommandLine", cmpContains, "-inprivate")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_Edge_TestApp_In_Private group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()

def Mod_Open_Brower_FireFox_TestApp_Private():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Mod_Open_Brower_FireFox_TestApp_Private")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Mod_Open_Brower_FireFox_TestApp_Private", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Mod_Open_Brower_FireFox_TestApp_Private group
    #Runs the "firefox" tested application.
    TestedApps.FireFox.Run()
    #Opens the specified URL in a running instance of the specified browser.
    Browsers.Item[btFirefox].Navigate("https://bearstore-testsite.smartbear.com/")
    #Delays the test execution for the specified time period.
    Delay(500)
    #Checks whether the 'title' property of the Aliases.browser.pageShop2.header.link.imageCompanyLogoPng object equals 'SmartStore'.
    aqObject.CheckProperty(Aliases.browser.pageShop2.header.link.imageCompanyLogoPng, "title", cmpEqual, "SmartStore")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.BrowserWindow, "Post picture of Bearstore Page", "This is too allow post run confirmation of the Bearstore home page", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Mod_Open_Brower_FireFox_TestApp_Private group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
