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
