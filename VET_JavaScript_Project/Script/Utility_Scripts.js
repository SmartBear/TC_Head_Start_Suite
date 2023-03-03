function StringOccurrenceDemo()
{

  var aString = "Per aspera ad astra";
  var aSubString = "astra";
  var Res = aqString.Find(aString, aSubString);
  if ( Res != -1 )
    Log.Message("Substring '" + aSubString + "' was found in string '" + aString + "' at position " + Res)
  else
    Log.Message("There are no occurrences of '" + aSubString + "' in '" + aString + "'")
}

function RemovingSubString()
{
  var Str = "123456789";
  var StartPos = 3;
  var sLength = 4;
  var Res = aqString.Remove(Str, StartPos, sLength);
  
  Log.Message(Res); // Posts "12389"
}
  
function Extract_Substring()
{
  var Str = "LeadingString0123456789TrailingString";
  Log.Message(Str);
  var StartPos = 0;
  var sLength = 13;
  var Res = aqString.Remove(Str, StartPos, sLength);
  Log.Message(Res);
  var StartPos = 10;
  var sLength = 14;
  var Res = aqString.Remove(Res, StartPos, sLength);
  Log.Message(Res);
}
  
function Extract_Substring_2(Phrase, Pos1, Length1, Pos2, Length2)
{
  var Str = Phrase;
  Log.Message(Str);
  var Str = aqString.Remove(Phrase, Pos1, Length1);
  Log.Message(Str);
  var Str = aqString.Remove(Str, Pos2, Length2);
  Log.Message(Str);
  Project.Variables.RefNumber = aqConvert.StrToInt(Str);
  Log.Message(Project.Variables.RefNumber);
}