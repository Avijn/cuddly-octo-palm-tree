
export async function allCookies(){
    const cookieStores = await chrome.cookies.getAllCookieStores()
    console.log(cookieStores)
    let cookies = [];
    cookieStores[0]["tabIds"].forEach(element => {
        cookies.push(chrome.cookies.getAll({"storeId":element }))
    });
    console.log(cookies)
}