// background.js
import writeUserData from "./Database/DbConnect.js"
//import  { writeUserData }  from "./Database/DbCalls.js"
//import * as DbCalls from './Database/DbCalls'
//require('./Database/DbCalls')

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  //writeUserData(1, "name", "email", "test");
  writeUserData(1, "name", "email", "test");
  console.log("test");
  //getBookmarks()
});