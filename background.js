// background.js
import writeUserData from "./Database/DbCalls.js"
import { allCookies } from "./Cookies/Cookies.js"

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  //writeUserData(4, "name", "Testemail@email.com", "test");
  
  // getCurrentUserLocation()
  getAllCookies()
});

function getCurrentUserLocation()
{
    getLocation()
}

function getAllCookies()
{
  allCookies()
}
