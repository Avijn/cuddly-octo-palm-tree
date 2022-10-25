// background.js
import writeUserData from "./Database/DbCalls.js"

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  //writeUserData(4, "name", "Testemail@email.com", "test");
  
  // getCurrentUserLocation()
});

function getCurrentUserLocation()
{
    getLocation()
}
