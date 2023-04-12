#@QuickTest
def Get_TestComplete_Version_Information():
    #The beginning of the Get_TestComplete_Version_Information group
    if Aliases.TestComplete.Exists:
        #Posts an information message to the test log.
        Log.Message("TestComplete Version  Found = " + aqConvert.VarToStr(Aliases.TestComplete.FileVersionInfo), "")
    else:
        #Posts an information message to the test log.
        Log.Message("TestComplete is not running", "")
    #The end of the Get_TestComplete_Version_Information group

#@QuickTest
def Get_TestExecute_Version_Information():
    #The beginning of the Get_TestExecute_Version_Information group
    if Aliases.TestExecute.Exists:
        #Posts an information message to the test log.
        Log.Message("TestExecute Version = " + aqConvert.VarToStr(Aliases.TestExecute.FileVersionInfo), "")
    else:
        #Posts an information message to the test log.
        Log.Message("TestExecute is not running", "")
    #The end of the Get_TestExecute_Version_Information group

def Close_Browser():
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Close_Browser")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Close_Browser", "This test closes the browser and waits 2 seconds", pmNormal, Project.Variables.LogAtrribModTitle)
    #The beginning of the Close Browser group
    #Closes the specified Window object.
    Aliases.browser.Close()
    #Delays the test execution for the specified time period.
    Delay(2000, "Allow browser time to close")
    #The end of the Close Browser group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
