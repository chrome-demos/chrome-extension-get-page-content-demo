Chrome Extension Get Page Content
=================================

Get the content of selected page, and alert it.

Build:

```
./gradlew compileKotlin2Js
cd extension
npm install
```

Install:
-------

Chrome -> `Extensions` -> Enable `Developer Mode` -> `Load unpacked` -> select the `extension` directory of this project.

Open a page, and click the icon of this extension on toolbar, you will see the content of the page is alerted.

Notice:
-------

The extension can't get the content of the page directly, instead, it has to use message system provided by chrome, and inject a js to the page to send the content to the message bus, and we get it from extension. 