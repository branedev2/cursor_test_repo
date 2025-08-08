// Added the import of BrowserWindow. This was not present in original test case.

const { BrowserWindow } = require('electron')
// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_disable_websecurity
const mainWindow = new BrowserWindow({
    webPreferences: {
        webSecurity: false
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_disable_websecurity
const config = {
    webPreferences: {
        webSecurity: false
    }
}
// {/fact}

var newwin = new BrowserWindow(config)
// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_allow_http
const mainWindow = new BrowserWindow({
    webPreferences: {
        allowRunningInsecureContent: true
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_disable_websecurity
var x = new BrowserWindow({
    webPreferences: {
        webSecurity: false,
        allowRunningInsecureContent: true
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_blink_integration
const mainWindow = new BrowserWindow({
    webPreferences: {
        enableBlinkFeatures: 'ExecCommandInJavaScript'
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_allow_http
const mainWindow = new BrowserWindow({
    webPreferences: {
        allowRunningInsecureContent: true
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_nodejs_integration
const mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_context_isolation
const mainWindow = new BrowserWindow({
    webPreferences: {
        contextIsolation: false,
        preload: path.join(app.getAppPath(), 'preload.js')
    }
})
// {/fact}

// {fact rule=least-privilege-violation@v1.0 defects=1}
// ruleid:electron_experimental_features
const mainWindow = new BrowserWindow({
    webPreferences: {
        experimentalFeatures: true
    }
})
// {/fact}