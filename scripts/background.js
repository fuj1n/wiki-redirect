(() => {
    'use strict';

    const FROM_WIKI = "satisfactory.fandom.com";
    const TO_WIKI = "satisfactory.wiki.gg";

    let state = true;

    chrome.webNavigation.onBeforeNavigate.addListener(async (info) => {
        if (state) {
            if(info.url.includes("satisfactory.fandom.com")) {
                const redirectUrl = info.url.replace(FROM_WIKI, TO_WIKI);
                await chrome.tabs.update(info.tabId, { url: redirectUrl });
            }
        }
    });

    async function updateBadge() {
        await chrome.action.setBadgeText({ text: state ? "" : "OFF" });
        await chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
    }

    chrome.storage.local.get(['state'], async (result) => {
        state = result.state !== undefined ? result.state : true;
        await updateBadge();
    });

    chrome.storage.onChanged.addListener(async (changes, _) => {
        if (changes["state"] !== undefined && changes["state"].newValue !== changes["state"].oldValue) {
            state = changes["state"].newValue;
            await updateBadge();
        }
    });
})();
