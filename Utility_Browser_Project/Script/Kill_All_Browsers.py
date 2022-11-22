def Kill_All_Browsers():
    import Kill_Process
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Kill_All_Browsers")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Kill_All_Browsers", "Run kill browser via scripted routine", pmNormal, Project.Variables.LogAtrribModTitle)
    #Posts an information message to the test log.
    Log.Message("Call script routine repeatedly to kill all running browser processes", "")
    #The beginning of the Kill_All_Browsers group
    #Runs a script routine.
    Kill_Process.Kill_Using_While("firefox")
    #Runs a script routine.
    Kill_Process.Kill_Using_While("chrome")
    #Runs a script routine.
    Kill_Process.Kill_Using_While("iexplore")
    #Runs a script routine.
    Kill_Process.Kill_Using_While("msedge")
    #Runs a script routine.
    #Kill_Process.Kill_Using_While("opera")
    #The end of the Kill_All_Browsers group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
