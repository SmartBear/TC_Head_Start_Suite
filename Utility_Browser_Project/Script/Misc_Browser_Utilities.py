def Browsers_As_TestedApps():
    #The beginning of the Browsers_As_TestedApps group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Browsers_As_TestedApps", "", pmNormal, Project.Variables.LogAtrribTestTitle)
    #The beginning of the All Browsers group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("All Browsers", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #Runs all the tested applications.
    TestedApps.RunAll()
    #Posts an information message to the test log.
    #Log.Message("Browser Name = " + Aliases.browser.Name + " :Version = " + aqConvert.VarToStr(Aliases.browser.FileVersionInfo) + " :Process Type = " + Aliases.browser.ProcessType, "", pmNormal, Project.Variables.LogAtrribInformation)
    #Runs a keyword test.
    KeywordTests.Close_Open_Browsers.Run()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the All Browsers group
    #The beginning of the Edge Only group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Edge Only", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #Runs the "edge_inprivate" tested application.
    TestedApps.edge_inprivate.Run()
    #Posts an information message to the test log.
    Log.Message("Browser Name = " + Aliases.browser.Name + " :Version = " + aqConvert.VarToStr(Aliases.browser.FileVersionInfo) + " :Process Type = " + Aliases.browser.ProcessType, "", pmNormal, Project.Variables.LogAtrribInformation)
    #Check whether '*InPrivate browsin*' matches the text optically recognized in the image Aliases.msedge.pageNewtab.
    OCR.Recognize(Aliases.msedge.pageNewtab).CheckText("*InPrivate browsin*")
    #Posts an image to the test log.
    Log.Picture(Aliases.msedge.pageNewtab, "Edge InPrivate Browser Window", "")
    #Runs a keyword test.
    KeywordTests.Kill_Edge.Run()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the Edge Only group
    #The beginning of the Firefox Only group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Firefox Only", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #Runs the "firefox_private" tested application.
    TestedApps.firefox_private.Run()
    #Posts an information message to the test log.
    Log.Message("Browser Name = " + Aliases.browser.Name + " :Version = " + aqConvert.VarToStr(Aliases.browser.FileVersionInfo) + " :Process Type = " + Aliases.browser.ProcessType, "", pmNormal, Project.Variables.LogAtrribInformation)
    #Check whether '*Download the latest version of Firefox*' matches the text optically recognized in the image Aliases.browser.MozillaDropShadowWindowClass.
    OCR.Recognize(Aliases.browser.MozillaDropShadowWindowClass).CheckText("*Download the latest version of Firefox*")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.MozillaDropShadowWindowClass, "Firefox Update Available Pop Up Window", "")
    #Simulates a user action over the area that contains the recognized text.
    OCR.Recognize(Aliases.browser.MozillaDropShadowWindowClass).BlockByText("Dismiss").Click()
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.pageAboutPrivatebrowsing.Picture(), "Firefox Private Window", "")
    #Runs a keyword test.
    KeywordTests.Kill_Firefox.Run()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the Firefox Only group
    #The beginning of the Chrome Only group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Chrome Only", "", pmNormal, Project.Variables.LogAtrribModTitle)
    #Runs the "chrome_incognito" tested application.
    TestedApps.chrome_incognito.Run()
    #Posts an information message to the test log.
    Log.Message("Browser Name = " + Aliases.browser.Name + " :Version = " + aqConvert.VarToStr(Aliases.browser.FileVersionInfo) + " :Process Type = " + Aliases.browser.ProcessType, "", pmNormal, Project.Variables.LogAtrribInformation)
    #Check whether '*You've gone Incognito*' matches the text optically recognized in the image Aliases.browser.pageNewtab.
    OCR.Recognize(Aliases.browser.pageNewtab).CheckText("*You've gone Incognito*")
    #Posts an image to the test log.
    Log.Picture(Aliases.browser.pageNewtab, "Chrome Incognito Browser Window", "")
    #Runs a keyword test.
    KeywordTests.Kill_Chrome.Run()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the Chrome Only group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the Browsers_As_TestedApps group
