let context_id = -1;
let input = document.getElementById('logger')

chrome.input.ime.onFocus.addListener(function(context) {
    context_id = context.contextID;
});

chrome.input.ime.onBlur.addListener(function() {
    context_id = -1;
});

chrome.input.ime.onKeyEvent.addListener(
    function(engineID, keyData) {
        if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
            chrome.input.ime.commitText({"contextID": input,
                "text": keyData.key.toUpperCase()});
            return true;
        } else {
            return false;
        }
    }
)