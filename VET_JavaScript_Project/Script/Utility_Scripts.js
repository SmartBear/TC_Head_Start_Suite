function Test_Chrome_Headless()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "chrome",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
 }
 
function Test_Edge_Headless()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);
 
  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  var searchBar = page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/input");
  searchBar.click();
  searchBar.value = "Ball";
  page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/button").click();
  Log.Picture(page.Picture(), "","");
  page.CheckProperty(Aliases.browser.pageShop.sectionContent.panelPhTitle6, "contentText", cmpEqual, "Welcome to our store.");
 }
  
//Sample (not headless)
function BearStoreTest()
{
  var webSite = "https://bearstore-testsite.smartbear.com"
  Browsers.Item(btChrome).Run(webSite);
  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  var searchBar = page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/input");
  searchBar.click();
  searchBar.value = "Ball";
  page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/button").click();
  page.Wait(5000);
  Log.Picture(page.Picture(), "","");
}

//Sample (headless)
function HeadlessBearStoreTest()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);

  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  var searchBar = page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/input");
  searchBar.click();
  searchBar.value = "Ball";
  page.FindElement("//*[@id='header']/div[2]/div/div/div[1]/div[2]/form/button").click();
  page.Wait(5000);
  
  aqObject.CheckProperty(page.FindElement("//h1[contains(text(), 'Search result for')]"), "contentText", cmpEqual, "Search result for\nBall");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  
}

//Sample (headless)
function HeadlessBearStoreTestII()
{
  var server = "localhost";
  var capabilities = {
    "browserName": "edge",
    "screenResolution": "1920x1080"
  };

  var url = "https://bearstore-testsite.smartbear.com/";
  Browsers.RemoteItem(server, capabilities).Run(url);

  var browser = Sys.Browser();
  var page = browser.page("*bearstore-testsite.smartbear.com*");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
    
  var LoginBtn = page.FindElement("//a[contains(., 'Log in')]");
  LoginBtn.click();
  page.Wait(5000);
  
  aqObject.CheckProperty(page.FindElement("//h1[.='Sign In']"), "contentText", cmpEqual, "Sign In");
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  
  var UName = page.FindElement("#UsernameOrEmail");
  var PWord = page.FindElement("#Password")
  UName.value = "OldSailor1960";  
  PWord.value = "Smartbear1!";
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
  page.FindElement("//button[contains(text(), 'Log in')]").click();
  page.Wait(5000);
  Log.Picture(page.Picture(), "Picture of Page","Detailed description");
}
