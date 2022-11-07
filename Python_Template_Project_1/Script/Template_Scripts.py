def Script_Calling_Keyword_Test_Template():
    #**** Consider duplicating this text as comment inside of the keyword test
    #**** This can serve as a flowerbox description when converted to a script
    #**** KMJ 09122022
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Script_Calling_Keyword_Test_Template")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Script_Calling_Keyword_Test_Template", "All tests should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribTestTitle)
    #The beginning of the Test_Template_Module_Group group
    #Posts an information message to the test log.
    Log.Message("Script Calling Keyword Test Template Information Message", "Log entry in the Test Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation)
    #Runs a keyword test.
    KeywordTests.Mod_Template.Run()
    #The end of the Test_Template_Module_Group group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()

def Script_Test_Template():
    import Module_Scripts
    #**** Consider duplicating this text as comment inside of the keyword test
    #**** This can serve as a flowerbox description when converted to a script
    #**** KMJ 09122022
    #Replaces the current indicator text with the specified one.
    Indicator.PushText("Script_Test_Template")
    #Creates a log folder and makes it the current folder to which messages will be posted. This folder can contain messages of different types as well as subfolders.
    Log.AppendFolder("Script_Test_Template", "All tests should follow this formatting in order to provide consistency to the look and feel of output logs", pmNormal, Project.Variables.LogAtrribTestTitle)
    #The beginning of the Test_Template_Script_Routine_Group group
    #Posts an information message to the test log.
    Log.Message("Script Test Template Information Message", "Log entry in the Test Template Keyword Test", pmNormal, Project.Variables.LogAtrribInformation)
    #Runs a script routine.
    Module_Scripts.Script_Mod_Template()
    #The end of the Test_Template_Script_Routine_Group group
    #Pops the folder that is currently at the top of the folder stack out of the stack. This makes the folder that will become the top of the stack the default folder of the test log.
    Log.PopLogFolder()
    #Restores the previous indicator text.
    Indicator.PopText()
