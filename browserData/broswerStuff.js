export default function getBrowserData()
{
    const seconds = 1000 * 60 /* * 60 * 24 * 7*/
    const oneWeekAgo = (new Date).getTime() - seconds

    chrome.history.search({
        "text": "",
        "startTime": oneWeekAgo
    }, function (historyItems) {
        historyItems.forEach(item => {
            const data = {
                "timestamp": item.lastVisitTime,
                "url": item.url,
                "title": item.title
            }

            console.log(data)
            // writeBrowserData(1, data)
        })
    })
}