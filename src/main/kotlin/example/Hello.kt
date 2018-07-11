package example

import k_chrome_api.ScriptDetails
import k_chrome_api.chrome
import kotlin.browser.window

fun main(args: Array<String>) {
    chrome.runtime.onMessage.addListener { request, _ ->
        if (request.action == "GET_DOM") {
            @Suppress("UnsafeCastFromDynamic")
            val doc: String = request.source
            window.alert(doc)
        }
    }
    requestDom()
}

private fun requestDom() {
    chrome.tabs.getSelected(null) { tab ->
        tab.id?.let { tabId ->
            chrome.tabs.executeScript(tabId, ScriptDetails.File("./node_modules/kotlin/kotlin.js")) { _ ->
                if (!checkLastError()) {
                    chrome.tabs.executeScript(tabId, ScriptDetails.File("./k-chrome-api.js")) { _ ->
                        if (!checkLastError()) {
                            chrome.tabs.executeScript(tabId, ScriptDetails.File("./generated/run-in-tab/plugin.js")) { _ ->
                                checkLastError()
                            }
                        }
                    }
                }
            }
        }
    }
}

private fun checkLastError(): Boolean {
    val error = chrome.runtime.lastError
    if (error != null) {
        window.alert(error.message)
        return true
    }
    return false
}
