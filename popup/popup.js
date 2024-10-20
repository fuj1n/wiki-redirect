(() => {
    let state = true;

    function updateState() {
        let text_el = document.getElementById("status_text");
        text_el.innerText = state ? "enabled" : "disabled";
        text_el.className = state ? "enabled" : "disabled";

        let button_el = document.getElementById("toggle_button");
        button_el.className = state ? "" : "disabled-button";
    }

    chrome.storage.local.get(['state'], (result) => {
        state = result.state !== undefined ? result.state : true;
        updateState(state);
    });

    document.getElementById("toggle_button").addEventListener("click", async () => {
        state = !state;
        await chrome.storage.local.set({state: state});
        updateState();
    });
})();