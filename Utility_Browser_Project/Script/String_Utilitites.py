def SplitDemo3(Input_String):
    s = "Better late than never but better never late."
    # Assign list separator to space character
    prevSep = aqString.ListSeparator
    aqString.ListSeparator = " "
    # Split by spaces
    Log.Message("There are " + str(aqString.GetListLength(Input_String)) + " words in a string")
    Log.Message("The first word is: " + aqString.GetListItem(Input_String,0))
    Log.Message("The second word is: " + aqString.GetListItem(Input_String,1))
    Log.Message("The second word is: " + aqString.GetListItem(Input_String,2))
    Log.Message("The third word is: " + aqString.GetListItem(Input_String,3))
    s= aqString.GetListItem(Input_String,3)    
    x= aqString.GetLength(s)
    s = aqString.SubString(aqString.GetListItem(Input_String,3),1, x-2)
    Log.Message("The substring is: " + s)
    # Restore previous separator
    aqString.ListSeparator = prevSep