function Null_Test()
{
  //Checks whether the 'Text' property of the Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]"), "Text", cmpEqual, "");
  if(Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.contentText != "")
  {
    //Posts an information message to the test log.
    Log.Message("Content text is not empty", Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.contentText, pmNormal, undefined, Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail);
  }
  else
  {
    //Posts a warning to the test log.
    Log.Warning("Content text is empty", "", pmNormal, undefined, Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail);
  }
  //Here is a quick comment
  //Checks whether the 'Text' property of the Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]") object equals ''.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]"), "Text", cmpEqual, "");
  //Sets the text 'Add@Null.Org' in the 'emailinputYourEmail' text editor.
  Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText("Add@Null.Org");
  //Checks whether the 'Text' property of the Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]") object equals 'Add@Null.Org'.
  aqObject.CheckProperty(Aliases.browser.pageContactus.FindElement("//input[@id=(//label[.='Your email']/@for)]"), "Text", cmpEqual, "Add@Null.Org");
}