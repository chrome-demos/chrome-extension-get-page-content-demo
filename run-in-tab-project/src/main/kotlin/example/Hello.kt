package example

import k_chrome_api.RuntimeMessage
import k_chrome_api.chrome
import kotlin.browser.document

fun main(args: Array<String>) {
    chrome.runtime.sendMessage(RuntimeMessage(
            action = "GET_DOM",
            source = document.body?.outerHTML
    ))
}