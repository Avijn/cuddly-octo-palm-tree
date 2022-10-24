// background.js
import writeUserData from "./Database/DbCalls.js"

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  writeUserData(4, "name", "Testemail@email.com", "test");
});