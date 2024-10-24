# Wiki Redirector

Simple Chrome extension to redirect from Fandom Wiki to another wiki.

By default, configured to redirect from the Satisfactory Fandom Wiki to wiki.gg.

## Installation
The extension is currently pending review on the Chrome Web Store. Once it's approved, you'll be able to find it [here](https://chromewebstore.google.com/detail/satisfactory-wiki-redirec/miajahohjdfghkaokgpdinbmlckpcloj). 

## Customization

In order to change the source and target wikis, you'll need to edit the scripts/background.js file.
    
```js
const FROM_WIKI = "satisfactory.fandom.com";
const TO_WIKI = "satisfactory.wiki.gg";
```

In order to change the popup text, you'll need to edit the scripts/popup.html file.