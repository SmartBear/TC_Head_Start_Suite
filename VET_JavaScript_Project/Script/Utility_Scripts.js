function StringOccurrenceDemo()
{
  Indicator.PushText("StringOccurrenceDemo");
  Log.AppendFolder("StringOccurrenceDemo", "Sample Script", pmNormal, Project.Variables.LogAtrribModTitle);
  var aString = "Per aspera ad astra";
  var aSubString = "astra";
  var Res = aqString.Find(aString, aSubString);
  if ( Res != -1 )
    Log.Message("Substring '" + aSubString + "' was found in string '" + aString + "' at position " + Res)
  else
    Log.Message("There are no occurrences of '" + aSubString + "' in '" + aString + "'")
  Log.PopLogFolder();
  Indicator.PopText();
}

function RemovingSubString()
{
  Indicator.PushText("RemovingSubString");
  Log.AppendFolder("RemovingSubString", "Sample Script", pmNormal, Project.Variables.LogAtrribModTitle);
  var Str = "123456789";
  var StartPos = 3;
  var sLength = 4;
  var Res = aqString.Remove(Str, StartPos, sLength);  
  Log.Message(Res); // Posts "12389"
  Log.PopLogFolder();
  Indicator.PopText()  
}
  
function Extract_Substring()
{
  Indicator.PushText("Extract_Substring");
  Log.AppendFolder("Extract_Substring", "Sample Script", pmNormal, Project.Variables.LogAtrribModTitle);
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
  Log.PopLogFolder();
  Indicator.PopText();  
}
  
function Extract_Substring_2(Phrase, Pos1, Length1, Pos2, Length2)
{
  //This script uses the aqString.Remove method to trim the leading and trailing text from a number contained with a given string
  //Then it converts the string into an integer, and places it into Project.Variables.RefNumber
  Indicator.PushText("Extract_Substring_2");
  Log.AppendFolder("Extract_Substring_2", "Sample Script", pmNormal, Project.Variables.LogAtrribModTitle);
  var Str = Phrase;
  Log.Message(Str);
  var Str = aqString.Remove(Phrase, Pos1, Length1);
  Log.Message(Str);
  var Str = aqString.Remove(Str, Pos2, Length2);
  Log.Message(Str);
  Project.Variables.RefNumber = aqConvert.StrToInt(Str);
  ProjectSuite.Variables.Saved_Number = aqConvert.StrToInt(Str);
  Log.Message(Project.Variables.RefNumber);
  Log.PopLogFolder();
  Indicator.PopText();
}

function GetListSample(Phrase)
{
  Indicator.PushText("GetListSample");
  Log.AppendFolder("GetListSample", "Just noodling", pmNormal, Project.Variables.LogAtrribModTitle);
  var Str = Phrase;
  aqString.ListSeparator = " ";
  Log.Message(Str);
  Log.Message(aqString.GetListLength(Str));
  for (var i = 0; i < aqString.GetListLength(Str); i++)
  Log.Message(aqString.GetListItem(Str, i));
  Log.PopLogFolder();
  Indicator.PopText();  
}