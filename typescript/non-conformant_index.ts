//{fact rule=os-command-injection@v1.0 defects=1}

'use strict'

const sh = require('execa').shell

module.exports = function (port) {
  if (!Number.parseInt(port)) {
    return Promise.reject(new Error('Invalid argument provided for port'))
  }

  if (process.platform === 'win32') {
    return sh(
      `Stop-Process -Id (Get-NetTCPConnection -LocalPort ${port}).OwningProcess -Force`
    )
  }

  return sh(
    `lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`
  )
}


//{/fact}