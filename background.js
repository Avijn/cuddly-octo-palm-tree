// background.js
import writeUserData from "./Database/DbCalls.js"
import getBrowserData from "./browserData/broswerStuff.js"

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    getBrowserData()
});

function getCurrentUserLocation()
{
    getLocation()
}

// function getBrowserData()
// {
//     const seconds = 1000 * 60 * 60 * 24
//     const oneDayAgo = (new Date).getTime() - seconds
//
//     chrome.history.search({
//         "text": "",
//         "startTime": oneDayAgo
//     }, function (historyItems) {
//         historyItems.forEach(item => {
//             const data = {
//                 "timestamp": item.lastVisitTime,
//                 "url": item.url,
//                 "title": item.title
//             }
//
//             console.log(data)
//             // writeBrowserData(1, data)
//         })
//     })
// }