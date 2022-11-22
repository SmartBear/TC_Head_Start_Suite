def Kill_Using_While(ProcessName):
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Kill_Using_While")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Kill_Using_While", "Kill specified process", pmNormal, Project.Variables.LogAtrribModTitle)
    #Initiate While Loop Counters
    ProcessCounter = 0
    CountIt = 0
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Terminate " + ProcessName + " process if it is running")
    ProcessCounter = 0
    if Sys.WaitProcess(ProcessName,5000, 1).Exists:
        #Posts an information message to the test log.
        Log.Message(ProcessName +" process found running, close it", "")
        while Sys.WaitProcess(ProcessName, 5000, 1).Exists == True:
            #Terminates the process.
            Sys.Process(ProcessName).Terminate()
            ProcessCounter = ProcessCounter + 1
            #Posts an information message to the test log.
            Log.Message("Current process count = " + str(ProcessCounter), "")
    else:
        #Posts an information message to the test log.
        Log.Message(ProcessName +" process not found, no action taken", "")
    Indicator.PopText()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()