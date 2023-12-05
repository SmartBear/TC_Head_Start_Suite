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
 }
  
 