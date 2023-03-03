def RemovingSubString():
  #**** Sample from Documentation KMJ 03/02/2023
  #Replaces the current indicator text with the specified one.
  Indicator.PushText("RemovingSubString")
  #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("RemovingSubString", "All test script modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle)
  #The beginning of the RemovingSubString group
  #Posts an information message to the test log.
  Log.Message("RemovingSubString", "Sample From Documentation", pmNormal, Project.Variables.LogAtrribInformation)
  #The end of the Mod_Template_Main_Operations_Group group
  Str = "123456789"
  StartPos = 3
  sLength = 4
  Res = aqString.Remove(Str, StartPos, sLength)
  Log.Message(Res) # Posts "12389"
  #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder()
  #Restores the previous indicator text.
  Indicator.PopText()

def Extract_Substring():
  #**** Sample from Documentation KMJ 03/02/2023
  #Replaces the current indicator text with the specified one.
  Indicator.PushText("Extract_Substring")
  #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Extract_Substring", "All test script modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle)
  #The beginning of the RemovingSubString group
  #Posts an information message to the test log.
  Log.Message("Extract_Substring", "Sample From Documentation", pmNormal, Project.Variables.LogAtrribInformation)
  #The end of the Mod_Template_Main_Operations_Group group
  Str = "LeadingString0123456789TrailingString"
  Log.Message(Str)
  StartPos = 0
  sLength = 13
  Res = aqString.Remove(Str, StartPos, sLength)
  Log.Message(Res)
  StartPos = 10
  sLength = 14
  Res = aqString.Remove(Res, StartPos, sLength)
  Log.Message(Res)
  #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder()
  #Restores the previous indicator text.
  Indicator.PopText()
  
def Extract_Substring_2(Phrase, Pos1, Length1, Pos2, Length2):
  #**** Sample from Documentation KMJ 03/02/2023
  #Replaces the current indicator text with the specified one.
  Indicator.PushText("Extract_Substring_2")
  #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("Extract_Substring_2", "All test script modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle)
  #The beginning of the RemovingSubString group
  #Posts an information message to the test log.
  Log.Message("Extract_Substring_2", "Sample From Documentation", pmNormal, Project.Variables.LogAtrribInformation)
  #The end of the Mod_Template_Main_Operations_Group group
  Str = Phrase
  Log.Message(Str)
  Str = aqString.Remove(Phrase, Pos1, Length1)
  Log.Message(Str)
  Str = aqString.Remove(Str, Pos2, Length2)
  Log.Message(Str)
  Project.Variables.RefNumber = aqConvert.StrToInt(Str)
  Log.Message(Project.Variables.RefNumber)
  #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder()
  #Restores the previous indicator text.
  Indicator.PopText()
    
def StringOccurrenceDemo():
  #**** Sample from Documentation KMJ 03/02/2023
  #Replaces the current indicator text with the specified one.
  Indicator.PushText("StringOccurrenceDemo")
  #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
  Log.AppendFolder("StringOccurrenceDemo", "All test script modules should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribModTitle)
  #The beginning of the RemovingSubString group
  #Posts an information message to the test log.
  Log.Message("StringOccurrenceDemo", "Sample From Documentation", pmNormal, Project.Variables.LogAtrribInformation)
  #The end of the Mod_Template_Main_Operations_Group group
  aString = "Word "
  aSubString = "astra"
  Res = aqString.Find(aString, aSubString)
  if Res != -1:
    Log.Message("Substring '" + aSubString + "' was found in string '" + aString + "' at position " + str(Res))
  else:
    Log.Message("There are no occurrences of '" + aSubString + "' in '" + aString + "'")
  #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
  Log.PopLogFolder()
  #Restores the previous indicator text.
  Indicator.PopText()
  
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
