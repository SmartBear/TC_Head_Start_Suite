def EventControl_TestEngine_OnStartTest(Sender):
    LogAttribEventTitle = None
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("EventControl_General_OnStartTest", "This is a TestComplete event that runs common module routines at the onset of every test\r\n\r\nThe purpose of this keyword test is to set the color coding schema for the project messages")
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("EventControl_General_OnStartTest")
    #The beginning of the EventControl_General_OnStartTest group
    #The beginning of the Set Log Attribute Local EventControl_OnStartTest Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    LogAttribEventTitle = LastResult
    #Posts an information message to the test log.
    Log.Message("Events_OnStartTest" + ": Running Common Modules", "This is a TestComplete event that runs common module routines at the onset of every test\r\n\r\nThe purpose of this keyword test is to set the color coding schema for the project messages", pmNormal, LogAttribEventTitle)
    #The end of the Set Log Attribute Local EventControl_OnStartTest Variable group
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Set Log Attributes (Color Coding Project Variables)", "These routines set project variables fo log message color coding", pmNormal, LogAttribEventTitle)
    #The beginning of the Set Log Attribute Project Variables group
    #The beginning of the Set LogAtrribInformation Project Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    Project.Variables.LogAtrribInformation = LastResult
    #Posts an information message to the test log.
    Log.Message("Color Code Information", "Use this for Informational messages that you wish to differentiate from intrinsic TestComplete Informational messages", pmNormal, Project.Variables.LogAtrribInformation)
    #The end of the Set LogAtrribInformation Project Variable group
    #The beginning of the Set LogAtrribWarning Project Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    Project.Variables.LogAtrribWarning = LastResult
    #Posts an information message to the test log.
    Log.Message("Color Code Warning", "Use this for Warning messages that you wish to differentiate from intrinsic TestComplete Warning messages", pmNormal, Project.Variables.LogAtrribWarning)
    #The end of the Set LogAtrribWarning Project Variable group
    #The beginning of the Set LogAtrribFailed Project Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    Project.Variables.LogAtrribFailed = LastResult
    #Posts an information message to the test log.
    Log.Message("Color Code Forced Error", "Use this for Failed messages that you wish to differentiate from intrinsic Failed messages", pmNormal, Project.Variables.LogAtrribFailed)
    #The end of the Set LogAtrribFailed Project Variable group
    #The beginning of the Set LogAtrribTestTitle Project Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    Project.Variables.LogAtrribTestTitle = LastResult
    #Posts an information message to the test log.
    Log.Message("Color Code Test Title", "Use this for Test Title Log messages", pmNormal, Project.Variables.LogAtrribTestTitle)
    #The end of the Set LogAtrribTestTitle Project Variable group
    #The beginning of the Set LogAtrribModTitle Project Variable group
    #Unable to convert the operation:
    #Operation: Log Attributes
    #Plug-in: Log Attributes Keyword Test Operation (Version: 1.0, SmartBear Software)
    #No value is assigned to the LastResult variable, because the operation that assigns it has not been converted.
    LastResult = None
    Project.Variables.LogAtrribModTitle = LastResult
    #Posts an information message to the test log.
    Log.Message("Color Code Module Title", "Use this for Module Title Log messages", pmNormal, Project.Variables.LogAtrribModTitle)
    #The end of the Set LogAtrribModTitle Project Variable group
    #The end of the Set Log Attribute Project Variables group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #The end of the EventControl_General_OnStartTest group
    #Restores the previous indicator text.
    Indicator.PopText()
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
