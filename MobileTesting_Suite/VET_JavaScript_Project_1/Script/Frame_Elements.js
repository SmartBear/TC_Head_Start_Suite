function Sample_Run_Browser()
{
  Browsers.Item("chrome").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\kevin.johnson\\AppData\\Local\\Google\\Chrome\\User Data\\Default\" --disable-site-isolation-trials --test-type";
  Browsers.Item(btChrome).Run("");
}