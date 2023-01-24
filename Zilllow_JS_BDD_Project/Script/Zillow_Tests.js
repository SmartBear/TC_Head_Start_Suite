Given("Open Zillow in Edge", function Open_Zillow_Website()
{
  Browsers.Item(btEdge).Run("edge://www.zillow.com/");
  Aliases.browser.BrowserWindow.Maximize();
  
});

When("Filtered Rentals in Somerville MA", function (){
});

Then("Validate Search Results", function (){
});

Then("Zoom Map", function (){
});

Then("Hover over bubble", function (){
});

Then("Save data from bubble", function (){
});

Then("Click on bubble", function (){
});

Then("Close Edge", function (){
});