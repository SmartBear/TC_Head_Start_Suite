def Open_All_Browsers():
    #Open All Installed Browsers and leave them open
    #Runs a keyword test.
    KeywordTests.Get_TestExecute_Version_Information.Run()
    #Iterates through the specified browsers.
    i = 0
    while i < Browsers.Count:
        Browsers.Item[i].Run()
        #Delays the test execution for the specified time period.
        Delay(1000, "Generic 1 Second Delay")
        #Maximizes the specified Window object.
        Aliases.browser.BrowserWindow.Maximize()
        #Delays the test execution for the specified time period.
        Delay(1000, "Generic 1 Second Delay")
        #Posts an information message to the test log.
        Log.Message("Browser Name = " + Aliases.browser.Name + " :Version = " + aqConvert.VarToStr(Aliases.browser.FileVersionInfo) + " :Process Type = " + Aliases.browser.ProcessType, "", pmNormal, Project.Variables.LogAtrribInformation)
        i = i + 1
