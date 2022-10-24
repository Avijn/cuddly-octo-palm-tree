// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  //getBookmarks()
});

function getBookmarks()
{
    chrome.bookmarks.getTree()
    .then(result => {
      result.forEach(elements => {
          elements["children"].forEach(element =>
          { 
            if(element.children != undefined)
            {
                console.log("========");
                checkForChildrenInBookmarks(element)
            }

            //   console.log(element.children[1].title);
            //   let folderChildren = element.children
            //   folderChildren.forEach(directory =>
            //   {
            //       console.log(directory.title);
            //   })
              
          })        
      });
    })
}

function checkForChildrenInBookmarks(dir)
{
    dir.children.forEach(directory =>{
        console.log(directory.title);
        if(directory.children != undefined)
        {
            checkForChildrenInBookmarks(directory)
        }
    })
}